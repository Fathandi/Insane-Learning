from machine import Pin, ADC, PWM
import network
import urequests
import ujson
import time
from lcd_api import LcdApi
from i2c_lcd import I2cLcd

# Konfigurasi WiFi
SSID = "YOUR_WIFI_SSID"
PASSWORD = "YOUR_WIFI_PASSWORD"

# Konfigurasi Pin
MQ2_PIN = 34  # Pin ADC untuk sensor MQ-2
BUZZER_PIN = 25  # Pin untuk buzzer
LED_WARNING_PIN = 26  # LED indikator peringatan
LED_NORMAL_PIN = 27  # LED indikator normal

# Konfigurasi LCD I2C
I2C_ADDR = 0x27
I2C_NUM_ROWS = 2
I2C_NUM_COLS = 16

# Konfigurasi Threshold (sesuaikan dengan kalibrasi sensor)
SMOKE_THRESHOLD = 1500  # Nilai batas deteksi asap
DANGER_THRESHOLD = 2000  # Nilai batas berbahaya

# Konfigurasi Telegram (untuk notifikasi)
BOT_TOKEN = "YOUR_BOT_TOKEN"
CHAT_ID = "YOUR_CHAT_ID"

# Inisialisasi Komponen
mq2_sensor = ADC(Pin(MQ2_PIN))
mq2_sensor.atten(ADC.ATTN_11DB)  # Konfigurasi untuk pembacaan 0-4095

buzzer = PWM(Pin(BUZZER_PIN))
led_warning = Pin(LED_WARNING_PIN, Pin.OUT)
led_normal = Pin(LED_NORMAL_PIN, Pin.OUT)

# Inisialisasi LCD
i2c = machine.I2C(0, scl=machine.Pin(22), sda=machine.Pin(21), freq=400000)
lcd = I2cLcd(i2c, I2C_ADDR, I2C_NUM_ROWS, I2C_NUM_COLS)

# Koneksi WiFi
def connect_wifi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print('Menghubungkan ke WiFi...')
        wlan.connect(SSID, PASSWORD)
        while not wlan.isconnected():
            pass
    print('Konfigurasi jaringan:', wlan.ifconfig())

# Fungsi untuk mengirim notifikasi Telegram
def send_telegram_alert(message):
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    data = {
        "chat_id": CHAT_ID,
        "text": message
    }
    try:
        response = urequests.post(url, json=data)
        response.close()
    except Exception as e:
        print(f"Error sending Telegram alert: {e}")

# Fungsi untuk mengaktifkan buzzer
def activate_buzzer(frequency=2000):
    buzzer.freq(frequency)
    buzzer.duty(512)  # 50% duty cycle

def deactivate_buzzer():
    buzzer.duty(0)

# Fungsi untuk update LCD
def update_lcd(value, status):
    lcd.clear()
    lcd.move_to(0, 0)
    lcd.putstr(f"Nilai: {value}")
    lcd.move_to(0, 1)
    lcd.putstr(f"Status: {status}")

# Fungsi untuk mengirim data ke server (contoh menggunakan ThingSpeak)
def send_to_server(value):
    API_KEY = "YOUR_THINGSPEAK_API_KEY"
    url = f"https://api.thingspeak.com/update?api_key={API_KEY}&field1={value}"
    try:
        response = urequests.get(url)
        response.close()
    except Exception as e:
        print(f"Error sending data to server: {e}")

# Fungsi untuk mendapatkan lokasi berdasarkan ID sensor
def get_location(sensor_id):
    locations = {
        "SENSOR_1": "Toilet Lantai 1",
        "SENSOR_2": "Toilet Lantai 2",
        "SENSOR_3": "Kantin",
        "SENSOR_4": "Belakang Gedung",
    }
    return locations.get(sensor_id, "Lokasi tidak dikenal")

# Main loop
def main():
    SENSOR_ID = "SENSOR_1"  # Sesuaikan dengan ID sensor yang dipasang
    location = get_location(SENSOR_ID)
    last_alert_time = 0
    alert_cooldown = 300  # 5 menit cooldown antara alert
    
    connect_wifi()
    print("Sistem Pendeteksi Asap Aktif")
    
    while True:
        try:
            # Baca nilai sensor
            smoke_value = mq2_sensor.read()
            current_time = time.time()
            
            # Evaluasi kondisi
            if smoke_value >= DANGER_THRESHOLD:
                status = "BAHAYA!"
                led_warning.value(1)
                led_normal.value(0)
                activate_buzzer()
                
                # Kirim alert jika cooldown sudah berlalu
                if current_time - last_alert_time > alert_cooldown:
                    alert_message = f"""
                    ⚠️ PERINGATAN ASAP ROKOK! ⚠️
                    Lokasi: {location}
                    Nilai Deteksi: {smoke_value}
                    Status: Terdeteksi asap rokok!
                    
                    Mohon segera lakukan pemeriksaan di lokasi tersebut.
                    """
                    send_telegram_alert(alert_message)
                    last_alert_time = current_time
                    
            elif smoke_value >= SMOKE_THRESHOLD:
                status = "PERINGATAN"
                led_warning.value(1)
                led_normal.value(0)
                activate_buzzer(1000)  # Frekuensi lebih rendah untuk peringatan
                
            else:
                status = "NORMAL"
                led_warning.value(0)
                led_normal.value(1)
                deactivate_buzzer()
            
            # Update display
            update_lcd(smoke_value, status)
            
            # Kirim data ke server
            send_to_server(smoke_value)
            
            # Delay
            time.sleep(2)
            
        except Exception as e:
            print(f"Error: {e}")
            time.sleep(5)

if __name__ == "__main__":
    main()
from machine import Pin, ADC, PWM
from time import sleep
import network
import socket
import sqlite3
from lcd_api import LcdApi
from i2c_lcd import I2cLcd

# Konfigurasi WiFi
SSID = "YOUR_WIFI_SSID"
PASSWORD = "YOUR_WIFI_PASSWORD"

# Konfigurasi Pin
MOISTURE_SENSOR_PIN = 36  # ADC Pin
RED_LED_PIN = 25
GREEN_LED_PIN = 26
BLUE_LED_PIN = 27
PUMP_PIN = 16
DRAIN_PIN = 17

# Konfigurasi LCD I2C
I2C_ADDR = 0x27
I2C_NUM_ROWS = 2
I2C_NUM_COLS = 16

# Inisialisasi komponen
moisture_sensor = ADC(Pin(MOISTURE_SENSOR_PIN))
moisture_sensor.atten(ADC.ATTN_11DB)  # Konfigurasi untuk pembacaan 0-4095

red_led = Pin(RED_LED_PIN, Pin.OUT)
green_led = Pin(GREEN_LED_PIN, Pin.OUT)
blue_led = Pin(BLUE_LED_PIN, Pin.OUT)
pump = Pin(PUMP_PIN, Pin.OUT)
drain = Pin(DRAIN_PIN, Pin.OUT)

# Inisialisasi LCD
i2c = machine.I2C(0, scl=machine.Pin(22), sda=machine.Pin(21), freq=400000)
lcd = I2cLcd(i2c, I2C_ADDR, I2C_NUM_ROWS, I2C_NUM_COLS)

# Koneksi WiFi
def connect_wifi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print('Connecting to WiFi...')
        wlan.connect(SSID, PASSWORD)
        while not wlan.isconnected():
            pass
    print('Network config:', wlan.ifconfig())

# Inisialisasi Database
def init_database():
    conn = sqlite3.connect('soil_moisture.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS moisture_readings
                 (timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                  moisture_value INTEGER,
                  status TEXT)''')
    conn.commit()
    conn.close()

# Fungsi untuk mendapatkan status kelembaban
def get_moisture_status(value):
    # Kalibrasi nilai sesuai dengan sensor Anda
    if value < 1000:  # Basah
        return "BASAH", "BLUE"
    elif value < 2500:  # Lembab
        return "LEMBAB", "GREEN"
    else:  # Kering
        return "KERING", "RED"

# Fungsi untuk mengontrol LED
def control_led(color):
    red_led.value(0)
    green_led.value(0)
    blue_led.value(0)
    
    if color == "RED":
        red_led.value(1)
    elif color == "GREEN":
        green_led.value(1)
    elif color == "BLUE":
        blue_led.value(1)

# Fungsi untuk mengontrol aktuator
def control_actuators(status):
    if status == "KERING":
        pump.value(1)  # Buka saluran air
        drain.value(0)
    elif status == "BASAH":
        pump.value(0)
        drain.value(1)  # Buka saluran pembuangan
    else:
        pump.value(0)
        drain.value(0)

# Fungsi untuk update LCD
def update_lcd(value, status):
    lcd.clear()
    lcd.move_to(0, 0)
    lcd.putstr(f"Nilai: {value}")
    lcd.move_to(0, 1)
    lcd.putstr(f"Status: {status}")

# Fungsi untuk menyimpan data ke database
def save_to_database(value, status):
    conn = sqlite3.connect('soil_moisture.db')
    c = conn.cursor()
    c.execute("INSERT INTO moisture_readings (moisture_value, status) VALUES (?, ?)",
              (value, status))
    conn.commit()
    conn.close()

# Main loop
def main():
    connect_wifi()
    init_database()
    
    while True:
        try:
            # Baca nilai sensor
            moisture_value = moisture_sensor.read()
            
            # Dapatkan status
            status, led_color = get_moisture_status(moisture_value)
            
            # Update semua komponen
            control_led(led_color)
            control_actuators(status)
            update_lcd(moisture_value, status)
            save_to_database(moisture_value, status)
            
            # Delay
            sleep(5)
            
        except Exception as e:
            print(f"Error: {e}")
            sleep(5)

if _name_ == "_main_":
    main()

#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Inisialisasi LCD (0x27 adalah alamat I2C default, sesuaikan jika diperlukan)
LiquidCrystal_I2C lcd(0x27, 16, 2);

// Definisi pin
const int soilMoisturePin = A0;  // Pin analog sensor YL-63
const int redLedPin = 9;    // Pin LED merah
const int greenLedPin = 10; // Pin LED hijau
const int blueLedPin = 11;  // Pin LED biru

// Ambang batas kelembaban (sesuaikan berdasarkan kebutuhan Anda)
const int dryThreshold = 300;    // Di bawah ini dianggap kering
const int wetThreshold = 700;    // Di atas ini dianggap basah

// Penyesuaian tegangan LED
// Untuk output 2.5V (dengan asumsi referensi 5V):
// 2.5V / 5V = 0.5 = 50%
// 255 (PWM maksimum) * 0.5 = 127
const int MAX_LED_VALUE = 127;  // Output maksimum ~2.5V

void setup() {
  // Inisialisasi komunikasi serial
  Serial.begin(9600);
  
  // Inisialisasi LCD
  lcd.init();
  lcd.backlight();
  
  // Atur pin LED sebagai output
  pinMode(redLedPin, OUTPUT);
  pinMode(greenLedPin, OUTPUT);
  pinMode(blueLedPin, OUTPUT);
  
  // Pesan awal LCD
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Soil Moisture:");
}

void loop() {
  // Baca sensor kelembaban tanah
  int moistureValue = analogRead(soilMoisturePin);
  
  // Konversi ke persentase (sesuaikan rentang berdasarkan kalibrasi sensor Anda)
  int moisturePercent = map(moistureValue, 0, 1023, 0, 100);
  
  // Perbarui tampilan LCD
  lcd.setCursor(0, 1);
  lcd.print("     "); // Hapus pembacaan sebelumnya
  lcd.setCursor(0, 1);
  lcd.print(moisturePercent);
  lcd.print("%");
  
  // Kontrol LED berdasarkan tingkat kelembaban
  if (moistureValue < dryThreshold) {
    // Tanah kering - LED Merah
    setLedColor(MAX_LED_VALUE, 0, 0);
  } else if (moistureValue > wetThreshold) {
    // Tanah basah - LED Biru
    setLedColor(0, 0, MAX_LED_VALUE);
  } else {
    // Kelembaban optimal - LED Hijau
    setLedColor(0, MAX_LED_VALUE, 0);
  }
  
  // Cetak ke Serial Monitor untuk debugging
  Serial.print("Nilai Kelembaban: ");
  Serial.print(moistureValue);
  Serial.print(" (");
  Serial.print(moisturePercent);
  Serial.println("%)");
  
  // Informasi debugging tegangan LED
  Serial.print("Tegangan LED: ~");
  Serial.print(5.0 * MAX_LED_VALUE / 255);
  Serial.println("V");
  
  // Jeda sebelum pembacaan berikutnya
  delay(1000);
}

// Fungsi untuk mengatur warna LED (katoda umum)
void setLedColor(int red, int green, int blue) {
  // Skala nilai input jika melebihi MAX_LED_VALUE
  red = min(red, MAX_LED_VALUE);
  green = min(green, MAX_LED_VALUE);
  blue = min(blue, MAX_LED_VALUE);
  
  analogWrite(redLedPin, red);
  analogWrite(greenLedPin, green);
  analogWrite(blueLedPin, blue);
}
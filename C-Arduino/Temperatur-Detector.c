#include <ESP8266WiFi.h>
#include <DHT.h>
#include <ThingSpeak.h>

// WiFi Settings
const char* ssid = "YOUR_WIFI_SSID";      // Ganti dengan nama WiFi Anda
const char* password = "YOUR_WIFI_PASS";   // Ganti dengan password WiFi Anda

// ThingSpeak Settings
unsigned long channelID = YOUR_CHANNEL_ID;           // Ganti dengan Channel ID ThingSpeak Anda
const char* apiKey = "YOUR_WRITE_API_KEY";          // Ganti dengan Write API Key ThingSpeak Anda

// DHT Sensor Settings
#define DHTPIN 2          // DHT sensor terhubung ke pin D4 (GPIO2)
#define DHTTYPE DHT11     // Menggunakan sensor DHT11
DHT dht(DHTPIN, DHTTYPE);

// Initialize WiFi client
WiFiClient client;

void setup() {
  Serial.begin(115200);
  
  // Memulai sensor DHT
  dht.begin();
  
  // Menghubungkan ke WiFi
  WiFi.begin(ssid, password);
  Serial.println("Menghubungkan ke WiFi...");
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("");
  Serial.println("WiFi terhubung!");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
  
  // Memulai ThingSpeak
  ThingSpeak.begin(client);
}

void loop() {
  // Membaca suhu dan kelembaban
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  // Memeriksa apakah pembacaan berhasil
  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Gagal membaca dari sensor DHT!");
    return;
  }
  
  // Menampilkan data di Serial Monitor
  Serial.print("Suhu: ");
  Serial.print(temperature);
  Serial.print(" °C, Kelembaban: ");
  Serial.print(humidity);
  Serial.println(" %");
  
  // Mengirim data ke ThingSpeak
  ThingSpeak.setField(1, temperature);
  ThingSpeak.setField(2, humidity);
  
  int status = ThingSpeak.writeFields(channelID, apiKey);
  if (status == 200) {
    Serial.println("Data berhasil dikirim ke ThingSpeak!");
  } else {
    Serial.println("Gagal mengirim data ke ThingSpeak!");
  }
  
  // Menunggu 15 detik sebelum pembacaan berikutnya
  // ThingSpeak membutuhkan minimal 15 detik antara update
  delay(15000);
}
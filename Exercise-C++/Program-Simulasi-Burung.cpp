#include <iostream>
#include <cmath>
// Fathih Apriandi
using namespace std;

int main(){
    int S; // Sudut Peluncuran Dalam Derajat 0-90
    double V; // Kecepatan
    double T; // Tinggi Pohon

    // Masukan Sudut (S), Kecepatan (V), Tinggi Pohon (T)
    cout << "Masukan Sudut : ";
    cin >> S;
    cout << "Masukan Kecepatan : ";
    cin >> V;
    cout << "Masukan Tinggi Pohon : ";
    cin >> T;
    cout << "============================" << endl;

    // Mengonversi sudut peluncuran dari derajat ke radian
    double theta = S*M_PI / 180.0;

    // Menghitung waktu tempuh
    double g = 10.0;
    double t = (2.0 *V* sin (theta)) / g;

    // Menghitung jarak horizontal terjatuh
    double horizontalDistance = V * cos(theta) * t;

    // Menghitung ketinggian maksimum
    double max_height = (V * V * sin(theta) * sin(theta)) / (2.0 * g);

    // Menampilkan hasil
    cout << "Jarak Terjauh : " << horizontalDistance << " meter" << endl;
    cout << "Waktu Tempuh : " << t << " detik" << endl;

    // Menampilkan status ketinggian
    if (max_height >= T){
    cout << "Status Ketinggian : Sesuai (1)" << endl;
    } else {
        cout << "Status Ketinggian : Tidak Sesuai (0)" << endl;
    }

    cout << "Ketinggian Maksimum : " << max_height << " meter" << endl;
}
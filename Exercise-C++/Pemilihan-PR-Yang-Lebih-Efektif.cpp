#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct PR {
    string nama;
    int waktuPengerjaan; // dalam menit
};

bool bandingkanWaktu(const PR &a, const PR &b) {
    return a.waktuPengerjaan < b.waktuPengerjaan;
}

int main() {
    int totalWaktu = 8 * 60; // 8 jam dalam menit
    int jumlahPR;
    
    cout << "Masukkan jumlah PR: ";
    cin >> jumlahPR;

    vector<PR> daftarPR;

    for (int i = 0; i < jumlahPR; i++) {
        PR pr;
        cout << "Masukkan nama PR " << i + 1 << ": ";
        cin.ignore(); 
        getline(cin, pr.nama);
        cout << "Masukkan waktu pengerjaan PR " << i + 1 << " (dalam menit): ";
        cin >> pr.waktuPengerjaan;
        daftarPR.push_back(pr);
    }

    // Urutkan PR berdasarkan waktu pengerjaan
    sort(daftarPR.begin(), daftarPR.end(), bandingkanWaktu);

    cout << "Daftar PR yang akan dikerjakan:" << endl;
    int waktuTersisa = totalWaktu;
    
    for (const PR &pr : daftarPR) {
        if (waktuTersisa >= pr.waktuPengerjaan) {
            cout << pr.nama << " (Waktu Pengerjaan: " << pr.waktuPengerjaan << " menit)" << endl;
            waktuTersisa -= pr.waktuPengerjaan;
        } else {
            cout << "Tidak cukup waktu untuk mengerjakan " << pr.nama << endl;
        }
    }

    cout << "Waktu yang tersisa: " << waktuTersisa << " menit" << endl;

    return 0;
}

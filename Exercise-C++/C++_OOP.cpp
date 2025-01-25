#include <iostream>  
using namespace std;  

class Car {  
private:  
    string brand;  
    string model;  
    int year;  

public:  
    // Konstruktor  
    Car(string b, string m, int y) {  
        brand = b;  
        model = m;  
        year = y;  
    }  

    // Fungsi anggota untuk menampilkan informasi mobil  
    void displayInfo() {  
        cout << "Brand: " << brand << endl;  
        cout << "Model: " << model << endl;  
        cout << "Year: " << year << endl;  
    }  
};  

int main() {  
    // Membuat objek dari kelas Car  
    Car myCar("Toyota", "Corolla", 2020);  
    myCar.displayInfo(); // Menampilkan informasi mobil  

    return 0;  
}

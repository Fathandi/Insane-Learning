#include <iostream>
#include <string>

using namespace std;

string lowerCase(string str) {
    for (int i = 0; i < str.length(); i++)
        str[i] = tolower(str[i]);
    return str;
}

string upperCase(string str) {
    for (int i = 0; i < str.length(); i++)
        str[i] = toupper(str[i]);
    return str;
}

int main() {
    string inputString;
    cout << "Masukan password: ";
    getline(cin, inputString);

    int angka = 0;
    int kapital = 0;
    int nonKapital = 0;
    int simbol = 0;

    for (char karakter : inputString) {
        if (isdigit(karakter)) {
            angka++;
        }
        else if (isupper(karakter)) {
            kapital++;
        }
        else if (islower(karakter)) {
            nonKapital++;
        }
        else {
            simbol++;
        }
    }

    cout << "\nKarakter angka: ";
    for (char karakter : inputString) {
        if (isdigit(karakter)) {
            cout << karakter << " ";
        }
    }

    cout << "\nKarakter huruf kapital: ";
    for (char karakter : inputString) {
        if (isupper(karakter)) {
            cout << karakter << " ";
        }
    }

    cout << "\nKarakter huruf non kapital: ";
    for (char karakter : inputString) {
        if (islower(karakter)) {
            cout << karakter << " ";
        }
    }

    cout << "\nKarakter simbol: ";
    for (char karakter : inputString) {
        if (!isalnum(karakter)) {
            cout << karakter << " ";
        }
    }

    cout << "\n\nJumlah karakter angka: " << angka << endl;
    cout << "Jumlah karakter huruf kapital: " << kapital << endl;
    cout << "Jumlah karakter huruf non kapital: " << nonKapital << endl;
    cout << "Jumlah karakter simbol: " << simbol << endl;

    return 0;
}

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
    string str;
    cin >> str;
    while (str != "STOP") {
        cout << lowerCase(str) << '\n';
        cout << upperCase(str) << '\n'; 
        cin >> str;
    }
}

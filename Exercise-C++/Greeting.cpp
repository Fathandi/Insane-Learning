#include <iostream>
using namespace std;

int main() {
    string name;
    int age;
    
    // Input from user
    cout << "Enter your name: ";
    getline(cin, name);
    
    cout << "Enter your age: ";
    cin >> age;
    
    // Output with greeting
    cout << "\nHello, " << name << "!" << endl;
    cout << "You are " << age << " years old." << endl;
    
    // Simple calculation
    cout << "In 5 years, you will be " << age + 5 << " years old." << endl;
    
    return 0;
}

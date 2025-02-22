#include <iostream>

class Car {
public:
std::string brand;
int year;

void display() {
std::cout << "Brand: " << brand << ", Year: " << year << std::endl;
}
};

int main() {
Car myCar;
myCar.brand = "Toyota";
myCar.year = 2020;

myCar.display();
return 0;
}

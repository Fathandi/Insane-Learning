def lower_case(string):
    return string.lower()

def upper_case(string):
    return string.upper()

def main():
    input_string = input("Masukan password: ")

    angka = 0
    kapital = 0
    non_kapital = 0
    simbol = 0

    for karakter in input_string:
        if karakter.isdigit():
            angka += 1
        elif karakter.isupper():
            kapital += 1
        elif karakter.islower():
            non_kapital += 1
        else:
            simbol += 1

    print("\nKarakter angka: ", end="")
    for karakter in input_string:
        if karakter.isdigit():
            print(karakter, end=" ")

    print("\nKarakter huruf kapital: ", end="")
    for karakter in input_string:
        if karakter.isupper():
            print(karakter, end=" ")

    print("\nKarakter huruf non kapital: ", end="")
    for karakter in input_string:
        if karakter.islower():
            print(karakter, end=" ")

    print("\nKarakter simbol: ", end="")
    for karakter in input_string:
        if not karakter.isalnum():
            print(karakter, end=" ")

    print(f"\n\nJumlah karakter angka: {angka}")
    print(f"Jumlah karakter huruf kapital: {kapital}")
    print(f"Jumlah karakter huruf non kapital: {non_kapital}")
    print(f"Jumlah karakter simbol: {simbol}")

if __name__ == "__main__":
    main()

class ATM:
    def __init__(self, saldo_awal=0):
        self.saldo = saldo_awal
        self.riwayat = []

    def cek_saldo(self):
        return self.saldo
    
    def setor_tunai(self, jumlah):
        if jumlah > 0:
            self.saldo += jumlah
            self.riwayat.append(f"Setor tunai: +Rp{jumlah:,}")
            return True, "Setor tunai berhasil"
        return False, "Jumlah setor harus lebih dari 0"
    
    def tarik_tunai(self, jumlah):
        if jumlah > 0:
            if jumlah <= self.saldo:
                self.saldo -= jumlah
                self.riwayat.append(f"Tarik tunai: -Rp{jumlah:,}")
                return True, "Tarik tunai berhasil"
            return False, "Saldo tidak mencukupi"
        return False, "Jumlah penarikan harus lebih dari 0"
    
    def lihat_riwayat(self):
        return self.riwayat

def main():
    atm = ATM(1000000)  # Saldo awal Rp1.000.000
    
    while True:
        print("\n=== MENU ATM ===")
        print("1. Cek Saldo")
        print("2. Setor Tunai")
        print("3. Tarik Tunai")
        print("4. Riwayat Transaksi")
        print("5. Keluar")
        
        pilihan = input("\nPilih menu (1-5): ")
        
        if pilihan == "1":
            print(f"\nSaldo Anda: Rp{atm.cek_saldo():,}")
            
        elif pilihan == "2":
            try:
                jumlah = int(input("Masukkan jumlah setor: Rp"))
                berhasil, pesan = atm.setor_tunai(jumlah)
                print(pesan)
            except ValueError:
                print("Masukkan jumlah yang valid")
                
        elif pilihan == "3":
            try:
                jumlah = int(input("Masukkan jumlah tarik: Rp"))
                berhasil, pesan = atm.tarik_tunai(jumlah)
                print(pesan)
            except ValueError:
                print("Masukkan jumlah yang valid")
                
        elif pilihan == "4":
            print("\nRiwayat Transaksi:")
            riwayat = atm.lihat_riwayat()
            if riwayat:
                for transaksi in riwayat:
                    print(transaksi)
            else:
                print("Belum ada transaksi")
                
        elif pilihan == "5":
            print("Terima kasih telah menggunakan ATM. Sampai jumpa!")
            break
            
        else:
            print("Pilihan tidak valid")

if __name__ == "__main__":
    main()

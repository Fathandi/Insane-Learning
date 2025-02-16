class Buku:
    def __init__(self, id_buku, judul, penulis, tahun_terbit):
        self.id_buku = id_buku
        self.judul = judul
        self.penulis = penulis
        self.tahun_terbit = tahun_terbit

class Perpustakaan:
    def __init__(self):
        self.koleksi_buku = []

    def tambah_buku(self, buku):
        self.koleksi_buku.append(buku)
        print(f"Buku {buku.judul} berhasil ditambahkan.")

    def hapus_buku(self, id_buku):
        buku_dihapus = False
        for buku in self.koleksi_buku:
            if buku.id_buku == id_buku:
                self.koleksi_buku.remove(buku)
                buku_dihapus = True
                print(f"Buku {buku.judul} berhasil dihapus.")
                break
        if not buku_dihapus:
            print(f"Buku dengan ID {id_buku} tidak ditemukan.")

    def perbarui_buku(self, id_buku, judul_baru, penulis_baru, tahun_terbit_baru):
        buku_diperbarui = False
        for buku in self.koleksi_buku:
            if buku.id_buku == id_buku:
                buku.judul = judul_baru
                buku.penulis = penulis_baru
                buku.tahun_terbit = tahun_terbit_baru
                buku_diperbarui = True
                print(f"Buku {buku.judul} berhasil diperbarui.")
                break
        if not buku_diperbarui:
            print(f"Buku dengan ID {id_buku} tidak ditemukan.")

    def cari_buku(self, id_buku):
        for buku in self.koleksi_buku:
            if buku.id_buku == id_buku:
                print(f"ID Buku: {buku.id_buku}")
                print(f"Judul: {buku.judul}")
                print(f"Penulis: {buku.penulis}")
                print(f"Tahun Terbit: {buku.tahun_terbit}")
                return
        print(f"Buku dengan ID {id_buku} tidak ditemukan.")

    def tampilkan_semua_buku(self):
        if not self.koleksi_buku:
            print("Tidak ada buku dalam koleksi.")
        else:
            for buku in self.koleksi_buku:
                print(f"ID Buku: {buku.id_buku} | Judul: {buku.judul} | Penulis: {buku.penulis} | Tahun Terbit: {buku.tahun_terbit}")

def main():
    perpustakaan = Perpustakaan()

    while True:
        print("\nMenu Perpustakaan:")
        print("1. Tambah Buku")
        print("2. Hapus Buku")
        print("3. Perbarui Buku")
        print("4. Cari Buku")
        print("5. Tampilkan Semua Buku")
        print("6. Keluar")

        pilihan = input("Pilih menu (1-6): ")

        if pilihan == "1":
            id_buku = input("Masukkan ID Buku: ")
            judul = input("Masukkan Judul Buku: ")
            penulis = input("Masukkan Penulis Buku: ")
            tahun_terbit = input("Masukkan Tahun Terbit: ")
            buku = Buku(id_buku, judul, penulis, tahun_terbit)
            perpustakaan.tambah_buku(buku)

        elif pilihan == "2":
            id_buku = input("Masukkan ID Buku yang ingin dihapus: ")
            perpustakaan.hapus_buku(id_buku)

        elif pilihan == "3":
            id_buku = input("Masukkan ID Buku yang ingin diperbarui: ")
            judul_baru = input("Masukkan Judul Baru: ")
            penulis_baru = input("Masukkan Penulis Baru: ")
            tahun_terbit_baru = input("Masukkan Tahun Terbit Baru: ")
            perpustakaan.perbarui_buku(id_buku, judul_baru, penulis_baru, tahun_terbit_baru)

        elif pilihan == "4":
            id_buku = input("Masukkan ID Buku yang ingin dicari: ")
            perpustakaan.cari_buku(id_buku)

        elif pilihan == "5":
            perpustakaan.tampilkan_semua_buku()

        elif pilihan == "6":
            print("Terima kasih telah menggunakan program manajemen perpustakaan.")
            break

        else:
            print("Pilihan tidak valid. Silakan pilih menu yang tersedia.")

if __name__ == "__main__":
    main()
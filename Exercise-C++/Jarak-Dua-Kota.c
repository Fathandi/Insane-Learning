#include <stdio.h>
#include <string.h>

#define JUMLAH_KOTA 10

int main() {
    int namaKota;
    printf("Masukkan jumlah kota: ");
    scanf("%d", &namaKota);

    if (namaKota > JUMLAH_KOTA) {
        printf("Batas jumlah kota terlampaui.\n");
        return 1;
    }

    char kota[JUMLAH_KOTA][20];
    int jarak[JUMLAH_KOTA - 1];

    printf("Masukkan nama-nama kota: \n");
    for (int i = 0; i < namaKota; i++) {
        scanf("%s", kota[i]);
    }

    printf("Masukkan jarak antar kota (dalam km):\n");
    for (int i = 0; i < namaKota - 1; i++) {
        printf("%s - %s: ", kota[i], kota[i + 1]);
        scanf("%d", &jarak[i]);
    }

    int totalJarak = 0;
    for (int i = 0; i < namaKota - 1; i++) {
        totalJarak += jarak[i];
    }

    printf("Rute yang ditempuh: ");
    for (int i = 0; i < namaKota; i++) {
        printf("%s", kota[i]);
        if (i < namaKota - 1) {
            printf(" - ");
        }
    }

    printf("\nTotal jarak: %d km\n", totalJarak);

    return 0;
}
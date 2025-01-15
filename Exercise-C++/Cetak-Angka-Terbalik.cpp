#include <stdio.h>

int main()
{

    int N;

    printf("Masukkan jumlah bilangan: ");
    scanf("%d", &N);

    int arr[N];

    printf("Masukkan %d bilangan:\n", N);
    for (int i = 0; i < N; i++)
    {
        scanf("%d", &arr[i]);
    }

    printf("Bilangan dalam urutan terbalik:\n");
    for (int i = N - 1; i >= 0; i--)
    {
        printf("%d ", arr[i]);
    }

    printf("\n");

    return 0;
}
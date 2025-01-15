#include <stdio.h>
#include <vector>
#define JUMLAH_KOTA 4
using namespace std;


/* 
Nama Kota
Kota A (0) | Kota C (2)
Kota B (1) | Kota D (4)

Jarak 
A - B = 10km | B - C = 8km  | C - D = 5km
A - C = 15km | B - D = 10km 
A - D = 20km |

Alamat pada memori komputer
0 10 15 20 10 0 8 10 15 8 0 5 20 10 5 0 
*/

int main()
{
    vector<vector<int>> jarak;
    int i, j;
    int asal, tujuan;

    for (i = 0; i < JUMLAH_KOTA; i++)
    {
        vector<int> vtr;
        for (j = 0; j < JUMLAH_KOTA; j++)
        {
            int x;
            scanf("%d", &x);
            vtr.push_back(x);
        }
        jarak.push_back(vtr);
        vtr.clear();
    }

    scanf("%d %d", &asal, &tujuan);
    printf("Jarak Kota -%d kota -%d = ", asal, tujuan);
    printf("%d km\n", jarak[asal][tujuan]);
}
//! cara promise
// const coba = new Promise((resolve, reject) => {
//     const waktu = 5000;
//     if (waktu < 5000) {
//         setTimeout(() => {
//             resolve("selesai")
//         }, waktu);
//     } else {
//         reject("kelamaan")
//     }
// })

// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba))


//! cara async/await
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve("selesai")
            }, waktu)
        } else {
            reject("kelamaan")
        }
    })
}

async function cobaAync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (errr) {
        console.error(errr);
    }
}

cobaAync();
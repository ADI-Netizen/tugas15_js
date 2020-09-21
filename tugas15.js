var ab = 8
var bc = 6

function akar(nilai1) {
    return Math.sqrt(nilai1)
}

function pangkat(nilai2, pangkat) {
    return Math.pow(nilai2, pangkat)
}

miring = akar(pangkat(ab, 2) + pangkat(bc, 2))

console.log("Nilai AB : ", ab)
console.log("Nilai BC : ", bc)
console.log("Panjang Sisi AC pada segitiga siku-siku tersebut adalah : ", miring, "cm")
/* 

*/

function kdvdahil(x){
    return x*1.2
}

let sonuc = kdvdahil(100)
console.log(sonuc);
console.log(ciplakKdvHesapla(100));

function ciplakKdvHesapla(x){
    return x/1.2
}

function kdvHesapla(x){
    console.log("Verilen değerin Kdv dahil hali: "+(x*1.2));
    console.log("Verilen değerin Kdv haric hali: "+(x/1.2));
}

kdvHesapla(100);
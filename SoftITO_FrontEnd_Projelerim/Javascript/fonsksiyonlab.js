 /*
1-Verilen sayının karesini alan fonksiyon yazınız.
2- vize1, vize2, final notu verilen öğrenciini geçme kalma durumunu dönen bir fonskiyon yazınız.
3- Kısa ve uzun kenarları verilen bir dikdörtgenin alan ve cevre hesaplarını ekrana basan bir fonksiyon yazınız.
 */

function kareAl(x){
    console.log(`${x} nin karesi:${x*x}`);
    return (x*x)
}

function GecmeKalma(x,y,z){
    return (x*0.3)+(y*0.3)+(z*0.4)
}

function Dikdörtgen(a,b){
    alan=a*b
    cevre=(a+b)*2
    //return (alan,cevre)
    console.log("Dikdörtgen alanı =",alan);
    console.log("Dikdörtgen çevresi =", cevre);
}

console.log(kareAl(9));
console.log(GecmeKalma(40,50,60));
console.log(Dikdörtgen(4,5));

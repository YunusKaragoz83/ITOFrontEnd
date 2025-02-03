var isimler =['ali','ayse','fatma']
var soyadlar =['kaya','mert','demir']

var vize1 =[10,14,55];
var vize2 = [33,55,44,6];
var final = [33,55,44,6];


// Build in gelen veri tipleri . JAni javascript dilindeki primitfy veri tipleridir.
let sayi = 12;
let sehir = "van";
let dtrh = new Date(2000,1,1);
// Cevremizdeki problemleri ifade edebilmek icin programlama dillerinde 
// struct ,class v.b.. yapilar kullanilir. 
// javascript json ile ifade edilebilir

// Kendi veri tiplerimiz .Ogrenci Notlari modellemesi 
let ali = {name:"Ali",surname:"Kaya",vize1:30,vize2:50,final:70};
let veli = {name:"veli",surname:"Kaya",vize1:30,vize2:50,final:70};
let ayse = {name:"ayse",surname:"Kaya",vize1:30,vize2:50,final:70};

let fatma = {name:"fatma",surname:"Kaya",vize1:30,vize2:50,final:70};
let ogrenciler=[ali,veli,ayse,fatma]; 

console.log('While dongusu ile');
let sayac = 0;
while (sayac<ogrenciler.length) {
    

console.log(ogrenciler[sayac]);

let sonuc = ((ogrenciler[sayac].vize1 +  ogrenciler[sayac].vize2 )/2)*0.3 +  ogrenciler[sayac].final*0.7; 
console.log(`Sinav Sonucu: ${sonuc}`);
sayac++; // sayac = sayac+1

}
console.log(ali);

let bmw ={Marka:"Bmw",Model:"3.20",yil:2020,fiyat:150000}
console.log(bmw);
console.log(bmw.fiyat);
let myCar = JSON.stringify(bmw);
console.log(myCar.fiyat);
let myBmw = JSON.parse(myCar);
console.log(myBmw.fiyat);
console.log(myCar);


let formOrnegi={FirstName:"",LastName:"",Password:"",Tcno:""}
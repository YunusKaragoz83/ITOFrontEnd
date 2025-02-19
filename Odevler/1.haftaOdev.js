// Ödevini yap ve burada göster.
var ogrenciler = [
        {isim:"adem", soyIsim:"sonar", telNo:1223678906, vize1:50, vize2:50, final:50},
        {isim:"mehmet", soyIsim:"kaya", telNo:9876543210, vize1:86, vize2:78, final:95},
        {isim:"ayse", soyIsim:"kaya", telNo:654321789, vize1:67, vize2:45, final:50},
        {isim:"fatma", soyIsim:"kaya", telNo:741852963, vize1:40, vize2:39, final:35}

]

// for döngüsü ile ogrenciler dizisindeki her bir öğrencinin bilgilerini yazdırın.
for (i in ogrenciler){
    console.log(ogrenciler[i].isim + " " + ogrenciler[i].soyIsim + " " + ogrenciler[i].telNo + " " + ogrenciler[i].vize1 + " " + ogrenciler[i].vize2 + " " + ogrenciler[i].final);
}

// while döngüsü ile ogrenciler dizisindeki her bir öğrencinin bilgilerini yazdırın.
index = 0;
while (index < ogrenciler.length){
    console.log(`${ogrenciler[index].isim} ${ogrenciler[index].soyIsim} ${ogrenciler[index].telNo}`);
    index++;
}


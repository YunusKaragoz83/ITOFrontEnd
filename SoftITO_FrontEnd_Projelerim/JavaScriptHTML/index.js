function windowSize()
{
    let w = window.innerWidth;
    let h = window.innerHeight;
   // window.alert("Window Genisligi:" + w + " Window Yuksekligi:" +h); 
    let p1=window.document.getElementById("p1");  
    p1.innerHTML="Window Genisligi:" + w + " Window Yuksekligi:" +h;
}
function checkForm()
{
    let ad = document.getElementById("ad");
    let soyad=document.getElementById("soyad");
    let tcno = document.getElementById("tcno");
    console.log("ad:" +ad);
    console.log(ad.value.length);
    console.log("Text:"+ad.value);
    console.log("inner html:" +ad.innerText);
    console.log("text length:" +ad.value.length);
    console.log("innerhtml length:" +ad.innerHTML.length);


    console.log("soyad:" +soyad);
    console.log("tcno:" +tcno);

    if(tcno.value.length!=11)
    {
      //alert("tc no 11 karakter olmak zorundadir");   
      let tcnoAlert= document.getElementById("tcnoAlert");
      tcnoAlert.style="color:red";
      tcnoAlert.innerHTML="tc no 11 karakter olmak zorundadir";
    }
    if(ad.value.length<=2 )
    {
        let adAlert = document.getElementById("adAlert");
        adAlert.style="color:red";
        adAlert.innerHTML="Ad alani en az 2 karakter olmalidir";

    }
    if(soyad.value.length<=2 )
    {
        let soyadAlert = document.getElementById("soyadAlert");
        soyadAlert.style="color:red";
        soyadAlert.innerHTML="Soyad  alani en az 2 karakter olmalidir";

    }
}
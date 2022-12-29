let namee = prompt("Adınız nedir?");
let names = document.getElementById('name')
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

if(namee){
    names.innerHTML=`${namee}`
}else {
    alert("Bir isim giriniz.")
    
}

function saat (){
    var sure = new Date; 
    document.getElementById('saat').innerHTML=say(sure.getHours())+":"
    +say(sure.getMinutes())+":" 
    +say(sure.getMinutes());
    setInterval(saat , 1000)
}

function say(x){
    if(x<10){
        x="0" + x ;
    }
    return x ;
}
 
saat();





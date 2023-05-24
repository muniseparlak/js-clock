// prompt ile kullanıcıdan bilgi almak

let userName = prompt("Lütfen isminizi giriniz: ")

function showTime(){
    let myName = document.querySelector("#myName");
    myName.innerHTML = userName;
    let myClock = document.querySelector("#myClock");
    var date = new Date();

     var days = [
       "Pazar",
       "Pazartesi",
       "Salı",
       "Çarşamba",
       "Perşembe",
       "Cuma",
       "Cumartesi",
     ];

     myClock.innerHTML = 
        `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} 
         ${days[date.getDay()]}`;

}

setInterval(showTime)




 let firstName = prompt("Lütfen Adını Giriniz :") 
 
 let info = document.querySelector('#myName')
 info.innerHTML = `${firstName.length > 0 ? firstName : "Lütfen sayfayı yenileyip geçerli bir isim giriniz."}`

    function showTime(){
     let dt = new Date();
     let days = ["pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"];
     let time = document.querySelector('#myClock')

     time.innerHTML = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} ${days[dt.getUTCDay()]}`


     
     setTimeout(showTime,1000);
 }
    showTime()



 
 

 


const granted = document.getElementById("granted");
const denied = document.getElementById("denied");

var ipAddressArray = ["196.39.22.45","196.3.22.145","102.182.93.12","196.39.22.145"]


fetch('https://api.ipify.org/?format=json').then(response => response.json()).then(data => {
    ipAddress = data.ip
    console.log('Your Public IP Address:', data.ip);
    myFunction(data.ip)
  })

  function myFunction(ip){
    console.log(ip);
    if (ipAddressArray.includes(ip)) {
        console.log("Granted");
        document.getElementById("granted").classList.add("open")
        document.getElementById("denied").classList.add("close")
    } else {
        console.log("Not granted")
    }
  }



 


setInterval(() => {
    d = new Date(); //object of date()
   
    sec = d.getSeconds();
    sec_rotation = 6 * sec;
   second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);


setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
   
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
   
  
    let currentTime = hour + ":" 
            + min + " "  + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();


const monthArray= ['Jan', 'Feb','Mar','Apr','May','Jun', 'Jul','Aug','Sep','Oct', 'Nov','Dec' ];
const week = ['Sunday','monday', 'Tuesday','wednersday','Thursday','Friday','Saturday'];

function showTime1() {
    let time = new Date();
    let day  = time.getDay();
    let mon = time.getMonth();
    let date = time.getDate();
  
    let currentday1 = week[day] + ", " 
            + monthArray[mon]  /+ sec/+ " "+ date ;
  
    document.getElementById("print")
            .innerHTML = currentday1;
}
showTime1();




//for darkmode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
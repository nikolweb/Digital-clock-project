function showtime(){
    var mytime=new Date();
    var h=mytime.getHours();
    var m=mytime.getMinutes();
    var s=mytime.getSeconds();
    var d=mytime.getDay();
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }
    var mounth=mytime.getMonth();
    var mouths_name=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var mounts_convert=mouths_name[mounth];
    var week_day_names=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var week_day_convert=week_day_names[d];
    document.getElementById("mounth").textContent=mounts_convert;
    document.getElementById("hours").textContent=h;
    document.getElementById("minuts").textContent=m;
    document.getElementById("seconds").textContent=s;
    document.getElementById("week-day").textContent=week_day_convert;
    document.getElementById("day").textContent=mytime.getDate();
    document.getElementById("year").textContent=mytime.getFullYear();
 
}
setInterval(showtime,1000);
showtime();
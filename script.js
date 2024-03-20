
let s = document.querySelectorAll(".sui");
setInterval(function () {
    let second= new Date().getSeconds();
    let minute= new Date().getMinutes();
    let hour= new Date().getHours();
    
    console.log(hour);
    s[0].style.transform = `rotate(${(6*second)+90}deg)`;
    s[1].style.transform = `rotate(${(6*minute)+90}deg)`;
    s[2].style.transform = `rotate(${(30*hour)+90}deg)`;

    var audio = new Audio('clock-ticking-2.mp3');
    audio.play();

    if(hour==10 && minue == 58 ){
        var audio2 = new Audio('Alarm.mp3');
        audio2.play();
        CSSLayerBlockRule.hover()
    }
    // console.log(`rotate(${6*second}deg) is for seconds ____rotate(${6*minute}deg)____rotate(${30*hour}deg)`)
    
    
    document.title=`${hour}:${minute}:${second}`;

}, 1000);
s[0].style.transform ="translatey(-40%)";



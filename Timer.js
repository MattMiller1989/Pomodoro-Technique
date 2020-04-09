var workTime=25*60;
var restTime=5*60;

var countDown=workTime;
var currStatus='Work';

setInterval(updateClock,1000);

function updateClock(){
    

    if(countDown>0){
        let seconds=countDown%60;
        let minutes=parseInt(countDown/60);
        if(seconds<10){
            seconds="0"+seconds;
        }
        
        var time=minutes+":"+seconds;
        const clock=document.getElementById("Clock");
        clock.innerHTML=time;

        const status=document.getElementById("Status");
        status.innerHTML=currStatus;
        countDown--;
    }else{
        switchTimer();
    }

}
function switchTimer(){
    if(currStatus=='Work'){
        currStatus='Rest';
        countDown=restTime;
    }else
        if(currStatus=='Rest'){
            currStatus='Work';
            countDown=workTime;
        }
    
}
function adjustTime(timer,dir){
    
}


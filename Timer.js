var workTime=25*60;
var restTime=5*60;
var countDown;
var currStatus='Work';
var isRunning=true;
var hasStarted=false;

function start(){
    if(!hasStarted){
    hasStarted=true;
    countDown=workTime;
    
    setInterval(updateClock,1000);
    }
    
}
function updateClock(){
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

    if(isRunning){
        if(countDown>0){
            
            countDown--;
        }else{
            switchTimer();
        }
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
    
    if(timer=='work'){
        if(dir=='up'){
            if(workTime<3540){
                workTime+=60;
                if(currStatus=='Work'){
                    countDown+=60;
                }
            }
        }
        if(dir=='down'){
            if(workTime>60){
                workTime-=60;
                if(currStatus=='Work'){
                    countDown-=60;
                }
            }
        }
        
        const disp=document.getElementById("Work-Value");
        disp.innerHTML=""+parseInt(workTime/60)+":00";
        console.log(disp);
    }
    if(timer=='rest'){
        if(dir=='up'){
            if(restTime<3540){
                restTime+=60;
                if(currStatus=='Rest'){
                    countDown+=60;
                }
            }
        }
        if(dir=='down'){
            if(restTime>60){
                restTime-=60;
                if(currStatus=='Rest'){
                    countDown-=60;
                }
            }
        }
        const disp=document.getElementById("Rest-Value");
        disp.innerHTML=""+parseInt(restTime/60)+":00";
    }
}
function pause(){
    if(hasStarted){
    const butt=document.getElementById("Pause");
    if(isRunning){
        isRunning=false;
        butt.classList.add("Play");

    }else{
        isRunning=true;
        butt.classList.remove("Play");
    }
}
}
function stop(){
    pause();
    
    if(currStatus=='Work'){
        countDown=workTime;
    }
    if(currStatus=='Rest'){
        countDown=restTime;
    }
}
function back(){
    if(currStatus=='Work'){
        countDown=workTime;
    }
    if(currStatus=='Rest'){
        countDown=restTime;
    }
}
function forward(){
    if(hasStarted){
        switchTimer();
    }
}


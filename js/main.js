function unmute(){
    var span = document.getElementById("play");
    if(vd.muted==true){
      vd.muted = false;
      vd.volume = 0.3;
      span.innerHTML = "volume_off";   

    } else{
        vd.muted = true;
        span.innerHTML = "volume_up";
    }    
};

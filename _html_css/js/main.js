var aud =new Audio();
aud.src="Notification Tone ! Message Tone.mp3";

function tone(){
      aud.play();
}

setInterval(() => {
    createSnowFlake();   
 },300);
 
 function createSnowFlake(){
       const Snow_Flake = document.createElement('i');
       Snow_Flake.classList.add('fas');
       Snow_Flake.classList.add('fa-snowflake');
       Snow_Flake.style.left= Math.random() * window.innerWidth + 'px';
       Snow_Flake.style.top= Math.random() * window.innerHeight + 'px';
       Snow_Flake.style.animationDuration = Math.random() * 3+2+'5';
       Snow_Flake.style.opacity = Math.random();
       Snow_Flake.style.fontSize= Math.random() * 10 + 10 + 'px';
 
       document.body.appendChild(Snow_Flake);
 
       setTimeout(() => {
             Snow_Flake.remove();
       },5000);
 
 }

 
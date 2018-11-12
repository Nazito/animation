var spinner = document.getElementById("spinner");



var keyframe = [
{transform:'rotate(0)'},
{transform:'rotate(360deg)'}
];

var timings = {
    duration: 1000,
    easing: 'linear',
    iterations: Infinity,
}

var objSpinner = spinner.animate(keyframe,timings)

spinner.onmousemove = function(){
    objSpinner.playbackRate += 0.2
}

setInterval(function(){
    if(objSpinner.playbackRate < 0.1 ){
        objSpinner.playbackRate = 0;
    }else{objSpinner.playbackRate -= 0.7 }  
},500);


var spinner2 = document.getElementById("spinner2");

var objSpinner2 = spinner2.animate(keyframe,timings)

document.querySelector("body").onload = function(){

    setInterval(function(){
       // objSpinner2.playbackRate += 0.5
    },500);
   
    
}


var cssSelector = anime({
    targets: '.right_hend',
    translateX: -465,
    translateY: 200,
    backgroundColor: '#fff',
    borderBottomRightRadius: '30px',
    borderTopRightRadius: '30px',
    easing: 'easeInOutQuart',
    duration: 2000,
    scale: 1.5,
    rotate: '1turn'
  });

    cssSelector = anime({
    targets: '.left_hend',
    translateX: 465,
    translateY: 200,
    backgroundColor: '#fff',
    borderBottomLeftRadius: '30px',
    borderTopLeftRadius: '30px',
    easing: 'easeInOutQuart',
    duration: 2000,
    scale: 1.5,
    rotate: '1turn',
  });

    cssSelector = anime({
    targets: '.left_forearm',
    translateX: 545,
    translateY: 100,
    backgroundColor: '#fff',
    easing: 'easeInOutQuart',
    duration: 1000,
    scale: 1.5,
    rotate: '1turn',
  });

    cssSelector = anime({
    targets: '.right_forearm',
    translateX: -545,
    translateY: 100,
    backgroundColor: '#fff',
    easing: 'easeInOutQuart',
    duration: 1000,
    scale: 1.5,
    rotate: '1turn'
  });

    cssSelector = anime({
    targets: '.head',
    translateX: 625,
    translateY: -100,
    backgroundColor: '#fff',
    borderRadius: '50%',
    easing: 'easeInOutQuart',
    duration: 1000,
    scale: 2,
    rotate: '1turn'
  });

    cssSelector = anime({
    targets: '.chest',
    translateX: -625,
    backgroundColor: '#fff',
    easing: 'easeInOutQuart',
    duration: 1000,
    scale: 1.5,
    rotate: '1turn'
  });

    cssSelector = anime({
    targets: '.stomach',
    translateX: 625,
    translateY: 60,
    backgroundColor: '#fff',
    easing: 'easeInOutQuart',
    duration: 1000,
    scale: 1.5,
    rotate: '1turn'
  });

    cssSelector = anime({
    targets: '.pelvis',
    translateX: -625,
    translateY: -20,
    backgroundColor: '#fff',
    easing: 'easeInOutQuart',
    duration: 1000,
    scale: 1.5,
    rotate: '1turn'
  });

    cssSelector = anime({
    targets: '.right_hip',
    translateX: -600,
    translateY: 50,
    borderTopLeftRadius: '100px',
    backgroundColor: '#fff',
    easing: 'easeInOutQuart',
    duration: 1000,
    scale: 1.5,
    rotate: -750
  });

  cssSelector = anime({
    targets: '.left_hip',
    translateX: 600,
    translateY: 50,
    borderTopRightRadius: '100px',
    backgroundColor: '#fff',
    easing: 'easeInOutQuart',
    duration: 1000,
    scale: 1.5,
    rotate: 750
  });

    cssSelector = anime({
    targets: '.right_knee',
    translateX: -560,
    translateY: 20,
    backgroundColor: '#fff',
    easing: 'easeInOutQuart',
    duration: 1000,
    scale: 1.5,
    rotate: -750
  });

    cssSelector = anime({
    targets: '.left_knee',
    translateX: 560,
    translateY: 20,
    backgroundColor: '#fff',
    easing: 'easeInOutQuart',
    duration: 1000,
    scale: 1.5,
    rotate: 750
  });

  cssSelector = anime({
    targets: '.right_foot',
    translateX: -520,
    translateY: -10,
    backgroundColor: '#fff',
    borderBottomLeftRadius: '30px',
    borderBottomRightRadius: '30px',
    easing: 'easeInOutQuart',
    duration: 1000,
    scale: 1.5,
    rotate: -750
  });

  cssSelector = anime({
    targets: '.left_foot',
    translateX: 520,
    translateY: -10,
    backgroundColor: '#fff',
    borderBottomLeftRadius: '30px',
    borderBottomRightRadius: '30px',
    easing: 'easeInOutQuart',
    duration: 1000,
    scale: 1.5,
    rotate: 750
  });



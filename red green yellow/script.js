console.log("hello");

let redCounter = 0;
let greenCounter = 0;
let yellowCounter = 0;



 function redClick(){
     console.log(' you clicked red');
     redCounter++;
     document.getElementById('red_color').innerText = redCounter;
    }


 function greenClick(){ 
    console.log('you clicked green');
    greenCounter++;
    document.getElementById('green_color').innerText = greenCounter;
}
    


  function yellowClick(){ 
    console.log('you clicked yellow');
    yellowCounter++;
    document.getElementById('yellow_color').innerText=yellowCounter;
}

function reset()
{
    document.getElementById('red_color').innerText = 'Red';
    redCounter = 0;
    document.getElementById('green_color').innerText = 'Green';
    greenCounter = 0;
    document.getElementById('yellow_color').innerText = 'Yellow';
    yellowCounter = 0;
}
    

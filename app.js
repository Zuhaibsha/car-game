var position=0;
function move(type){

    var car=document.getElementById('car')

if(type==='forward'){
        position += 50; 
        
        car.style.left = position + 'px';
    } else if (type === 'backward') {
        position -= 50; 
        car.style.left = position + 'px';
    }

}


function action(event){
if(event.key==='d'){
move("forward");
}else if(event.key==='a'){
move("backward")
}
}

function stopCar(){
    road.src="road.png"
}

function startCar(){
    road.src="road-moving-forward-stock-animation-96996-854x480 (1).gif"
}




window.addEventListener('keydown',action)
let doorImage1 = document.querySelector('#door1');
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let doorImage2 = document.querySelector('#door2');
let doorImage3=  document.querySelector('#door3');  
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"; 

let startButton = document.getElementById('start');
let currentlyPlaying = true; 

let isBot=(door)=>{
  if(door.src === botDoorPath) {
    return true;
  }
  else {
    return false; 
  }
}
let isClicked = (door) => {
  if(door.src ===closedDoorPath){
    return false;
  }
  else {
    return true;
  }
}

let playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors===0) {
     gameOver(); 
  }
  else if (isBot(door)===true) {
    gameOver("win");
  }
}

let randomChoreDoorGenerator = ()=> {
  let choreDoor =Math.floor( Math.random()*numClosedDoors);
  if (choreDoor===0) {
    openDoor1=botDoorPath;
    openDoor2=beachDoorPath;
    openDoor3=spaceDoorPath; 
  }
  else if (choreDoor===1) {
    openDoor2=botDoorPath;
    openDoor3=beachDoorPath;
    openDoor1=spaceDoorPath;
  } 
  else if (choreDoor === 2) {
    openDoor3=botDoorPath;
    openDoor2=spaceDoorPath;
    openDoor1=beachDoorPath;
  }
}
door1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
  doorImage1.src= openDoor1;
  }
  playDoor(door1);
}

door2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)) {
	doorImage2.src =openDoor2;
}
  playDoor(door2);
}

door3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)) {
  doorImage3.src = openDoor3;
}
  playDoor(door3);
}

let  startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors=3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

startButton.onclick= () => {
  if (currentlyPlaying===false) {
    startRound();
  }
}

let gameOver = (status) => {
  if (status==="win"){
    startButton.innerHTML = "You win! Play again?";
  } 
  else {
    startButton.innerHTML = "Game over! Play again?";
    
  }
currentlyPlaying =false;
}

startRound();
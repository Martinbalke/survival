'use strict';
const divEL_endingText = document.getElementById('endingText');
const story = localStorage.getItem('story');
let team = localStorage.getItem('team');
team = JSON.parse(team);
const aliveTeam = [];


function endingChoices(){
  textGeneration(`${story}`);
  checkHealth();
  endingText();
}

function checkHealth(){
  for(let i  = 0; i < team.length; i++){
    if(team[i].heartsNum === 0){
      textGeneration(`You made it out alive but unfortunately ${team[i].className} gave their life in service of the cause. In war sacrifices are necessary but as a team leader you should try to do better next time`);
    } 
    if (team[i].heartsNum === 1){
      textGeneration(` ${team[i].className.toUpperCase()} was heavily injured in the fighting. You managed to get them out of the fight alive but their wounds will stay with them.`);
      aliveTeam.push(team[i]);
    } 
    else if (team[i].heartsNum === 2) {
      textGeneration(` ${(team[i].className.toUpperCase())} made it out alive and uninjured. You've made the correct decisions as a team leader regarding this team member. You should be proud.`);
      aliveTeam.push(team[i]);
    }
  }
}

function endingText(){
  if(aliveTeam.length === 0){
    textGeneration(`No one alive`);
  } else if(aliveTeam.length === 1){
    textGeneration(`One person alive`);
  } else if(aliveTeam.length === 2){
    textGeneration(`Two people alive`);
  } else if(aliveTeam.length === 3){
    textGeneration(`Three people alive`);
  }
}

function textGeneration( innerText){
  let br_el = document.createElement('br');
  divEL_endingText.appendChild(br_el);
  let p_el =  document.createElement('p');
  p_el.innerText = innerText;
  divEL_endingText.appendChild(p_el);
}
endingChoices();

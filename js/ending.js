'use strict';

const divEL_endingText = document.getElementById('endingText');
const story = localStorage.getItem('story');
let team = localStorage.getItem('team');
team = JSON.parse(team);
const aliveTeam = [];
const deadMembers = [];


function endingChoices(){
  textGeneration(`${story}`);
  checkHealth();
  partyDamageText();
  endingText();
}

function checkHealth(){
  for(let i  = 0; i < team.length; i++){
    if(team[i].heartsNum === 0){
      // textGeneration(` ${team[i].className.toUpperCase()} gave their life in service of the cause. In war sacrifices are necessary but as a team leader you should try to do better next time`);
      deadMembers.push(team[i]);
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
function partyDamageText(){
  if(deadMembers.length === 1){
    textGeneration(` ${deadMembers[0].className.toUpperCase()} gave their life in service of the cause. In war sacrifices are necessary but as a team leader you should try to do better next time.`);
  } else if(deadMembers.length === 2){
    textGeneration(` ${deadMembers[0].className.toUpperCase()} and  ${deadMembers[1].className.toUpperCase()} gave their lives in service of the cause. In war sacrifices are necessary but as a team leader you should try to do better next time.`);
  } else if (deadMembers.length === 3){
    textGeneration(`Your entire party has been killed. You've failed them as a leader. While trying to avenge them you are hit in the stomach by a heavy machine gun round.`);
  }
}
function endingText(){
  if(aliveTeam.length === 0){
    textGeneration(`In your last moments alive you realize that you've made the wrong choices all along. Bleeding out on the ground you wish for just one more chance to retrieve the core but more imprortantly make it out with your whole team alive.....but wait is that possible?`);
  } else if(aliveTeam.length === 1){
    textGeneration(`You've barely managed to scrape by this mission, but at what cost? Your friends are all but gone. Knowing you could have made better decisions to keep your friends alive will stay with you. Was it all worth it in the end?`);
  } else if(aliveTeam.length === 2){
    textGeneration(`This mission was even harder than you could have imagined. You've retrieved the core but lost a friend and comrade along the way. The feeling of success and happiness is balanced against the regret of loss. Maybe, just maybe you could have made the correct choice back there.`);
  } else if(aliveTeam.length === 3){
    textGeneration(`You and your team have retrieved the core and made it out alive. Your wildest dreams are about to come true as you join the technological society of the rich. You've proven yourself as a capabale leader and decision maker and have earned the right to stand at the top.`);
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

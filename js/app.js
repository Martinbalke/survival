<<<<<<< HEAD
=======
'use strict';

function generateStoryNode(storyNode){
  var sectionEl = document.getElementById('story');
  var articleEl = document.createElement('article');
  var pEl = document.createElement('p');
  var storyNode = storyNode;
  pEl.innerHTML = storyNode;
  articleEl.appendChild(pEl);
  sectionEl.appendChild(articleEl);
}

function generateQuestion(question){
  var sectionEl = document.getElementById('questionPrompt');
  var pEl = document.createElement('p');
  var question = question;
  pEl.innerHTML = question;
  sectionEl.appendChild(pEl);
}

var badPoints;
var goodPoints;

function generateDecision(decision, morality){
  var sectionEl = document.getElementById('questions');
  var pEl = document.createElement('p');
  var decision = decision;
  pEl.innerHTML = decision;
  var morality = morality;


    if(morality === 'bad'){
        pEl.setAttribute('id', 'question1');
    } else if(morality === 'neutral'){
        pEl.setAttribute('id', 'question2');
    } else if(morality === 'good'){
        pEl.setAttribute('id', 'question3');
    } else{
        console.log("invalid morality");
    }
    sectionEl.appendChild(pEl);
}

/* TODO: randomize order of decisions */
function randomizer(min, max){
  return Math.floor(Math.random() * (max - min + 1) * min);
}
/*  */

function renderStory(){

    generateStoryNode(
        "The year is 2099. You are leading a team of mercenaries recruited by the notorious crime syndicate known as \"Aku Watashi.\" They are on a high-stakes mission to steal a fusion core that is worth billions on the black market. You must guide the team utilizing the skill sets of a soldier, an engineer, and a hacker to make your way through a high-security facility. This will likely turn into a fight for survival as you will encounter unpredictable situations and unknown enemy opposition. Smart decision making is required to help this team make it safely through the facility with the core intact."
    );
    
    /*  */
     generateQuestion(
         "Improvise break-in procedure: Scanners have picked up a security force that has set up a perimeter around the chosen point of entry into the facility. A new break-in plan will have to be improvised."
     );

     generateDecision(
         "The soldier is equipped with a full arsenal of weapons along with several grenades. Let the soldier lead the team into a potential high-stakes shootout.",
     'bad');
     generateDecision(
         "The engineer carries a cloaking device that will allow the team to enter stealthily. Utilize this device.", 
     'neutral');
     generateDecision(
         "The hacker's neural implant is hacked into by an unknown source. After accessing the hacker’s com-link, Unknown gives the hacker intel and suggests that they utilize a long forgotten and abandoned tunnel system. To access the tunnel system, the team must slide down a tight shaft. Trust Unknown and slide down the tunnel shaft.", 
     'good');
    /*  */

}
renderStory();

// TODO: add event listener

var onClick = document.getElementById('questions');
onClick.addEventListener('click', handleClick);

function handleClick(){
    event.preventDefault();

    if(selected === 'bad'){
        badPoints++;
    } else if(selected === 'neutral'){
        badPoints += .5;
    } else if(selected === 'good'){
        goodPoints++;
    } else{
        alert("Please select one of the choices to continue.");
    }

    //var clear = document.getElementById('questions').innerHTML = "";
}
>>>>>>> 9fe60e2050b4752f2b68c58742d072565c13a57f

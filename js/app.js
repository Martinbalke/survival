'use strict';

/* ------------Beginning of Elijah's contribution, please delete comments as you see fit ------------ */

var teamMembers = []; // array that stores all Characters with their corresponding object properties

function Character(className, name, gender, age, analysis) { // constructor function for game characters
  this.className = className;
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.bio =
    `Name:${capitalizeFirstLetter(name)}` +
    `Gender: ${capitalizeFirstLetter(gender)}` +
    `Age: ${age}` +
    `Analysis: ${analysis}`;
  this.hudClassName = `${capitalizeFirstLetter(className)}`;
  this.avatarFilePath = `./img/${this.className}.jpg`; // img should be named by className for filepath to work
  this.heartSpriteFilePath = './img/heartSprite.png';
  this.heartsNum = 2;
  teamMembers.push(this);
}

new Character('soldier', 'eiji', 'male', '29', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque tincidunt vitae.');
new Character('engineer', 'naruko', 'male', '32', 'Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Imperdiet sed euismod nisi porta lorem mollis. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada.');
new Character('hacker', 'yuri', 'female', '19', 'Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Ullamcorper eget nulla facilisi etiam. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Convallis convallis tellus id interdum.');

function capitalizeFirstLetter(string) { // capitalizes the first letter of a string
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function renderCharacters() {
  for(var i = 0; i < teamMembers.length; i++) {
    var characterImage = document.getElementsByClassName('character-img'); // gets element, can be moved to global
    characterImage[i].src = teamMembers[i].avatarFilePath; // renders avatar jpg to index.html
    var className = document.getElementsByClassName('class-name'); // gets element, can be moved to global
    className[i].textContent = teamMembers[i].hudClassName; // renders className index.html
    var characterBio = document.getElementsByClassName('character-bio'); // gets element, can be moved to global
    characterBio[i].textContent = 'Bio-Scan'; // renders className index.html
    var characterBioDetails = document.getElementsByClassName('character-bio-details'); // gets element, can be moved to global
    characterBioDetails[i].textContent = teamMembers[i].bio; // renders className index.html
    var classStatus = document.getElementsByClassName('class-status'); // gets element, can be moved to global
    classStatus[i].textContent = 'Active'; // renders className index.html
  }
}

function renderDamage(className) { // parameter is string with class name of character that should sustain damage
  for(var i = 0; i < teamMembers.length; i ++) { // loops through teamMembers Array
    if(className === teamMembers[i].className) { // checks if there is a matching character
      if(teamMembers[i].heartsNum > 0 ) { // if the character is alive
        if(className === 'soldier') { // change the sprite position
          var soldierHeartsSprite = document.getElementById('soldier-heart'); // gets element, can be moved to global
          soldierHeartsSprite.style.backgroundPosition = 'x - 10px';
        } else if(className === 'engineer') { // change the sprite position
          var engineerHeartsSprite = document.getElementById('engineer-heart'); // gets element, can be moved to global
          engineerHeartsSprite.style.backgroundPosition = 'x - 10px';
        } else if(className === 'hacker') { // change the sprite position
          var hackerHeartsSprite = document.getElementById('hacker-heart'); // gets element, can be moved to global
          hackerHeartsSprite.style.backgroundPosition = 'x - 10px';
        }
        teamMembers[i].heartsNum.push(-1); // subtract health from the character
      }
      if(teamMembers[i].heartsNum === 0 ) { // renders unique style for when the character dies
        if(className === 'soldier') {
          var soldierContainer = document.getElementById('soldier-container'); // gets element, can be moved to global
          soldierContainer .style.display = 'none';
        } else if(className === 'engineer') {
          var engineerContainer  = document.getElementById('engineer-container'); // gets element, can be moved to global
          engineerContainer .style.display = 'none';
        } else if(className === 'hacker') {
          var hackerContainer  = document.getElementById('hacker-container'); // gets element, can be moved to global
          hackerContainer.style.display = 'none';
        }
      }
    }
  }
}

function generateStoryNode(storyNode){
//   var sectionEl = document.getElementById('story'); elijah wants deletion of code
  var articleEl = document.getElementById('article');
  var pEl = document.createElement('p');
  var storyNode = storyNode;
  pEl.innerHTML = storyNode;
  articleEl.appendChild(pEl);
//   sectionEl.appendChild(articleEl); elijah wants deletion of code
}

renderCharacters();

/* ------------Ending of Elijah's contribution, please delete comments as you see fit ------------ */

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

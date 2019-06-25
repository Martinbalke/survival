'use strict';

//Global Variables
var divEl_Questions = document.getElementById('questions');
var teamMembers = []; // array that stores all Characters with their corresponding object properties
var sectionEl_questionPrompt = document.getElementById('questionPrompt');
var articleEl = document.getElementById('article');
var sectionEl_Questions = document.getElementById('questions');
var group = 0;
var decisionLayer = 0;

//Object constructors

function Character(className) { // constructor function for game characters
  this.className = className;
  this.avatarFilePath = `./img/${this.className}.jpg`; // img should be named by className for filepath to work
  this.heartSpriteFilePath = `./img/${this.heartSprite}.png`;
  this.heartsNum = 2;
  teamMembers.push(this);
}

//Object Instances

new Character('soldier');
new Character('engineer');
new Character('hacker');

function renderCharacters() {
  for(var i = 0; i < teamMembers.length; i++) {
    var characterImage = document.getElementsByClassName('character-img'); // gets element, can be moved to global
    characterImage[i].src = teamMembers[i].avatarFilePath; // renders avatar jpg to index.html
    var className = document.getElementsByClassName('class-name'); // gets element, can be moved to global
    className[i].textContent = teamMembers[i].className; // renders className index.html
    var heartsSprite = document.getElementsByClassName('hearts-sprite'); // gets element, can be moved to global
    heartsSprite[i].src = teamMembers[i].heartsSpriteFilePath; // renders hearts sprite png to index.html
  }
}

function renderDamage(className) { // parameter is string with class name of character that should sustain damage
  for(var i = 0; i < teamMembers.length; i ++) { // loops through teamMembers Array
    if(className === teamMembers[i].className) { // checks if there is a matching character
      if(teamMembers[i].heartsNum > 0 ) { // if the character is alive
        if(className === 'soldier') { // change the sprite position
          var soldierHeartsSprite = document.getElementById('soldier-heart');
          soldierHeartsSprite.style.backgroundPosition = 'x - 10px';
        } else if(className === 'engineer') { // change the sprite position
          var engineerHeartsSprite = document.getElementById('engineer-heart');
          engineerHeartsSprite.style.backgroundPosition = 'x - 10px';
        } else if(className === 'hacker') { // change the sprite position
          var hackerHeartsSprite = document.getElementById('hacker-heart');
          hackerHeartsSprite.style.backgroundPosition = 'x - 10px';
        }
        teamMembers[i].heartsNum.push(-1); // subtract health from the character
      }
      if(teamMembers[i].heartsNum === 0 ) { // renders unique style for when the character dies
        if(className === 'soldier') {
          var soldierContainer = document.getElementById('soldier-container');
          soldierContainer .style.display = 'none';
        } else if(className === 'engineer') {
          var engineerContainer  = document.getElementById('engineer-container');
          engineerContainer .style.display = 'none';
        } else if(className === 'hacker') {
          var hackerContainer  = document.getElementById('hacker-container');
          hackerContainer.style.display = 'none';
        }
      }
    }
  }
}

function renderStory(){
  
  
  generatePrompt(storyLayers[decisionLayer]);
  generateChoices();
  
}
//Event Handlers

function handleClick(){
  event.preventDefault();
  generateStoryNode(scenario[group][event.target.class].promptText);
  var newGroup = scenario[group][event.target.class].nextGroup;
  group = newGroup;
  decisionLayer++;
  console.log(event.target.class);
 renderStory();
}

//Event Listeners
//Helper functions
function generateStoryNode(storyNode){
  articleEl.innerHTML = '';
  var pEl = document.createElement('p');
  pEl.innerHTML = storyNode;
  articleEl.appendChild(pEl);
}

function generatePrompt(question){
  sectionEl_questionPrompt.innerHTML = '';
  var pEl = document.createElement('p');
  pEl.innerHTML = question;
  sectionEl_questionPrompt.appendChild(pEl);
}
function generateChoices(){
  sectionEl_Questions.innerHTML = '';
  for(let i = 0; i < 3; i++){
    let pEl = document.createElement('p');
    pEl.id = `question${[i+1]}`;
    pEl.class = i;
    pEl.innerText = scenario[group][i].choiceText;
    sectionEl_Questions.appendChild(pEl);
  }
}

/* TODO: randomize order of decisions */
function randomizer(min, max){
  return Math.floor(Math.random() * (max - min + 1) * min);
}


divEl_Questions.addEventListener('click', handleClick);


//Function calls
renderStory();
// renderCharacters();

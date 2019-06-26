'use strict';

//Global Variables

var divEl_Questions = document.getElementById('questions');
var teamMembers = []; // array that stores all Characters with their corresponding object properties
var classContainer = document.getElementsByClassName('class-container');
var classNames = document.getElementsByClassName('class-name');
var characterImg = document.getElementsByClassName('character-img');
var characterBio = document.getElementsByClassName('character-bio');
var characterBioDetails = document.getElementsByClassName('character-bio-details');
var classStatus = document.getElementsByClassName('class-status');
var heartsSprite = document.getElementsByClassName('hearts-sprite');
var date = document.getElementById('current-time');
var sectionEl_questionPrompt = document.getElementById('questionPrompt');
var articleEl = document.getElementById('article');
var sectionEl_Questions = document.getElementById('questions');
var group = 0;
var decisionLayer = 0;

//Object Constructors 

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

//Object Instances

new Character('soldier', 'eiji', 'male', '29', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque tincidunt vitae.');
new Character('engineer', 'naruko', 'male', '32', 'Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Imperdiet sed euismod nisi porta lorem mollis. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada.');
new Character('hacker', 'yuri', 'female', '19', 'Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Ullamcorper eget nulla facilisi etiam. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Convallis convallis tellus id interdum.');

function renderCharacters() {
  for(var i = 0; i < teamMembers.length; i++) {
    characterImg[i].src = teamMembers[i].avatarFilePath; // renders avatar jpg to index.html
    classNames[i].textContent = teamMembers[i].hudClassName; // renders className index.html
    characterBio[i].textContent = 'Bio-Scan'; // renders className index.html
    characterBioDetails[i].textContent = teamMembers[i].bio; // renders className index.html
    classStatus[i].textContent = 'Active';
    heartsSprite[i].src = teamMembers[i].heartSpriteFilePath;
  }
}

function renderDamage(className) { // parameter is string with class name of character that should sustain damage
  for(var i = 0; i < teamMembers.length; i ++) { // loops through teamMembers Array
    if(className === teamMembers[i].className) { // checks if there is a matching character
      console.log(className);
      console.log(teamMembers[i].className);
      if(teamMembers[i].heartsNum > 0 ) { // if the character is alive
        heartsSprite[i].src = './img/heartSpriteInjured.png';
        characterImg[i].src = `./img/${className}Injured.gif`;
        classStatus[i].textContent = 'Injured';
        classStatus[i].style.animation = 'alert1 0.5s';
        classStatus[i].style.animationIterationCount = 'infinite';
        teamMembers[i].heartsNum --; // subtract health from the character
      }
      if(teamMembers[i].heartsNum === 0 ) { // renders unique style for when the character dies
        classContainer[i].style.backgroundColor = 'rgba(50, 50, 50, 0.4)';
        classContainer[i].style.borderColor = 'rgb(150, 150, 150)';
        heartsSprite[i].src = './img/heartSpriteKilled.png';
        classNames[i].style.color = 'rgb(150, 150, 150)';
        characterImg[i].src = './img/whiteNoise.gif';
        characterImg[i].style.borderColor = 'rgb(150, 150, 150)';
        characterBio[i].textContent = 'Offline';
        characterBio[i].style.color = 'rgb(150, 150, 150)';
        characterBioDetails[i].style.color = 'rgb(150, 150, 150)';
        classStatus[i].textContent = 'KIA';
        classStatus[i].style.animation = '';
        classStatus[i].style.animationIterationCount = '';
        classStatus[i].style.color = 'rgb(150, 150, 150)';
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

//Helper functions

function capitalizeFirstLetter(string) { // capitalizes the first letter of a string
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function renderDateTime() {
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var session = 'AM';
  if(hour === 0){
    hour = 12;
  }
  if(hour > 12){
    hour = hour - 12;
    session = 'PM';
  }
  hour = (hour < 10) ? '0' + hour : hour;
  minute = (minute < 10) ? '0' + minute : minute;
  second = (second < 10) ? '0' + second : second;
  var string = `Date: ${(today.getMonth()+1)}/${today.getDate()}/${2099} Time: ${hour}:${minute}:${second}:${session}`;
  date.innerText = string;
  date.textContent = string;
  setTimeout(renderDateTime, 1000);
}

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

//Event Listeners

divEl_Questions.addEventListener('click', handleClick);

//Function calls
renderStory();
renderCharacters();
renderDateTime();
renderDamage('hacker');
renderDamage('engineer');
renderDamage('engineer');

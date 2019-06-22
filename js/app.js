'use strict';


/* TODO: build nested constructor function to loop through questions and decisions */
//  var choices = {
//     firstDilemma = {
//         Q1D1 = [],
//         Q1D2 = [],
//         Q1D3 = [],
//     },
//     secondDilemma = {
//         Q2D1 = [],
//         Q2D2 = [],
//         Q2D3 = [],
//     },
//     thirdDilemma = {
//         Q3D1 = [],
//         Q3D2 = [],
//         Q3D3 = [],
//     }
//  };
/* console.log(decisions); */

function generateStoryNode(storyNode){
    var sectionEl = document.getElementById('story');
    var pEl = document.createElement('p');
    var storyNode = storyNode;
    pEl.innerHTML = storyNode;
    sectionEl.appendChild(pEl);
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

    if(morality === 'good'){
        pEl.setAttribute('id', 'question3');
        //goodPoints++;
    } else if(morality === 'bad'){
        pEl.setAttribute('id', 'question1');
        //badPoints++;
    } else if(morality === 'neutral'){
        pEl.setAttribute('id', 'question2');
        //badPoints += .5;
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

    generateStoryNode("lorem ipsum");
    
    /*  */
     generateQuestion("lorem ipsum");

     generateDecision("lorem ipsum", 'bad');
     generateDecision("lorem ipsum", 'neutral');
     generateDecision("lorem ipsum", 'good');
    /*  */

    /*  */
    //  generateQuestion("lorem ipsum");

    //  generateDecision("lorem ipsum", 'bad');
    //  generateDecision("lorem ipsum", 'neutral');
    //  generateDecision("lorem ipsum", 'good');
    /*  */

    /*  */
    //  generateQuestion("lorem ipsum");

    //  generateDecision("lorem ipsum", 'bad');
    //  generateDecision("lorem ipsum", 'neutral');
    //  generateDecision("lorem ipsum", 'good');
    /*  */

}
renderStory();


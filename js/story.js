'use strict';

var scenario = [[],[],[],[],[],[],[],[],[],[],[],[],[]];

function StoryNode (morality, group, choiceText, nextGroup, promptText){
this.group = group;
this.morality = morality;
this.choiceText = choiceText;
this.nextGroup = nextGroup;
this.promptText = promptText;

this.push(scenario[group]);
}

new StoryNode('G', 0, `The hacker's neural implant is hacked into by an unknown source. After accessing the hacker's com-link, the unknown source gives the hacker intel and suggesta that they utilize an abandoned tunnel system that was largely forgotten. To access the tunnel system, the team must slide down a tight shaft. Do you trust the unknown source?`, );
new S
'use strict';

var scenario = [[],[],[],[],[],[],[],[],[],[],[],[],[]];
var storyLayers = [[`Scanners have picked up a security force that has set up a perimeter around the chosen point of entry in to the facility. A new break-in plan will need to be improvised`],[`The core is protected by a high security system that is harder to bypass tahn expected. The point of entry consists of a 50 inch impenetrable pressurized bank vault door made of titanium alloys. Scanners have also detected a hidden laser turret. A new break in plan will have to be improvised`],[`After successfully retrieving the core an alarm is tripped and scaners pick up movement of an approaching overwhelming force. An escape plan will have to be quickly improvised`]];

function StoryNode (morality, group, choiceText, nextGroup, promptText, character){
  this.group = group;
  this.morality = morality;
  this.choiceText = choiceText;
  this.nextGroup = nextGroup;
  this.promptText = promptText;
  this.character= character;
  scenario[group].push(this);
}


new StoryNode('G', 0, `The hacker's neural implant is hacked into by an unknown source. After accessing the hacker’s com-link, the unknown source gives the hacker intel and suggests that they utilize an abandoned tunnel system that was largely forgotten. To access the tunnel system, the team must slide down a tight shaft. Do you trust the unknown source?`, 3, `The engineer shines a flashlight into the shaft and sees what looks like the floor of the tunnel. He deploys scaling equipment and descends down the shaft into the old tunnel system. After his feet hit the ground, he quickly scans the area for threats and determines that the tunnel is safe. He signals the soldier and hacker to descend the shaft.`);

new StoryNode('N', 0, `The engineer carries a cloaking device that will allow the team to enter stealthily.  Do you utilize the device?`, 2, `The engineer activates the cloaking device but reminds the team that the device was only designed to cloak one individual, and that extending the cloaking field to the rest of the team would overload the device’s refractor coil. The team manages to sneak past the security force while undetected, but the engineer suffers half damage as the device overheats, causing second degree burns.`);

new StoryNode('B', 0, `The soldier is equipped with a full arsenal of weapons and several grenades. Do you let the soldier lead the team into a potential high-stakes shootout?`, 1, `The soldier throws a stun grenade to disorient the enemy, then opens fire on the security forces to draw attention. The engineer provides covering fire with his carbine as the soldier advances. The hacker flanks the security forces from the rear, causing the enemy confusion. The team manages to neutralize the entire security force during the assault. However, the soldier was hit by several kinetic rounds, which bypassed his armor and injured his internal organs. The soldier dies rapidly from his injuries.`, 'soldier');

new StoryNode('G', 1, `The hacker is again contact by the unknown source.The unknown source sends the hacker a decryption code that will allow her to hack into the terminal. Do you again, trust the unknown source?`, 8, `The hacker uploads the decryption code onto a chip and inserts the chip into the terminal. The decryption code appears to be successful, and the hacker begins to hack into the terminal. The hacker successfully disengages all local security protocols. The vault door depressurizes and opens. The team walks into the vault and successfully retrieves the core.`);

new StoryNode('N', 1, `The engineer can pry open the ventilation grille cover, climb into the air ducts using electromagnetic grip implants built into his hands, and retrieve the modulator. Do you utilize the capabilities of the engineer?`, 4, `The engineer successfully enters the air vents using his electromagnetic implants. He retrieves the core, but suffers half damage during the extraction. As he traverses the vents, he receives second degree burns caused by a loose thermal coupler.`);

new StoryNode('B', 1, `The soldier can break the terminal using brute force and the engineer can rewire the terminal so that the vault door opens. Do you forcibly enter the vault?`, 7, `The soldier smashes the terminal with the butt of his assault rifle but a hidden laser turret activates and fires at the soldier. The soldier disables the turret with his assault rifle, but suffers third degree burns that lead to rapid shock and death.`);

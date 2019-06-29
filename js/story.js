'use strict';

var scenario = [[],[],[],[],[],[],[],[],[],[],[],[],[]];
var storyLayers = [[`Scanners have picked up a security force that has set up a perimeter around the chosen point of entry in to the facility. A new break-in plan will need to be improvised`],[`The core is protected by a high security system that is harder to bypass than expected. The point of entry consists of a 50 inch impenetrable pressurized bank vault door made of titanium alloys. Scanners have also detected a hidden laser turret. A new break in plan will have to be improvised`],[`After successfully retrieving the core an alarm is tripped and scaners pick up movement of an approaching overwhelming force. An escape plan will have to be quickly improvised`]];

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

new StoryNode('N', 0, `The engineer carries a cloaking device that will allow the team to enter stealthily.  Do you utilize the device?`, 2, `The engineer activates the cloaking device but reminds the team that the device was only designed to cloak one individual, and that extending the cloaking field to the rest of the team would overload the device’s refractor coil. The team manages to sneak past the security force while undetected, but the engineer suffers half damage as the device overheats, causing second degree burns.`, 'engineer');

new StoryNode('B', 0, `The soldier is equipped with a full arsenal of weapons and several grenades. Do you let the soldier lead the team into a potential high-stakes shootout?`, 1, `The soldier throws a stun grenade to disorient the enemy, then opens fire on the security forces to draw attention. The engineer provides covering fire with his carbine as the soldier advances. The hacker flanks the security forces from the rear, causing the enemy confusion. The team manages to neutralize the entire security force during the assault. However, the soldier was hit by several kinetic rounds, which bypassed his armor and injured his internal organs. The soldier dies rapidly from his injuries.`, 'soldier');

new StoryNode('G', 1, `The hacker is again contact by the unknown source.The unknown source sends the hacker a decryption code that will allow her to hack into the terminal. Do you again, trust the unknown source?`, 8, `The hacker uploads the decryption code onto a chip and inserts the chip into the terminal. The decryption code appears to be successful, and the hacker begins to hack into the terminal. The hacker successfully disengages all local security protocols. The vault door depressurizes and opens. The team walks into the vault and successfully retrieves the core.`);

new StoryNode('N', 1, `The engineer can pry open the ventilation grille cover, climb into the air ducts using electromagnetic grip implants built into his hands, and retrieve the modulator. Do you utilize the capabilities of the engineer?`, 4, `The engineer successfully enters the air vents using his electromagnetic implants. He retrieves the core, but suffers half damage during the extraction. As he traverses the vents, he receives second degree burns caused by a loose thermal coupler.`, 'engineer');

new StoryNode('B', 1, `The soldier can break the terminal using brute force and the engineer can rewire the terminal so that the vault door opens. Do you forcibly enter the vault?`, 7, `The soldier smashes the terminal with the butt of his assault rifle but a hidden laser turret activates and fires at the soldier. The soldier disables the turret with his assault rifle, but suffers third degree burns that lead to rapid shock and death.`, 'engineer');

new StoryNode('G', 2, `The hacker is again contact by the unknown source. The unknown source sends the hacker a decryption code that will allow her to hack into the terminal. Do you trust the unknown source?`, 3, `The hacker uploads the decryption code onto a chip and inserts the chip into the terminal. The decryption code appears to be successful, and the hacker begins to hack into the terminal. The hacker successfully disengages all local security protocols. The vault door depressurizes and opens. The team walks into the vault and successfully retrieves the core.`);

new StoryNode('N', 2, `The engineer can pry open the ventilation grille cover, climb into the air ducts using electromagnetic grip implants built into his hands, and retrieve the modulator. Do you utilize the capabilities of the engineer?`, 5, `The engineer successfully enters the air vents using his electromagnetic implants. He retrieves the core, but suffers half damage during the extraction. As he traverses the vents, he receives second degree burns caused by a loose thermal coupler.`, 'engineer');

new StoryNode('B', 2, `The soldier can break the terminal using brute force and the engineer can rewire the terminal so that the vault door opens. Do you forcibly enter the vault?`, 9, `The soldier smashes the terminal with the butt of his assault rifle.  Unfortunately, the hidden laser turret activates and fires at the soldier. The soldier disables the turret with his assault rifle, but suffers third degree burns that lead to rapid shock and death. The engineer rewires exposed electrical components within the smashed terminal, causing the vault door to depressurize and open. The team walks into the vault and successfully retrieves the core.`, 'soldier');

new StoryNode('G', 3, `The hacker is again contact by the unknown source.The unknown source sends the hacker a decryption code that will allow her to hack into the terminal. Do you again, trust the unknown source?`, 12, `The hacker uploads the decryption code onto a chip and inserts the chip into the terminal. The decryption code appears to be successful, and the hacker begins to hack into the terminal. The hacker successfully disengages all local security protocols. The vault door depressurizes and opens. The team walks into the vault and successfully retrieves the core.`);

new StoryNode('N', 3, `The engineer can pry open the ventilation grille cover, climb into the air ducts using electromagnetic grip implants built into his hands, and retrieve the modulator. Do you utilize the capabilities of the engineer?`, 6, `The engineer successfully enters the air vents using his electromagnetic implants. He retrieves the core, but suffers half damage during the extraction. As he traverses the vents, he receives second degree burns caused by a loose thermal coupler.`, 'engineer');

new StoryNode('B', 3, `The soldier can break the terminal using brute force and the engineer can rewire the terminal so that the vault door opens. Do you forcibly enter the vault?`, 11, `The soldier smashes the terminal with the butt of his assault rifle but a hidden laser turret activates and fires at the soldier. The soldier disables the turret with his assault rifle, but suffers third degree burns that lead to rapid shock and death.`, 'soldier');

new StoryNode('G', 4, `There is a nearby terminal that the hacker can hack into. There are also two remote turrets stationed between the team and the overwhelming force. Do you make an attempt to hack into the terminal and gain control of the turrets?`, 'final', `The hacker hacks into the terminal and successfully gains control of both turrets. The turrets open fire on the overwhelming force as it approaches, allowing the hacker and engineer enough time to continue with their escape.`);

new StoryNode('N', 4, `The engineer carries a cloaking device that will allow the team to leave the building stealthily.  Do you utilize the device?`, 'final', `The engineer attempts to activate the cloaking device but finds its electronics disabled. It is likely jammed by an electronic warfare device. The hacker hacks into the device and manages to override the jamming signal. The cloaking device is successfully activated. However, the cloaking device eventually overheats, causing second degree burns. The engineer suffers half damage, goes into shock from his accumulated injuries, and dies.`, 'engineer');

new StoryNode('B', 4, `The hacker was also contacted by the unknown source who suggested that she utilize the nearest ventilation system to escape. Do you trust the unknown source for once and enter the ventilation system?`, 'final', `Using the multi-tool, the engineer pries open the ventilation grille, and jumps in feet first. As the overwhelming force approaches, the hacker attempts to enter the ventilation system, but is not quick enough. The overwhelming force begins to engage, and she instantly dies from the converging gun fire. As the engineer traverses the ventilation system, he discovers a shaft, which opens to an abandoned access tunnel.`, 'hacker');

new StoryNode('G', 5, `The soldier is equipped with a full arsenal of weapons and several grenades. Do you let the soldier lead the team into a final stand-off?`, 'final', `The team was able to find proper cover while the soldier provided covering fire. The soldier throws several high explosive grenades. This causes structural collapse of the building which cuts the overwhelming force off from the team. The stand-off comes to a quick and decisive end.`);

new StoryNode('N', 5, `The soldier and hacker are now carrying the cloaking device. If activated, it will allow the team to leave the building stealthily.  Do you utilize the device?`, 'final', `The hacker attempts to activate the cloaking device but finds its electronics disabled. It is likely jammed by an electronic warfare device. She hacks into the device and manages to override the jamming signal. The cloaking device is successfully activated. However, the cloaking device eventually overheats. The hacker suffers half damage as she sustains second degree burns.`, 'hacker');

new StoryNode('B', 5, `The hacker was also contacted by the unknown source who suggested that she utilize the nearest ventilation system to escape. Do you trust the unknown source for once and enter the ventilation system?`, 'final', `Using the engineer's multi-tool, the soldier pries open the ventilation grille, but lacks dexterity and is not quick enough. The soldier jumps in feet first as the overwhelming force begins to engage. The hacker is instantly killed from converging gun fire. While traversing the ventilation system, the soldier discovers a shaft, which opens to an abandoned access tunnel.`, 'hacker');

new StoryNode('G', 6, `The soldier is equipped with a full arsenal of weapons and several grenades. Do you let the soldier lead the team into a final stand-off?`, 'final', `The team was able to find proper cover while the soldier provided covering fire. The soldier throws several high explosive grenades. This causes structural collapse of the building which cuts the overwhelming force off from the team. The stand-off comes to a quick and decisive end.`);

new StoryNode('N', 6, `The engineer carries a cloaking device that will allow the team to leave the building stealthily.  Do you utilize the device?`, 'final', `The engineer attempts to activate the cloaking device but finds its electronics disabled. It is likely jammed by an electronic warfare device. The hacker hacks into the device and manages to override the jamming signal. The cloaking device is successfully activated. However, the cloaking device eventually overheats, causing second degree burns. The engineer suffers half damage, goes into shock from his accumulated injuries, and dies.`, 'engineer');

new StoryNode('B', 6, `The hacker is contacted by the unknown source who suggests that they escape using the nearest ventilation system. Do you once again, trust the unknown source and enter the ventilation system?`, 'final', `Using the multi-tool, the engineer quickly pries open the ventilation grill of the nearest vent and jumps in feet first. The soldier quickly follows. The hacker enters third, but the hacker was not careful enough and falls to her death head first down the ventilation system. As the engineer and soldier traverse the ventilation system, they discover a shaft, which opens to the same access tunnel that was used to enter the facility.`, 'hacker');

new StoryNode('G', 7, `Being the only survivor, the hacker is left with few options.The hacker is again contacted by the unknown source who suggests that she utilize the nearest ventilation system to escape. Do you trust the unknown source for once and enter the ventilation system?`, 'final', `Using the engineer's multi-tool, the hacker pries open the ventilation grille, and jumps in feet first. The unknown source guides her to a shaft, which opens to an abandoned access tunnel.`);

new StoryNode('N', 7, `The hacker can also look for a terminal. If she is successful, she can hack into the terminal and lock down access to local doors while unleashing a powerful virus. Do you attempt to find a terminal?`, 'final', `In desperation, the hacker frantically searches for a terminal. After running for what seemed like hours, she successfully finds a terminal. The hacker initiates the lock down procedure, cutting herself off from the overwhelming force. She subsequently releases a virus, which fries the internal security systems. This prevents security forces from overriding the lock-down procedure. The hacker sustains half damage as her own neural implant failed to contain the virus.`, 'hacker');

new StoryNode('B', 7, `The hacker can also face the overwhelming force head-on. This action will likely be suicidal. Do you attempt the deadly confrontation?`, 'final', `In exhaustion, the hacker takes cover and attempts a last stand. She fires on the oncoming force with two submachine guns as they open fire. The shoot-out is intense but short-lived. The overwhelming firepower obliterates her cover, causing massive trauma as torn pieces of metal fly at her like shrapnel, rendering her unconscious. She bleeds out and dies.`, 'hacker');

new StoryNode('G', 8, `There is a nearby terminal that the hacker can hack into. There are also two remote turrets stationed between the team and the overwhelming force. Do you make an attempt to hack into the terminal and gain control of the turrets?`, 'final', `The hacker hacks into the terminal and successfully gains control of both turrets. The turrets open fire on the overwhelming force as it approaches, allowing the hacker and engineer enough time to escape.`);

new StoryNode('N', 8, `The engineer carries a cloaking device that will allow the team to leave the building stealthily.  Do you utilize the device?`, 'final', `The engineer attempts to activate the cloaking device but finds its electronics disabled. It is likely jammed by an electronic warfare device. The hacker hacks into the device and manages to override the jamming signal. The cloaking device is successfully activated. However, the cloaking device eventually overheats, causing second degree burns. The engineer suffers half damage.`, 'engineer');

new StoryNode('B', 8, `The hacker is contacted by the unknown source who suggests that they escape using the nearest ventilation system. Do you trust the unknown source for once and enter the ventilation system?`, 'final', `Using the multi-tool, the engineer quickly pries open the ventilation grill of the nearest vent and jumps in feet first. The soldier enters second, but the hacker was not quick enough and suffers fatal wounds from the overwhelming force as they open fire. As the engineer traverses the ventilation system, he discovers a shaft, which opens to an abandoned access tunnel.`, 'hacker');

new StoryNode('G', 9, `There is a nearby terminal that the hacker can hack into. There are also two remote turrets stationed between the team and the overwhelming force. Do you make an attempt to hack into the terminal and gain control of the turrets?`, 'final', `The hacker hacks into the terminal and successfully gains control of both turrets. The turrets open fire on the overwhelming force as it approaches, allowing the hacker and engineer enough time to escape.`);

new StoryNode('N', 9, `The engineer carries a cloaking device that will allow the team to leave the building stealthily.  Do you utilize the device? `, 'final', `The engineer attempts to activate the cloaking device but finds its electronics disabled. It is likely jammed by an electronic warfare device. The hacker hacks into the device and manages to override the jamming signal. The cloaking device is successfully activated. However, the cloaking device eventually overheats, causing second degree burns. The engineer suffers half damage, goes into shock from his accumulated injuries, and dies.`, 'engineer');

new StoryNode('B', 9, `The hacker is contacted by the unknown source who suggests that they escape using the nearest ventilation system. Do you trust the unknown source for once and enter the ventilation system?`, 'final', `Using the multi-tool, the engineer quickly pries open the ventilation grill of the nearest vent and jumps in feet first. The soldier enters second, but the hacker was not quick enough to follow and suffers fatal wounds as the overwhelming force opens fire. As the engineer traverses the ventilation system, he discovers a shaft, which opens to an abandoned access tunnel.`, 'hacker');

new StoryNode('G', 10, `The soldier is equipped with a full arsenal of weapons and several grenades. Do you let the soldier lead the team into a final stand-off?`, 'final', `The team was able to find proper cover while the soldier provided covering fire. The soldier throws several high explosive grenades. This causes structural collapse of the building which cuts the overwhelming force off from the team. The stand-off comes to a quick and decisive end.`);

new StoryNode('N', 10, `The engineer carries a cloaking device that will allow the team to leave the building stealthily.  Do you utilize the device?`, 'final', `The engineer attempts to activate the cloaking device but finds its electronics disabled. It is likely jammed by an electronic warfare device. The hacker hacks into the device and manages to override the jamming signal. The cloaking device is successfully activated. However, the cloaking device eventually overheats, causing second degree burns. The engineer suffers half damage, goes into shock from his accumulated injuries, and dies.`, 'engineer');

new StoryNode('B', 10, `The hacker is contacted by the unknown source who suggests that they escape using the nearest ventilation system. Do you once again, trust the unknown source and enter the ventilation system?`, 'final', `Using the multi-tool, the engineer quickly pries open the ventilation grill of the nearest vent and jumps in feet first. The soldier enters second, but the hacker was not quick enough to follow and suffers fatal wounds as the overwhelming force opens fire. As the engineer and soldier traverse the ventilation system, they discover a shaft, which opens to an abandoned access tunnel.`, 'hacker');

new StoryNode('G', 11, `There is a nearby terminal that the hacker can hack into. There are also two remote turrets stationed between the team and the overwhelming force. Do you make an attempt to hack into the terminal and gain control of the turrets?`, 'final', `The hacker hacks into the terminal and successfully gains control of both turrets. The turrets open fire on the overwhelming force as it approaches, allowing the hacker and engineer enough time to escape.`);

new StoryNode('N', 11, `The engineer carries a cloaking device that will allow the team to leave the building stealthily.  Do you utilize the device?`, 'final', `The engineer attempts to activate the cloaking device but finds its electronics disabled. It is likely jammed by an electronic warfare device. The hacker hacks into the device and manages to override the jamming signal. The cloaking device is successfully activated. However, the cloaking device eventually overheats, causing second degree burns. The engineer suffers half damage.`, 'engineer');

new StoryNode('B', 11, `The hacker is contacted by the unknown source who suggests that they escape using the nearest ventilation system. Do you once again, trust the unknown source and enter the ventilation system?`, 'final', `Using the multi-tool, the engineer quickly pries open the ventilation grill of the nearest vent and jumps in feet first. The hacker enters second, but the hacker was not quick enough to follow and suffers fatal wounds as the overwhelming force opens fire. As the engineer traverses the ventilation system, he discovers a shaft, which opens to the same access tunnel that was used to enter the facility.`, 'hacker');

new StoryNode('G', 12, `The soldier is equipped with a full arsenal of weapons and several grenades. Do you let the soldier lead the team into a final stand-off?`, 'final', `The team was able to find proper cover while the soldier provided covering fire. The soldier throws several high explosive grenades. This causes structural collapse of the building which cuts the overwhelming force off from the team. The stand-off comes to a quick and decisive end.`);

new StoryNode('N', 12, `The engineer carries a cloaking device that will allow the team to leave the building stealthily.  Do you utilize the device?`, 'final', `The engineer attempts to activate the cloaking device but finds its electronics disabled. It is likely jammed by an electronic warfare device. The hacker hacks into the device and manages to override the jamming signal. The cloaking device is successfully activated. However, the cloaking device eventually overheats, causing second degree burns. The engineer suffers half damage.`, 'engineer');

new StoryNode('B', 12, `The hacker is contacted by the unknown source who suggests that they escape using the nearest ventilation system. Do you once again, trust the unknown source and enter the ventilation system?`, 'final', `Using the multi-tool, the engineer quickly pries open the ventilation grill of the nearest vent and jumps in feet first. The soldier enters second, but the hacker was not quick enough to follow and suffers fatal wounds as the overwhelming force opens fire. As the soldier and engineer traverses the ventilation system, they discover a shaft, which opens to the same access tunnel that was used to enter the facility.`, 'hacker');





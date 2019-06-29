'use strict';

var nodes = [node3G7, node3N7, node3B7, node3G12, node3N12, node3B12, node3B4, node2B1, node2G3, node3G6, node3N4, node2N1, node2N3, node3N6, node3G4, node2G1, node1B0, node1N0, node1G0, node2B3, node3B6, node3B8, node3N8, node3G8, node3B11, node3N11, node3G11, node3G9, node2B2, node2N2, node2G2, node3B10, node3N9, node3N10, node3B5, node3N5, node3G5, node3B9, node3G10];

/*  */
var buttons = document.getElementById('tree');
for(var i = 0; i < nodes.length; i++){
    nodes[i].setAttribute('onclick', 'clicked(this.id)');
}

function clicked(attributeID){

    var text = document.getElementById('text');
    if(attributeID === 'node1B0'){
        text.innerHTML = scenario[0][2].choiceText;
    } else if(attributeID === 'node1N0'){
        text.innerHTML = scenario[0][1].choiceText;
    } else if(attributeID === 'node1G0'){
        text.innerHTML = scenario[0][0].choiceText;
    }
    
    else if(attributeID === 'node2B1'){
        text.innerHTML = scenario[1][2].choiceText;
    } else if(attributeID === 'node2N1'){
        text.innerHTML = scenario[1][1].choiceText;
    } else if(attributeID === 'node2G1'){
        text.innerHTML = scenario[1][0].choiceText;
    }
    
    else if(attributeID === 'node2B2'){
        text.innerHTML = scenario[2][2].choiceText;
    } else if(attributeID === 'node2N2'){
        text.innerHTML = scenario[2][1].choiceText;
    } else if(attributeID === 'node2G2'){
        text.innerHTML = scenario[2][0].choiceText;
    }
    
    else if(attributeID === 'node2B3'){
        text.innerHTML = scenario[3][2].choiceText;
    } else if(attributeID === 'node2N3'){
        text.innerHTML = scenario[3][1].choiceText;
    } else if(attributeID === 'node2G3'){
        text.innerHTML = scenario[3][0].choiceText;
    }
    
    else if(attributeID === 'node3B4'){
        text.innerHTML = scenario[4][2].choiceText;
    } else if(attributeID === 'node3N4'){
        text.innerHTML = scenario[4][1].choiceText;
    } else if(attributeID === 'node3G4'){
        text.innerHTML = scenario[4][0].choiceText;
    }
    
    else if(attributeID === 'node3B5'){
        text.innerHTML = scenario[5][2].choiceText;
    } else if(attributeID === 'node3N5'){
        text.innerHTML = scenario[5][1].choiceText;
    } else if(attributeID === 'node3G5'){
        text.innerHTML = scenario[5][0].choiceText;
    }
    
    else if(attributeID === 'node3B6'){
        text.innerHTML = scenario[6][2].choiceText;
    } else if(attributeID === 'node3N6'){
        text.innerHTML = scenario[6][1].choiceText;
    } else if(attributeID === 'node3G6'){
        text.innerHTML = scenario[6][0].choiceText;
    }
    
    else if(attributeID === 'node3B7'){
        text.innerHTML = scenario[7][2].choiceText;
    } else if(attributeID === 'node3N7'){
        text.innerHTML = scenario[7][1].choiceText;
    } else if(attributeID === 'node3G7'){
        text.innerHTML = scenario[7][0].choiceText;
    }
    
    else if(attributeID === 'node3B8'){
        text.innerHTML = scenario[8][2].choiceText;
    } else if(attributeID === 'node3N8'){
        text.innerHTML = scenario[8][1].choiceText;
    } else if(attributeID === 'node3G8'){
        text.innerHTML = scenario[8][0].choiceText;
    }
    
    else if(attributeID === 'node3B9'){
        text.innerHTML = scenario[9][1].choiceText;
    } else if(attributeID === 'node3N9'){
        text.innerHTML = scenario[9][0].choiceText;
    } else if(attributeID === 'node3G9'){
        text.innerHTML = scenario[10][2].choiceText;
    }
    
    else if(attributeID === 'node3B10'){
        text.innerHTML = scenario[10][2].choiceText;
    } else if(attributeID === 'node3N10'){
        text.innerHTML = scenario[10][1].choiceText;
    } else if(attributeID === 'node3G10'){
        text.innerHTML = scenario[10][0].choiceText;
    }
    
    else if(attributeID === 'node3B11'){
        text.innerHTML = scenario[11][2].choiceText;
    } else if(attributeID === 'node3N11'){
        text.innerHTML = scenario[11][1].choiceText;
    } else if(attributeID === 'node3G11'){
        text.innerHTML = scenario[11][0].choiceText;
    }
    
    else if(attributeID === 'node3B12'){
        text.innerHTML = scenario[12][2].choiceText;
    } else if(attributeID === 'node3N12'){
        text.innerHTML = scenario[12][1].choiceText;
    } else if(attributeID === 'node3G12'){
        text.innerHTML = scenario[12][0].choiceText;
    }
    
}

// for(var i = 0; i < buttons.length; i++){
    
//     var button = document.getElementById(nodes[i]).setAttribute('onclick', 'clicked(this.id)');
    
    
//     if(attributeID === nodes[i]){
//         document.getElementById('text').innerHTML()
//     }

// }
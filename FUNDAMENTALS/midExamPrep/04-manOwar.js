function manOwar (input){
let pirate = input.shift().split('>').map(Number);
let warship = input.shift().split('>').map(Number);
let maxHp = Number(input.shift());
let critical = maxHp*0.2;

for (let current of input){
    let tokens = current.split(' ');
    let comm= tokens.shift();

    if (comm === 'Retire'){
        break;
    }else if (comm==='Fire'){
        let index = Number(tokens[0]);
        let damage = Number(tokens[1]);
        if (index<0||index>=warship.length){
            continue;
        }
        warship[index]-=damage;
        if (warship[index]<= 0){
            console.log("You won! The enemy ship has sunken.");
            return;
        }
    }else if (comm === 'Defend'){
        let start = Number(tokens[0]);
        let end = Number (tokens[1]);
        let damage = Number(tokens[2]);

        if (start<0||start >= pirate.length || end<0|| end>=pirate.length){
            continue;
        }
        for (let i = start; i<= end; i++){
            pirate[i]-=damage;
            if(pirate[i]<=0){
                console.log("You lost! The pirate ship has sunken.");
                return;
            }
        }
    }else if (comm === 'Repair'){
        let index = Number(tokens[0]);
        let hp = Number(tokens[1]);
        if (index<0 || index>=pirate.length){
            continue;
        }
        pirate[index]+=hp;
        if (pirate[index]>maxHp){
            pirate[index]=maxHp;

        }
    }else if(comm === 'Status'){
        let damaged = pirate.filter(section=>section<critical);
        console.log(`${damaged.length} sections need repair.`);
    }
}
let warshipStat = 0;
let pirateStat = 0;
for (let section of pirate){
    pirateStat+=section
}
for (let section of warship ){
warshipStat+=section
}
console.log(`Pirate ship status: ${pirateStat}`);
console.log(`Warship status: ${warshipStat}`);
}
manOwar((["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]))
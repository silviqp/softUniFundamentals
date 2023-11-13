function arenaTier (data){
let gladiatorPool = new Map();

let index = 0;
let comm = data[index];
index++

while(comm!== 'Ave Cesar'){
    let action = comm.split(' -> ');
    if (action.length === 3){
    let [name,tech,skill] = action;

    if (!gladiatorPool.has(name)){
        gladiatorPool.set(name, new Map())
    }
    if (!gladiatorPool.get(name).has(tech)|| (gladiatorPool.get(name).has(tech) && gladiatorPool.get(name).get(tech)<skill)){
        gladiatorPool.get(name).set(tech,Number(skill));
    }
    }else {
        let [gladiatorA,gladiatorB]= comm.split(' vs ')
        if (gladiatorPool.has(gladiatorA) && gladiatorPool.has(gladiatorB)){
            let techGladA = gladiatorPool.get(gladiatorA);
            let techGladB = gladiatorPool.get(gladiatorB);
            let bigSkilMap = techGladA.size >techGladB.size? techGladA.size :techGladB.size
            let smalSkilMap = techGladA.size > techGladB.size? techGladB.size :techGladA.size

            for (let [teckN,skill] of Array.from(bigSkilMap)){
                if (smalSkilMap.has(teckN)){
                    if (techGladA.get(teckN)>techGladB.get(teckN)){
                        techGladB.delete(teckN)
                    }else {
                        techGladA.delete(teckN)
                    }
                }
            }
        }

    }

    comm= data[index];
    index++
}
let gladiatorPoints = new Map();
for (let [gladiatorN, techrnique] of Array.from(gladiatorPool)){
    let sum = 0
    for (let [tech,skill] of Array.from(techrnique)){
        sum+=skill
    }
    if(sum !== 0){
        gladiatorPoints.set(gladiatorN,sum)
    }

    }
    

let sortPoints = Array.from(gladiatorPoints).sort((a,b)=>b[1] - a[1] || a[0].localeCompare(b[0]));
for (let [name,point] of sortPoints){
    console.log(`${name}: ${point} skill`);
    let tech = Array.from(gladiatorPool.get(name)).sort((a,b)=>b[1]- a[1] || a[0].localeCompare(b[0]));
for (let [techN,skillP] of tech){
console.log(`- ${techN} <!> ${skillP}`);
}
}
}
arenaTier([

    'Peter -> BattleCry -> 400',
    
    'Alex -> PowerPunch -> 300',
    
    'Stefan -> Duck -> 200',
    
    'Stefan -> Tiger -> 250',
    
    'Ave Cesar'
    
    ])
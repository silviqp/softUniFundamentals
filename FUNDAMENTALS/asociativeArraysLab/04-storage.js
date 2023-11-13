function createStorage (arr){
let  storage = new Map ()

for (let line of arr){
    let[item,qty]= line.split(' ');
    qty = Number(qty)
    if (storage.has(item)){
        qty+=storage.get(item)
    }
storage.set(item,qty)
}
for (let [item,qty] of storage){
    console.log(`${item} -> ${qty}`);
}

}
createStorage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])
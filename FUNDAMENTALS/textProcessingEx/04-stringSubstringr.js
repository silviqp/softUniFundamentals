function stringSubstring (word, text){

    text = text.toLowerCase().split(' ')

    if (text.includes(word)){
        console.log(word);
    }else {
        console.log(`${word} not found!`);
    }

}
stringSubstring('phyton',

'JavaScript is the best programming language')
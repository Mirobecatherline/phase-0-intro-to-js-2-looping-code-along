// Code your solutions in this file
let names=["Guadalupe", "Ollie", "Aki"];
function writeCards(names, event="surprise") {
    const letter=[];
    for (let index = 0; index < names.length; index++) {
        
        letter.push(`Thank you, ${names[index]}, for the wonderful ${event} gift!`);
    }
    return letter;
}

function countDown() {
    let count=0;
    while (count<11) {
        console.log(count++);
        
    }
}
// Code your solutions in this file
function writeCards(names, events) {
 let array = []  
    for (let a = 0; a < names.length; a++){
    array.push(`Thank you, ${names[a]}, for the wonderful ${events} gift!`)     
    }
return array
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--)
    }
}
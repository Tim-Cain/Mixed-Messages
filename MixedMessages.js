function messageGen(num){
    if (num == 0){return "Message1";}
     else if (num == 1){return "Message2";}
     else if (num == 2){return "message3";}
}

function numGen(){
    let num = Math.floor((Math.random() * 3) + 1);
    return num
} 

messageGen(numGen())
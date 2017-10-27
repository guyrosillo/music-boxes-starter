//Trying this out!

function changeBG(){
    const num = Math.floor(Math.random()*8);
        
    if(num ==0){
        document.body.style.background = "gold";
    }
    else if(num == 1){
        document.body.style.background = "red";
    }
    else if(num == 2){
        document.body.style.background = "green";
    }
    else if(num == 3){
        document.body.style.background = "pink";
    }
    else if(num == 4){
        document.body.style.background = "lightblue";
    }
    else if(num == 5){
        document.body.style.background = "navy";
    }
    else if(num == 6){
        document.body.style.background = "orangered";
    }
    else if(num == 7){
        document.body.style.background = "violet";
    }
    else{
        document.body.style.background = "grey";
    }
    }

changeBG();
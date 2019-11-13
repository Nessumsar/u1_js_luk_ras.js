var humanNumber = 0;
var cpuNumber = 0;
//Dessa variabler ska ändras när spelarna drar kort. Om någon drar en trea ska 0 bli tre osv.
var randomNumber = 0;
//Variabel som lagrar ett random nummer från 1 till 11


startBlackJack();
//Startar spelet.

function getRandomNumber(){
    randomNumber = Math.floor(Math.random() * 11) + 1 ;
    return randomNumber;
}
//Funktion som ger ett random nummer från 1 till 11 och returnerar det till randomNumber i det globala scopet.

function addHumanNumber(randomNumber){
    humanNumber += randomNumber;
    console.log("Human drew: "+randomNumber);
    console.log("Human score: "+humanNumber)
    return humanNumber;
}

function addCpuNumber(randomNumber){
    cpuNumber += randomNumber;
    console.log("Computer drew: "+randomNumber);
    console.log("Computer score: "+cpuNumber); 
    return cpuNumber;
}
//Dessa funktioner ger randomNumber till spelarnas poäng.

function startBlackJack(){
    addHumanNumber(getRandomNumber());
    addCpuNumber(getRandomNumber());
    addCpuNumber(getRandomNumber());
    if(cpuNumber == 21){
        alert("You lose.\n\nComputer score: "+cpuNumber+"\n\nPlayer score: "+humanNumber);
    }
}
//Funktionen startar spelet och ger spelaren samt datorn sina kort.

function checkWinAtStop(){
    checkInstantWin();
    if(humanNumber < 21 && humanNumber > cpuNumber){
        alert("Congratulations! You win! \n\nComputer score: "+cpuNumber+"\n\nPlayer score: "+humanNumber);
    }  
    else if(cpuNumber < 21 && humanNumber < cpuNumber){
        alert("You lose.\n\nComputer score: "+cpuNumber+"\n\nPlayer score: "+humanNumber);
    }
    else if(humanNumber == cpuNumber){
        alert("A draw!\n\nComputer score: "+cpuNumber+"\n\nPlayer score: "+humanNumber);
    } 
}
//Kollar vid vinst när man stoppar, eftersom en omedelbar vinst beter sig annourlunda än en vinst vid stopp. 
//Kikar också om det är en omedelbar vinst för att inte repetera kod mer än nödvändigt. 
//Oavgjort kan bara uppstå när en stannar. 

function checkInstantWin(){
    if(humanNumber == 21 && cpuNumber != 21){
        alert("Congratulations! You win! \n\nComputer score: "+cpuNumber+"\n\nPlayer score: "+humanNumber);
    }
    else if(cpuNumber > 21){
        alert("Congratulations! You win! \n\nComputer score: "+cpuNumber+"\n\nPlayer score: "+humanNumber);
    }
    else if(humanNumber > 21){
        alert("You lose.\n\nComputer score: "+cpuNumber+"\n\nPlayer score: "+humanNumber);
    }
    else if(cpuNumber == 21 && humanNumber != 21){
        alert("You lose.\n\nComputer score: "+cpuNumber+"\n\nPlayer score: "+humanNumber);
    }
}
//Kollar om det är en omedelbar vinst genom att jämföra poängen med varandra och 21.

window.addEventListener("keydown", function(event){

    if (event.code === 'KeyD') {
        console.log("Player draws.");
        addHumanNumber(getRandomNumber());
        checkInstantWin();
    } 
    else if (event.code === 'KeyS') {
        console.log("Player stopped.");
        if(cpuNumber < 17){
            addCpuNumber(getRandomNumber());
        }
        checkWinAtStop();   
    }
});
//När spelaren trycker D ges spelaren ett till kort och kollar efter en omedelbar vinst. 
//När spelaren stoppar får datorn ett kort ifall poängen är under 17 samt kollar vem som vann.
  
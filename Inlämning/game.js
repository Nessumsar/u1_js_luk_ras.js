var humanNumber = 0;
var cpuNumber = 0;
//Dessa variabler ska ändras när spelarna drar kort. Om någon drar en trea ska 0 bli tre osv.
var cardDrawn;
//Variabel som lagrar värdet på kortet som dras.
var randomNumber = 0;
//Variabel som lagrar ett random nummer från 1 till 11


startBlackJack();

//Testsyfte
/*
Vid start av spel så drar spelaren 1st kort, sedan drar datorn 2st kort.
Vid varje dragning skall det kort som spelare eller dator drar samt dennes totala poäng loggas.
Nu får spelare välja på att dra ett nytt kort eller stanna.
Dra ett nytt kort görs genom att trycka på tangenten D och stanna görs genom att trycka på tangenten S.
Stannar spelare så kommer datorn att dra ETT kort om denna har under 17.
Utfall:

Datorn hamnar på över 21 = vinst spelare (omedelbart).
Spelare hamnar på över 21 = vinst dator (omedelbart).
Dator hamnar på exakt 21 = vinst dator (omedelbart).
Spelare hamnar på exakt 21 = vinst spelare (omedelbart).
Spelare och dator hamnar på exakt samma poäng = oavgjort.
Spelare och dator har under 21, poäng jämförs och den med högst poäng vinner.
När någon vinner eller vid oavgjort så visar ni resultat samt både spelare och dators poäng i en alert.

*/


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
//Dessa funktioner ger ett slumpat nummer till spelarnas fullständiga nummer.

function startBlackJack(){
addHumanNumber(getRandomNumber());
addCpuNumber(getRandomNumber());
addCpuNumber(getRandomNumber());
}
//Startar spelet och ger spelaren samt datorn sina kort.

function checkWinAtStop(){
    checkInstantWin();
    if(humanNumber & cpuNumber < 21 && humanNumber > cpuNumber){
        alert("Congratulations! You win! \n\nComputer score: "+cpuNumber+"\n\nPlayer score: "+humanNumber);
    }  
    else if(humanNumber & cpuNumber < 21 && humanNumber < cpuNumber){
        alert("You lose.\n\nComputer score: "+cpuNumber+"\n\nPlayer score: "+humanNumber);
    } 
}

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
    else if(humanNumber != 21 && cpuNumber == 21){
        alert("You lose.\n\nComputer score: "+cpuNumber+"\n\nPlayer score: "+humanNumber);
    }
    else if(humanNumber == cpuNumber){
        alert("A draw!\n\nComputer score: "+cpuNumber+"\n\nPlayer score: "+humanNumber);
    }
}

window.addEventListener("keydown", function(event){

    if (event.code === 'KeyD') {
        console.log("Player draws.");
        addHumanNumber(getRandomNumber());
        checkInstantWin();
  
    } else if (event.code === 'KeyS') {
        console.log("Player stopped.");
        if(cpuNumber < 17){
            addCpuNumber(getRandomNumber());
        }
        checkWinAtStop();
         
    }
  
  });

  
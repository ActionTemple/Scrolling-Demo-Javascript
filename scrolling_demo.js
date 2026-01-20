


var msg = ["T", "H", "I", "S", " ", "I", "S", " ", "M", "Y", " ", "S", "C", "R", "O", "L", "L", "I", "N", "G", " ", "M", "S", "G", " ", "B", "A", "R", " ", "-", "-", "-", " "];
var lengthOfMessage = 0;
var fullMessage = "";
for (let a = 0; a < msg.length; a++){
    lengthOfMessage ++;
}
console.log(lengthOfMessage);

function scroll(){

    
        
     for (let i = 0; i < lengthOfMessage;){
            var firstLetter = msg.shift();
            msg.push(firstLetter);
            
        
            fullMessage = fullMessage + firstLetter;
            if (fullMessage.length == lengthOfMessage){
                //console.clear();
                //console.log(fullMessage);
                // Find the element by its ID
                const displayElement = document.getElementById('message-display');

                // Set its content to your variable
                displayElement.textContent = fullMessage;
                 
                
            }
            
        i++;
        
        }
        fullMessage = ""   
        var firstLetter2 = msg.shift();
        msg.push(firstLetter2);
        //console.clear();   
           

}

let count = 0;
// Function to increment and display count
function incrementCounter() {
    console.clear;
    count++;
    scroll();
}

setInterval(incrementCounter, 75);




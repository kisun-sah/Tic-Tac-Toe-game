

let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#btn');
let newGamebtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true //playerX ,playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = () => {
    turnO = true;
    EnableBoxes();
    msgContainer.classList.add("hide")
    box.classList.add("play_o")
    box.classList.add("play_x")
}



boxes.forEach((box) => {
    box.addEventListener("click" , () => {
     
       if(turnO){  //player O
            box.innerText = "O";
            box.classList.add("play_o")
            
            turnO = false

       }else{ // player X
        box.innerText = " X";
        box.classList.add("play_x")
            
        turnO = true
       }
       box.disabled = true
        
       checkwinner();
        
    });
})
const disableBoxes = () => {
      for(let box of boxes){
        box.disabled = true;
      }
}


const showWinner = (winner) => {
    msg.innerHTML = `Congratulations , Winner is ${winner}` 
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const EnableBoxes = () => {
    for(let box of boxes){
      box.disabled = false;
      box.innerText ="";
    }
}

const checkwinner = () => {
    for(pattern of winPatterns ){
   
        let pos1val = boxes[pattern[0]].innerText ;
        let pos2val = boxes[pattern[1]].innerText ;
        let pos3val = boxes[pattern[2]].innerText;
       
        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val === pos2val && pos2val == pos3val){
                showWinner(pos1val);
                
            }
        }
    }
}

newGamebtn.addEventListener("click" , resetGame);
resetbtn.addEventListener("click", resetGame)
    


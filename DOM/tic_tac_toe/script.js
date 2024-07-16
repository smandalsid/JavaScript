let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn= document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = false;
let counter=0;

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const enableboxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const resetgame = () => {
    turn0=false;
    msgcontainer.classList.add("hide");
    enableboxes();
};

const showdraw = () => {
    msg.innerText="The game is a draw";
    msgcontainer.classList.remove("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            box.style.color="green";
            turn0=false;
        } else {
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
        counter++;
        if(counter==9){
            showdraw();
        }
    });
});

const disableboxes = () => {
    for(box of boxes){
        box.disabled=true;
    }
};

const showwinner = (val) =>{
    msg.innerText = `Winner is ${val}`;
    msgcontainer.classList.remove('hide');
    disableboxes();
};

const checkwinner = () =>{
    for(let pattern of winpatterns){
                
        val1=boxes[pattern[0]].innerText;
        val2=boxes[pattern[1]].innerText;
        val3=boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val2==val3){
                // console.log("Player: "+val1+" is the winner");
                showwinner(val1);
            }
        }
    }
}

resetbtn.addEventListener("click",resetgame);
newgamebtn.addEventListener("click", resetgame)
const URL = "https://cat-fact.herokuapp.com/facts";
const para=document.querySelector("#para");

const fetchbutton=document.querySelector("#fetch");

// async await method

// const getfacts = async()=>{
//     console.log("Getting facts");
//     let response = await fetch(URL);
//     console.log(response);
//     let data=await response.json();
//     document.querySelector("#para").innerText=data[0].text;
    
// }

// promise chaining method

function getfacts(){
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data[0]);
        para.innerText=data[0].text;
    })
}

fetchbutton.addEventListener("click", getfacts);
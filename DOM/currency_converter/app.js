const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button");

for (let select of dropdowns) {
    for (let currcode in countryList) {
        let newopt = document.createElement("option");
        newopt.innerText = currcode;
        newopt.value = currcode;
        if (select.name == "from" && currcode == "USD") {
            newopt.selected = "selected";
        } else if(select.name=="to" && currcode == "INR"){
            newopt.selected="selected";
        }
        select.append(newopt);
    }
    select.addEventListener("change", (evt)=>{
        updateflag(evt.target);
    })
}

const updateflag = (element) =>{
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
    element.parentElement.querySelector("img").src=newsrc;
}

button.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount #amount");
    let amtval=amount.value
    if(amtval ==""|| amtval<1) {
        amtval=1;
        amount.value="1";
    }
    let selects=document.querySelectorAll("select");
    let from=selects[0].value.toLowerCase();
    let to=selects[1].value.toLowerCase();
    let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
    let data=await response.json();
    console.log(data[from][to]);
    // console.log(data["inr"]);
})

const func = async()=>{
    let response = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json");
    let data = await response.json();
    console.log(data["eur"]["inr"]);
};


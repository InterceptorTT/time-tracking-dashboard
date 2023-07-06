const options = document.querySelectorAll("ul a li");
const subcard = document.querySelectorAll(".subcard");
const dati = document.querySelectorAll(".data");
const prevDati = document.querySelectorAll(".prev-data");


fetch("/data.json")
.then(res => res.json())
.then((data) => {

    for(let i = 0; i < options.length; i++){
        
        options[i].addEventListener("click", (e) => {
            e.preventDefault();

            for(let j = 0; j < subcard.length; j++){
                switch(options[i].innerHTML){

                    case "Daily": 
                    dati[j].innerHTML = `${data[j].timeframes.daily.current}hrs`;
                    prevDati[j].innerHTML = `Previous day - ${data[j].timeframes.daily.previous}hrs`;
                    break;

                    case "Weekly":
                        dati[j].innerHTML = `${data[j].timeframes.weekly.current}hrs`;
                        prevDati[j].innerHTML = `Last week - ${data[j].timeframes.weekly.previous}hrs`;
                    break;

                    case "Monthly":
                        dati[j].innerHTML = `${data[j].timeframes.monthly.current}hrs`;
                        prevDati[j].innerHTML = `Last month - ${data[j].timeframes.monthly.previous}hrs`;
                    break;
                }
            }
        })
    }
})
import { getEnabledCategories } from "trace_events"

const $ = (name) => document.querySelector(name)
const inputName = $("#input-name")
const btnCreate = $("#btn-create")
const data ={}

inputName.onkeyup = function (event) {
    console.log()
    data.name = event.target.value
}

async function getCategories(){
    try{
        const response = await fetch("http://localhost:3000/api/category");
        const result = await response.json()
        result.data.forEach(element => {
            
        });
        
        console.log(result)
    }catch(error){
        console.log(error)
    }
}

btnCreate.onclick = async function(){
    try{
        const response = await fetch("http://localhost:3000/api/category",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json()
        console.log(result)

        inputName.value=""
    }catch(error){
        console.log(error)
    }
}
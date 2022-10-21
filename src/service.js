async function get (url) {
    try {
        const response = await fetch(url);
        const { data } = await response.json();
    }catch(error){
        console.log(error)
    }
}

async function post(url,data){
    try{
        const response = await fetch(url,
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
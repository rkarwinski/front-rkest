
export const  submitParameterAction = (data) => {
    //após estudo fazer um arquivo de config
    let url = 'http://localhost:8000/api/parameter';

    fetch(url, {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(response => response.json())
    .then(json => {console.log(json)})
}


export const  getParametersAction = () => {
    //após estudo fazer um arquivo de config
    let url = 'http://localhost:8000/api/parameters';

    fetch(url, {
        method:"GET",
        headers: {},
        body:{}
    }).then(response => response.json())
    .then(json => {return json})
}
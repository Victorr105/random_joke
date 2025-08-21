fetch (`https://official-joke-api.appspot.com/random_joke`)
.then(response=>response.json()) // fetching the entire api body in key value pairs
.then (data=>{
    // for fetching 
    console.log(data.setup)
    console.log(data.punchline)
})

.catch (error =>console.log (error))

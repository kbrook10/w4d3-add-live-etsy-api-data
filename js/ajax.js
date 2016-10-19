//http://swapi.co/api/planets/1/ --> Place this in a comment to remember what we are connecting to...


//Beginning of AJAX lesson
//<------------------------>


//Hard Old way for the API
//<------------------------>
// var starwarsPlanets = new XMLHttpRequest() // -->This is making clone of object
// starwarsPlanets.addEventListener('load', planetListener)
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/') //This is what we want to connect to
// starwarsPlanets.send() //This is what actually sends off the request
//
// var starwarsPlanets = new XMLHttpRequest() // -->This is making clone of object
// starwarsPlanets.addEventListener('load', planetListener)
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/?page=2') //This is what we want to connect to
// starwarsPlanets.send() //This is what actually sends off the request

// //Create function
// function planetListener(){
//     // console.log(JSON.parse(this.responseText)) // --> JSON is special object in JS that handles JSON data into a real variable/ array/ or object
//     var planets = JSON.parse(this.responseText)
//     // console.log(planets.results[2])
//     listPlanets(planets.results)
// }

//Easy/ New way for the API fetch
//<------------------------>
fetch('http://swapi.co/api/planets/') // ---> This one line equates to all the XMLHttpRequest info. (e.g means we promise to get back with us when we are done...)
    .then(response => response.json()) // --> Then do this (e.g. take raw response and parse into JSON)
    .then(response => listPlanets(response.results)) // --> Then do this (e.g. take the parse JSON and pass into listPlanets)

fetch('http://swapi.co/api/planets/1/')
    .then(response => response.json())
    .then(response => listPlanet(response))

//This is the function to create an unordered list with list items that are planets
    function listPlanet(planet){
        // console.log(planet)
        var list = document.createElement('ul')
        var planetName = document.createElement('li')
        planetName.innerHTML = planet.name
        list.appendChild(planetName)
        var planetGravity = document.createElement('li')
        planetGravity.innerHTML = planet.gravity
        list.appendChild(planetGravity)
        var planetPopulation = document.createElement('li')
        planetPopulation.innerHTML = planet.population
        list.appendChild(planetPopulation)

        document.querySelector('body').appendChild(list)
    }
//This is the long way to type out the code above...
    // .then(function(response){
    //     return response.json()
    // })
    // .then(function(responseJson){
    //     listPlanets(responseJson)
    // })
//<---------------------->

//Create function to list planets
function listPlanets(planetsArray){
    // console.log('This comes after the first one.')
    planetsArray.forEach(function(planet){
        var planetTitle = document.createElement('h4')
        planetTitle.innerHTML = planet.name

        document.querySelector('body').appendChild(planetTitle)
    })
}
// console.log('This comes first.')



//End of AJAX lesson
//<------------------------>

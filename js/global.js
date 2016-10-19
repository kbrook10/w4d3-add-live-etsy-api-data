//Retry the code 10.19.2016 from 10.18.2016 Homework assignment
//<-----------------------Template for the HTML Card------------------------>

/* <div class="col-sm-3">
<div class="card">
<img src="http://unsplash.it/200?random" alt="random image">
<h6>Title of thing goes here and it's a long title with a lot of words.</h6><br>
<div class="cardTextBox">
<div class="row cardText">
<div class="col-xs-6 text-muted small">
<span>seller name</span>
</div>
<div class="col-xs-6 text-right text-success small">
<span>$75.00</span>
</div>
</div>
</div>
</div>
</div> */
//<-----------------------Template for the HTML Card------------------------>
var searchTerms = 'boardgames'
fetchEtsy()
//Create listener event for search bar

//ID for the button to find on the HTML
document.querySelector('#searchButton').addEventListener('click', searchClick)
//ID for the search input on the HTML
document.querySelector('#hr-nav-searchFor').addEventListener('keypress', searchKey)

//Create the search function to do an action when search is pressed
function searchClick(){
  searchTerms = document.querySelector('#hr-nav-searchFor').value
  fetchEtsy()
  console.log(searchTerms)
}
function searchKey(){
  if(event.key === 'Enter'){
    searchTerms = document.querySelector('#hr-nav-searchFor').value
    fetchEtsy()
  }
}

//Create fetch to pull Etsy data with pictures
function fetchEtsy(e){
  fetch('https://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchTerms) + '&includes=Images,Shop'))
      .then(response => response.json())
      .then(response => response.results.forEach(function(item){
            vintageBoardGames(item)
          }))
      .then(
        document.getElementById('searchResults').innerHTML = ""
      )
}


    //This returns an object with various properties from the Etsy Webpage
    function vintageBoardGames(item){
      // console.log(item)
      var col = document.createElement('div')
      col.classList.add('col-sm-3')

      //Creates the card container
      var card = document.createElement('div')
      card.classList.add('card')
      col.appendChild(card)

      //Creates the tag for the image
      var img = document.createElement('img')
      // img.setAttribute('src', 'item.Images[0].url_170x135')
      img.src = item.Images[0].url_170x135
      card.appendChild(img)

      //Creates the header tag for the title
      var cardTitle = document.createElement('h6')
      cardTitle.innerHTML = item.title
      card.appendChild(cardTitle)

      //Creates the container for the text at the bottom of the card
      var cardTextBox = document.createElement('div')
      cardTextBox.classList.add('cardTextBox')
      card.appendChild(cardTextBox)

      //Creates the row for the container of the two columns at the bottom of the card
      var cardText = document.createElement('div')
      cardText.classList.add('cardText')
      cardTextBox.appendChild(cardText)

      //Creates the container for the seller information of the card on the left
      var cardColLeft = document.createElement('div')
      cardColLeft.className = 'col-xs-6 text-muted small'
      cardColLeft.innerHTML = item.Shop.shop_name
      cardTextBox.appendChild(cardColLeft)

      //Creates the container for the price information of the card on the right
      var cardColRight = document.createElement('div')
      cardColRight.className ='col-xs-6 text-right text-success small'
      cardColRight.innerHTML = item.price
      cardTextBox.appendChild(cardColRight)

      //Searches for the ID in the HTML and adds the card template function created
      document.querySelector('#searchResults').appendChild(col)
    }

//Creates a random number random price for objects from 0 to 100
function makeRandomPrice(){
  return '$' + Math.round((Math.random()*100)) + '.00'
}
//Create an array of objects to populate the page with...
// var items = [
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=1',
//     title: '01Vintage Board Game Art Wall Home Decor',
//     seller: '01franz66',
//     price: makeRandomPrice()
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=2',
//     title: '02Vintage Board Game Art Wall Home Decor',
//     seller: '02franz66',
//     price: makeRandomPrice()
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=3',
//     title: '03Vintage Board Game Art Wall Home Decor',
//     seller: '03franz66',
//     price: makeRandomPrice()
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=4',
//     title: '04Vintage Board Game Art Wall Home Decor',
//     seller: '04franz66',
//     price: makeRandomPrice()
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=5',
//     title: '05Vintage Board Game Art Wall Home Decor',
//     seller: '05franz66',
//     price: makeRandomPrice()
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=6',
//     title: '06Vintage Board Game Art Wall Home Decor',
//     seller: '06franz66',
//     price: makeRandomPrice()
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=7',
//     title: '07Vintage Board Game Art Wall Home Decor',
//     seller: '07franz66',
//     price: makeRandomPrice()
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=8',
//     title: '08Vintage Board Game Art Wall Home Decor',
//     seller: '08franz66',
//     price: makeRandomPrice()
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=9',
//     title: '09Vintage Board Game Art Wall Home Decor',
//     seller: '09franz66',
//     price: makeRandomPrice()
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=10',
//     title: '10Vintage Board Game Art Wall Home Decor',
//     seller: '10franz66',
//     price: makeRandomPrice()
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=11',
//     title: '11Vintage Board Game Art Wall Home Decor',
//     seller: '11franz66',
//     price: makeRandomPrice()
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=12',
//     title: '12Vintage Board Game Art Wall Home Decor',
//     seller: '12franz66',
//     price: makeRandomPrice()
//   },
// ]
//Create Function to generate 12 cards based on the 12 objects manually created

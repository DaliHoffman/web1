/* The following Script is used throughout the grid on the Wares page 
 It is used to populate the page with images, descriptions and a purchase button 
 The script also changes the images on hover and sets them back to the original once the mouse leaves the chosen image*/
 
const BASE_URL = "https://api.unsplash.com/";                 
const FILTERCOLOR = "content_filter=black_and_white";
const PORTRAIT = "portrait"
let wares = document.querySelector("#warespage");
let description = ["Beeswax Lotus Candle", "Teacup-shaped Beeswax", "Beeswax Tealight", "Beeswax Tealight Gift Set", "Hand-made Matcha Bowl", "Blue-Glazed Matcha Bowl", "Matcha whisk", "Local Honey", "White Porcelain Gaiwan Tea", "Celadon Gaiwan Tea", "Petit Teapot"];

//Three seperate Arrays used to change images on hover then put them back once the mouse leaves the image
let hovers = new Array();
let children = new Array();
let after = new Array();


// Fetching image Urls from the unsplash api, then adding descriptions on what is featured on the images.
//A button and a random price is also added to each image

fetch(`${BASE_URL}/search/photos?client_id=IW3Vq65vykO9B-bgkgHAJOXo_txwwK4qBs_sRjQPMR4&query=tea-leaves/${FILTERCOLOR}/high`)             
.then(response => response.json())     //Parsed using JSON
.then(d => {                            //then data is called
    d["results"].forEach((r, i) => {       //Data is an array so forEach through
      let teasimg = document.createElement("div");  //creates a
      teasimg.classList.add("tealight");
      teasimg.style.backgroundImage =  `url(${r["urls"]["regular"]})`;   
      after[i] = `url(${r["urls"]["regular"]})`;
      let product_title = document.createElement("div");
      product_title.innerHTML = description[i];
      product_title.classList.add("product_title");
      teasimg.append(product_title);
      let button = document.createElement("button")
      button.classList.add("buttonproducts");
      button.classList.add("topright");
      button.innerHTML = ("+    ADD");
      teasimg.append(button);
      price = document.createElement("p");
      price.classList.add("white");
      price.innerHTML = "$" +  Math.floor(Math.random() * 10) + 1; 
      teasimg.append(price);     
      wares.append(teasimg);
    });
    // Fetching images from the unsplash website, Then adding an event listener that the background image changes on hover, 
    //Another event listener is also added so that the image changes back to the original once the mouse leaves the image 
      fetch(`${BASE_URL}/search/photos?client_id=IW3Vq65vykO9B-bgkgHAJOXo_txwwK4qBs_sRjQPMR4&query=coffee/${FILTERCOLOR}`)              
      .then(response => response.json())                                                                                    
      .then(d => {                                                                                                          
        let children = wares.querySelectorAll(".tealight");
      d["results"].forEach((r, i) => {                                                                                      
          hovers[i] = `url(${r["urls"]["regular"]})`;
      });
      children.forEach((e, i) => {
          e.addEventListener("mouseover", function (event) {                                                                 
              children.forEach(e =>{
                  e.classList.remove("active")                                 
              });
              e.classList.add("active");
                  e.style.backgroundImage = hovers[i];                          
          });     
          e.addEventListener("mouseleave", function(event){        
              e.classList.remove("active");
              e.style.backgroundImage = after[i];
          }, false);
      });
  });
});


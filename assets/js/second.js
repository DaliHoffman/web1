const BASE_URL = "https://api.unsplash.com/";                 //Unsplasj api login
const FILTERCOLOR = "content_filter=black_and_white";
const PORTRAIT = "portrait"
let wares = document.querySelector("#warespage");
let description = ["Beeswax Lotus Candle", "Teacup-shaped Beeswax", "Beeswax Tealight", "Beeswax Tealight Gift Set", "Hand-made Matcha Bowl", "Blue-Glazed Matcha Bowl", "Matcha whisk", "Local Honey", "White Porcelain Gaiwan Tea", "Celadon Gaiwan Tea", "Petit Teapot"];

//Three seperate Arrays used to change images on hover then put them back once the mouse leaves the image
let hovers = new Array();
let children = new Array();
let after = new Array();



fetch(`${BASE_URL}/search/photos?client_id=IW3Vq65vykO9B-bgkgHAJOXo_txwwK4qBs_sRjQPMR4&query=tea-leaves/${FILTERCOLOR}/high`)              //Swallowtail Tea API request
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
      price.innerHTML = "$" +  Math.floor(Math.random() * 100) + 1; 
      teasimg.append(price);     
      wares.append(teasimg);
    });      
      fetch(`${BASE_URL}/search/photos?client_id=IW3Vq65vykO9B-bgkgHAJOXo_txwwK4qBs_sRjQPMR4&query=biscuits`)              //Swallowtail Tea API request
      .then(response => response.json())                                                                                    //Parsed using JSON
      .then(d => {                                                                                                          //then data is called
        let children = wares.querySelectorAll(".tealight");
      d["results"].forEach((r, i) => {                                                                                      //Data is an array so forEach through
          console.log(d);          
          hovers[i] = `url(${r["urls"]["regular"]})`;
      });
      console.log(children);      
      children.forEach((e, i) => {
          e.addEventListener("mouseover", function (event) {                                                                 // Checks if hovering over the code removes all of the active classes and adds it to the one  which has a hover
              children.forEach(e =>{
                  e.classList.remove("active")                                 
              });
              e.classList.add("active");
                  e.style.backgroundImage = hovers[i];            
              //}               
          });     
          e.addEventListener("mouseleave", function(event){        // Removes the mouse active class when the mouse isnt hovering over the text
              e.classList.remove("active");
              e.style.backgroundImage = after[i];
          }, false);
      });
  });
});


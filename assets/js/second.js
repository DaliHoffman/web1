const BASE_URL = "https://api.unsplash.com/";  //Unsplasj api login
const FILTERCOLOR = "content_filter=black_and_white";
const PORTRAIT = "portrait"
let wares = document.querySelector("#warespage");
let description = ["Beeswax Lotus Candle", "Teacup-shaped Beeswax Tealight", "Beeswax Tealight", "Beeswax Tealight Gift Set", "Hand-made Matcha Bowl", "Blue-Glazed Matcha Bowl", "Matcha whisk", "Local Honey", "White Porcelain Gaiwan Tea Service", "Celadon Gaiwan Tea Service", "Petit Teapot"];

fetch(`${BASE_URL}/search/photos?client_id=IW3Vq65vykO9B-bgkgHAJOXo_txwwK4qBs_sRjQPMR4&query=tea-leaves/${FILTERCOLOR}/high`)              //Swallowtail Tea API request
.then(response => response.json())     //Parsed using JSON
.then(d => {                            //then data is called
    d["results"].forEach((r, i) => {       //Data is an array so forEach through
      let teasimg = document.createElement("div");  //creates a
      teasimg.classList.add("tealight");
      teasimg.style.backgroundImage =  `url(${r["urls"]["regular"]})`;   
      

      let product_title = document.createElement("div");
      product_title.innerHTML = description[i];
      product_title.classList.add("product_title");
      teasimg.append(product_title);


      wares.append(teasimg);
    });      
    //wares.append(div);              //writes data to screen
});
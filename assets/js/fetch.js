/*const BASE_URL = "https://api.unsplash.com/";                               //Unsplash api login
let titles = ["Black", "Green", "White", "Tisanes", "Blends"];
let teabags = document.querySelector(".teabags");
console.log(teabags)

fetch(`${BASE_URL}/search/photos/?client_id=IW3Vq65vykO9B-bgkgHAJOXo_txwwK4qBs_sRjQPMR4&query=tea-leaves`)              //Swallowtail Tea API request
.then(response => response.json())     //Parsed using JSON
.then(d => { 
    let results = d["results"];
    results.splice(5);
    console.log(results);
    results.forEach((r, i) => {       //Data is an array so forEahc through
      let teasimg = document.createElement("div");  //creates a
      teasimg.style.backgroundImage =  `url(${r["urls"]["regular"]})` ;
       let teap = document.createElement("p");
       teap.innerHTML = titles[i];
       teap.classList.add("tealign");
      teasimg.append(teap);
       teabags.append(teasimg);     
    });
                        //writes data to screen
});
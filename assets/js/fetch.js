const BASE_URL = "https://api.unsplash.com/";  //Unsplasj api login
let titles = ["Black", "Green", "White", "Tisanes", "Blends"];
let ul = document.createElement("ul");

fetch(`${BASE_URL}/search/photos?client_id=IW3Vq65vykO9B-bgkgHAJOXo_txwwK4qBs_sRjQPMR4&query=tea-leaves`)              //Swallowtail Tea API request
.then(response => response.json())     //Parsed using JSON
.then(d => { 
    d.length = 5;                       //then data is called
    console.log(d["results"].forEach((r, i) => {       //Data is an array so forEahc through
      let teasimg = document.createElement("li");  //creates a
      
      teasimg.style.backgroundImage =  `url(${r["urls"]["regular"]})` ;
      
      let teap = document.createElement("p");
      teap.innerHTML = titles[i];
      teasimg.append(teap);
      ul.append(teasimg);
      
    }));
    document.querySelector(".teas").append(ul);                     //writes data to screen
});
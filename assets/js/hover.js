// let hovers = new Array();
// let children = new Array();

// fetch(`${BASE_URL}/search/photos?client_id=IW3Vq65vykO9B-bgkgHAJOXo_txwwK4qBs_sRjQPMR4&query=biscuits`)              //Swallowtail Tea API request
// .then(response => response.json())     //Parsed using JSON
// .then(d => {                            //then data is called
//     d["results"].forEach((r, i) => {       //Data is an array so forEach through
//         console.log(d);
//         children[i] = wares.children[i];
//         hovers[i] = `url(${r["urls"]["regular"]})`;
//     });
//     console.log(children);      
//     children.forEach((e, i) => {
//         e.addEventListener("mouseenter", function (event) {         // Checks if hovering over the code removes all of the active classes and adds it to the one  which has a hover
//             children.forEach(e =>{
//                 e.classList.remove("active")                                 
//             });
//             e.classList.add("active");
//             if (e.classList.contains("active")) {
//                 //e.remove();
//                 e.style.backgroundImage = `url(${hovers[i]})`; 
//                 console.log(hovers[i]);
//                 console.log(e);            
//             }               
//         });
    
//         e.addEventListener("mouseleave", function(event){        // Removes the mouse active class when the mouse isnt hovering over the text
//             e.classList.remove("active");
//         }, false);
//     });
// });











// stops.forEach((e, i) => {
//     e.addEventListener("mouseenter", function (event) {         // Checks if hovering over the code removes all of the active classes and adds it to the one  which has a hover
//         stops.forEach(e =>{
//             e.classList.remove("active")                                 
//         });
//         if (e.classList.contains("active") || e.classList.contains("overflow")) {
            
            
//         }
//         e.classList.add("active");               
//     });

//     e.addEventListener("mouseleave", function(event){        // Removes the mouse active class when the mouse isnt hovering over the text
//         e.classList.remove("active");
//     }, false);
// });
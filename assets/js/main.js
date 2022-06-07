startImageTransition();

    function startImageTransition() {
 
        let images = document.getElementsByClassName("test");   // Selects the classes named test and assigns them to images

        let top = -100; 
        // Set opacity of all images to 1
        for (let i = 0; i < images.length; ++i) {          
            images[i].style.opacity = 1;           
        }
 
        console.log(images[0]);
        console.log(images[1]);
        console.log(images[2]);

        let stops = document.querySelectorAll("li .overflow");
 
 
        let cur = images.length - 1;

        console.log(stops[0]);
        console.log(stops[1]);
        console.log(stops[2]);
        // stops.forEach((e, i) => {
        //     e.addEventListener("mouseenter", function (event) {         // Checks if hovering over the code removes all of the active classes and adds it to the one  which has a hover
        //         stops.forEach(e =>{
        //             e.classList.remove("active")                                 
        //         });
        //         if (e.classList.contains("active") || e.classList.contains("overflow")) {
        //             console.log("hello");
        //             images[nextImage] = images[0];
        //         }
        //         e.classList.add("active");               
        //     });

        //     e.addEventListener("mouseleave", function(event){        // Removes the mouse active class when the mouse isnt hovering over the text
        //         e.classList.remove("active");
        //     }, false);
        // });
 
        setInterval(changeImage, 5000);     // Waits 5 seconds, then initiates the changeImage function
 
        async function changeImage() {
           
            top = top + 1;
            let nextImage = (1 + cur) % images.length;

            images[cur].style.zIndex = top + 20;
            images[nextImage].style.zIndex = top;
            

            await transition();
            images[cur].style.zIndex = top;
 
            images[nextImage].style.zIndex = top + 20;          
 
            images[cur].style.opacity = 1;

            cur = nextImage;

            if (top > -40) {  //resets Z-Index to keep the background image in the back of the screen
                top = -100;
            }


            stops.forEach((e, i) => {
                e.addEventListener("mouseenter", function (event) {         // Checks if hovering over the code removes all of the active classes and adds it to the one  which has a hover
                    stops.forEach(e =>{
                        e.classList.remove("active")                                 
                    });
                    if (e.classList.contains("active") || e.classList.contains("overflow")) {
                        console.log("hello");
                        images[cur] = images[0];
                        
                    }
                    e.classList.add("active");               
                });
    
                e.addEventListener("mouseleave", function(event){        // Removes the mouse active class when the mouse isnt hovering over the text
                    e.classList.remove("active");
                }, false);
            });

            // console.log(stops[0]);
            // console.log(stops[1]);
            // console.log(stops[2]);
            // console.log(images[cur]);
            // console.log(images[0]);
            // console.log(images[1]);
            // console.log(images[2]);
        }
 
        // let stops = document.querySelectorAll("li .overflow");

        // console.log(stops);
        // stops.forEach((e, i) => {
        //     e.addEventListener("mouseenter", function (event) {         // Checks if hovering over the code removes all of the active classes and adds it to the one  which has a hover
        //         stops.forEach(e =>{
        //             e.classList.remove("active")
  
        //         });
        //         e.classList.add("active");
        //         console.log(e);
        //     });

        //     e.addEventListener("mouseleave", function(event){        // Removes the mouse active class when the mouse isnt hovering over the text
        //         e.classList.remove("active");
        //     }, false);
        // });

       /* $(".test").hover(
            function() {
                $(this).addClass('hovered');
            }, function() {
                if(!$(this).hasClass('clicked') ){
                    $(this).removeClass('hovered');
                }
            }
        );*/


        function transition() {
            return new Promise(function (resolve, reject) {

                let del = 0.01;
 
                let id = setInterval(changeOpacity, 10);
 
                function changeOpacity() {
                    images[cur].style.opacity -= del;
                    if (images[cur].style.opacity <= 0) {
                        clearInterval(id);
                        resolve();
                    }
                }
            });
        }
    }

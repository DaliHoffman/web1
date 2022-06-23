//Assortment of functions used to run through an array of images at an interval of 5 seconds changing the background image on the Homepage
//This is done by changing the z-index of the image , then changing to it as needed
startImageTransition();

    function startImageTransition() {
 
        const images = document.getElementsByClassName("test");   // Selects the classes named test and assigns them to images
        const stops = document.querySelectorAll("li .overflow");

        //To be used to initialize the z-index of the slideshow
        let top = -100; 
        // Set opacity of all images to 1
        for (let i = 0; i < images.length; ++i) {          
            images[i].style.opacity = 1;           
        }


 
 
        let cur = images.length - 1;

        setInterval(changeImage, 5000);     // Waits 5 seconds, then initiates the changeImage function
        //Function used to change the z-index on the upcoming image throughout the array
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


            //Function used to create a nice transition between images
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
    }

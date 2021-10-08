const baseUrl = "https://organicflowerpower.org/wp-json/wp/v2/posts?_embed&per_page=18";
const latestPostContainer = document.querySelector(".latestPosts-container");
const rightButton = document.getElementById("right");
const leftButton = document.getElementById("left");





async function latestPosts() {
    try {
        const response = await fetch(baseUrl);

        const data = await response.json();

        console.log(data);

        const posts = data;


        for (let i = 0; i < posts.length; i++) {

            if (i === 10) {
                break;
            }


            
            latestPostContainer.innerHTML += ` <a  href="spesificblogpost.html?id=${posts[i].id}">
            <div id="div" class="slider-post"> 
            <h2>${posts[i].title.rendered}</h2>
            <img alt="${posts[i]._embedded[`wp:featuredmedia`][`0`].alt_text}" src="${posts[i]._embedded[`wp:featuredmedia`][`0`].source_url}" >
            </div>
            </a>`;

            rightButton.onclick = function () {
                    document.getElementById("container").scrollLeft += 300;
                    console.log();
                };
               
           
            
            leftButton.onclick = function () {
                document.getElementById("container").scrollLeft -= 300;
            };
            
    
        }
    } catch (error) {
        latestPostContainer.innerHTML ="error";
    }
}


latestPosts();










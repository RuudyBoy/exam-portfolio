const baseUrl = "https://organicflowerpower.org/wp-json/wp/v2/posts?_embed&per_page=18";
const postContainer = document.querySelector(".blogposts");
const moreButton = document.getElementById("showMore");

console.log(baseUrl);


async function getPosts() {
    try {
        const response = await fetch(baseUrl);

        const data = await response.json();

        console.log(data);

        const posts = data;


        for (let i = 0; i < posts.length; i++) {

            
            if (i === 9) {
                break;
            } 
    
            postContainer.innerHTML += ` 
            <div class="post"> 
            <h2>${posts[i].title.rendered}</h2> 
            <img  alt="${posts[i]._embedded[`wp:featuredmedia`][`0`].alt_text}" src="${posts[i]._embedded[`wp:featuredmedia`][`0`].source_url}" data-modal/>
            <a class="readMore" href="spesificblogpost.html?id=${posts[i].id}"> Read blog </a> </div>`;


            document.querySelectorAll("img[data-modal]").forEach((img) => {
                var modal = document.createElement("div"); 
                modal.className = "image-modal";
                modal.appendChild(new Image()).src = img.src; 
                img.insertAdjacentElement("afterend", modal); 
                img.addEventListener("click", () => { 
                  modal.style.zIndex = "100";
                  modal.style.opacity = "5";
                  document.documentElement.style.overflow = "hidden"; 
                });
    
                modal.addEventListener("click", () => { 
                  modal.style.zIndex = "";
                  modal.style.opacity = "";
                  document.documentElement.style.overflow = "";
                });
              });

              
  
        }
    } catch (error) {
    postContainer.innerHTML ="";
    }
}



getPosts();


 moreButton.onclick = async function getPosts() {
    try {
        const response = await fetch(baseUrl);

        const data = await response.json();

        console.log(data);

        const posts = data;


        for (let i = 9; i < posts.length; i++) {

            
            if (i === 18) {
                break;
            } 
    
            postContainer.innerHTML += ` 
            <div class="post"> 
            <h2>${posts[i].title.rendered}</h2> 
            <img alt="${posts[i]._embedded[`wp:featuredmedia`][`0`].alt_text}" src="${posts[i]._embedded[`wp:featuredmedia`][`0`].source_url}" data-modal/>
            <a class="readMore" href="spesificblogpost.html?id=${posts[i].id}"> Read blog </a> </div>`;

            document.querySelectorAll("img[data-modal]").forEach((img) => {
                var modal = document.createElement("div"); 
                modal.className = "image-modal";
                modal.appendChild(new Image()).src = img.src; 
                img.insertAdjacentElement("afterend", modal); 
                img.addEventListener("click", () => { 
                  modal.style.zIndex = "100";
                  modal.style.opacity = "5";
                  document.documentElement.style.overflow = "hidden"; 
                });
    
                modal.addEventListener("click", () => { 
                  modal.style.zIndex = "";
                  modal.style.opacity = "";
                  document.documentElement.style.overflow = "";
                });
              });

  
        }
    } catch (error) {
    postContainer.innerHTML ="";
    }
} 
 


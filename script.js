const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    // populer move
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    // SeachMove
    const movie=document.querySelector("#movie-box");
    const  getMovie = async (api) => {
       const response= await fetch(api)
     const data=await response.json()
        showData(data.results)
       
    }
    const showData = (data)=>{
        movie.innerHTML=" "
        data.forEach((Item) => {
            console.log(Item)
            const box=document.createElement("div");
            box.classList.add('box')
            box.innerHTML =`
            <img src="${IMGPATH+Item.poster_path}" alt="" />
          <div class="overlay">
            <div class="title">
                <h2>${Item.title
                }</h2>
                <span>${Item.vote_average
                }</span>
            </div>
            <h3>Overlay:</h3>
            <p>${Item.overview}
            </p>

          </div>
            `;
            movie.appendChild(box)
        });
        console.log(data);
    }

    document.querySelector('#search').addEventListener("keyup",function(event){
        if(event.target.value !=" "){
            getMovie(SEARCHAPI+event.target.value)

        }
        else{
            getMovie(APIURL);
        }
        
    })
    getMovie(APIURL);


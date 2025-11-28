let container=document.querySelector("#grid")
let searchValue=document.querySelector("#search")
let buttonValue=document.querySelector("#inputvalue")
let val=document.querySelector("#show")
async function getdata(da){

    container.innerHTML="<p style='text-align:center;color:white'>Loading movies..</p>"
    try{
        
       const response=await fetch(`https://www.omdbapi.com/?s=${da}&apikey=49da69f5`)
       const data= await response.json()
       
      if(data){
        display(data)
      }else{
        val.innerHTML="No Movie found"
    }
    }catch(error){
      container.innerHTML="<p style='text-align:center;color:white,margin-top:60px;'>No movie found</p>"
    }
}


function display(movies){
    let output=""
    movies.Search.forEach((movie)=>{
        output+=`
        <div class="cards">

        <img src="${movie.Poster}"/>
      
        <p>${movie.Title}</p>
       

        <p>${movie.Year}</p>

        </div>
        `
    })

  container.innerHTML=output
    
}  


searchValue.addEventListener("change",()=>{
    let searchValues=searchValue.value.trim()
    if(searchValues){
        getdata(searchValues)
    }
})

buttonValue.addEventListener("click",()=>{
    let btnvalue=searchValue.value.trim()
    if(btnvalue){
        getdata(btnvalue)
    }
})

getdata("avengers")

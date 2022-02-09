const contVideos = document.getElementById('contVideos')

// Funcion de obtener datos
async function getVideos (){
    try {
        const resp = await fetch('http://localhost:4000/videos');
        const data = await resp.json()
        return data
    }catch (error){
        return console.log(error);
    }
}

// Funcion mostrar videos
async function pintarVideos() {
    const data = await getVideos()
    data.forEach((video)=> {
        const { name, publisher, views, date, poster } = video;

        contVideos.innerHTML +=`
        <div class="contVideo">
                <img class="imgPortada" src="${poster}" alt="...">
                <!-- <p class="textMinutos">13:55</p> -->
                <div class="contInfo">
                    <img class="avatar" src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="...">
                    <div class="contDescripcion">
                        <h2 class="titleVideo">${name}</h2>
                        <h4 class="titleAutor">${publisher}</h4>
                        <h4 class="views">${views} vistas - ${date}</h4>
                    </div>
                </div>
            </div>
        `
    })
}

pintarVideos()
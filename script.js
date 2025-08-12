function toggleMode() {
   
    const html= document.documentElement
    html.classList.toggle('light')


//pegar a tag img
    const img = document.querySelector("#profile img")


//susbstituir a img
  if (html.classList.contains('light')) {
    //se tiver light mode,adicionar a imagem light
    img.setAttribute('src','./assets/avatar-light.png' )
     

     
        
   } else {
      //se tiver sem light mode,add a img normal
      img.setAttribute('src','./assets/avatar.png')

      

        }    
     

      
      //se tiver light mode,adicionar a imagem light
      //se tiver sem light mode,add a img normal
      //susbstituir a img
    }

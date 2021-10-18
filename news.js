let info = JSON.parse(localStorage.getItem('pnews'));


let world = document.getElementById('world')

function appendnews(v){

   

            let div = document.createElement('div'); div.setAttribute('id','random')

            let p1 = document.createElement('p'); p1.setAttribute('id','p1')
            p1.innerHTML = v.title;

            let p2 = document.createElement('p'); p2.setAttribute('id','p2')
            p2.innerHTML = v.content;

            let img = document.createElement('img'); img.setAttribute('id','image')
            img.src = v.urlToImage;

            
    
            div.append(p1,p2,img);
            world.append(div);

      
}
appendnews(info);
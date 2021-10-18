async function homenews(){
    let res = await fetch('https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=5714e8f575374c11832a9509c56a1cc9');
    let data = await res.json();

    console.log(data);
    appendnews(data.articles)
    
}
homenews();


let world = document.getElementById('world')
function appendnews(info){

    info.forEach((v) => {

            let div = document.createElement('div'); div.setAttribute('id','random')

            let p1 = document.createElement('p'); p1.setAttribute('id','p1')
            p1.innerHTML = v.title;

            let p2 = document.createElement('p'); p2.setAttribute('id','p2')
            p2.innerHTML = v.content;

            let img = document.createElement('img'); img.setAttribute('id','image')
            img.src = v.urlToImage;

            let authorname = document.createElement('p'); authorname.setAttribute('id','an');
            authorname.innerHTML = v.author;

            let publish = document.createElement('p'); publish.setAttribute('id','publish')
            publish.innerHTML = v.publishedAt;

            let pdiv = document.createElement('div');  pdiv.setAttribute('id','pdiv');
            pdiv.append(p1,authorname,publish);

            div.onclick = function(){
                particular(v)
            }
    
            div.append(pdiv,p2,img);
            world.append(div);

        })
}




function particular(p){
localStorage.setItem('pnews',JSON.stringify(p));
window.location.href = "news.html"
}



async function search(){

    let d = document.getElementById('detail').value;

    let res = await fetch(`https://newsapi.org/v2/everything?q=${d}&apiKey=5714e8f575374c11832a9509c56a1cc9`);
    let sdata = await res.json();

    console.log(sdata);

    let ssdata = sdata.articles

    localStorage.setItem('snews',JSON.stringify(ssdata));

    window.location.href = "search.html"
}




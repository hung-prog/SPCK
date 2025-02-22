
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let trending = document.getElementById("trending")
let div = document.createElement('div')
fetch(`https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.items.map((dataItem) => {
          div.style.display = 'flex'
          let table = document.createElement('div')
          table.classList.add('table')
          let image = document.createElement('div')
          image.classList.add('div')
          let poster = document.createElement('a')
          poster.classList.add('a')
          let card1 = document.createElement('img')
          card1.classList.add('card1')
          card1.src = dataItem.poster_url
          let content = document.createElement('div')
          content.classList.add('div')
          let content1=document.createElement('a')
          content1.classList.add('a')
          let p=document.createElement('p')
          p.classList.add('p')
          poster.appendChild(card1)
          image.appendChild(poster)
          table.appendChild(image)
          content.appendChild(content1)
          content.appendChild(p)
          table.appendChild(content)
          div.appendChild(table)
          trending.appendChild(div)
        })
    })

    // <table class="table">
    //   <div class="image">
    //     <a class="poster" href="">
    //       <img class="card1" src="https://media.themoviedb.org/t/p/w220_and_h330_face/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg"
    //         alt="">
    //     </a>
    //   </div>
    //   <div class="content">
    //     <a class="content1" href="">
    //       Level Alone
    //     </a>
    //     <p>Jan 07, 2024</p>
    //   </div>
    // </table>
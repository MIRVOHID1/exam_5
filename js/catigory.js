// function blog() {

    const btn = document.querySelector('.navbar__add__btn');
    const menu = document.querySelector('.navbar__menu');
    const remove__btn = document.querySelector('.navbar__remove__btn');
    const input = document.querySelector('.wrapinput__input');
    const card = document.querySelector('.card');

    btn.addEventListener('click', () => {
        menu.classList.add('show');
        remove__btn.style.display = 'block'
        btn.style.display = 'none'

    });
    remove__btn.addEventListener('click', () => {
        menu.classList.remove('show');
        remove__btn.style.display = 'none'
        btn.style.display = 'block'

    })

//     const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-09-26&sortBy=publishedAt&apiKey=02d816bcbb5647e49628f22852207df4'

//     async function getData(url) {
//         try {
//             const response = await fetch(url);
//             const result = await response.json();
//             console.log(result.articles);
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     getData(url)

//     function newCard(dataPost) {
//         card.innerHTML = "";
//         dataPost.slice(0, 4).forEach((element) => {
//             card.innerHTML += `<div class="allNews">
//            <img src="${element.urlToImage}"> 
//            <div class="allNewsTitle"><h4>${element.title}</h4>
//            <p>${element.description}</p>
//            <div class="data_one">${element.publishedAt.slice(0, 10)}</div></div>
//            </div>`
//         })
//     }

//     newCard(dataPost)

//     function search() {
//         let foundTitle = [];
//         foundTitle = news.filter((i) =>
//             i.title.toLowerCase().startsWith(input.value.toLowerCase()))
//         newCard(foundTitle)
//     }

//     search()

//     input.addEventListener('input', () => {
//         search()
//     })


// }

// blog()
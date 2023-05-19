let news = [];
let menu = document.querySelectorAll(".menu button");
menu.forEach(menu=>menu.addEventListener("click",(e)=>getNewsByTopic(e)))
let searchButton = document.querySelector("#submit");

const getLatestNews = async () => {
  let url = new URL(
    "https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10"
  );
  let header = new Headers({'x-api-key': 'DKqrztgDGZs5yQzjGpKGQF3XkXWVAAmBTwQdJmnmlXI'});
  let response = await fetch(url, { headers: header });
  let data = await response.json();
  news = data.articles;
  render();
};

const getNewsByTopic = async e =>{
  let topic = e.target.innerHTML.toLowerCase();
  let url = new URL(
  `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${topic}&page_size=10`
  ); 
  let header = new Headers({'x-api-key': 'DKqrztgDGZs5yQzjGpKGQF3XkXWVAAmBTwQdJmnmlXI'});
  let response = await fetch(url, { headers: header });
  let data = await response.json();
  news = data.articles;
  render();
}

const render = () => {
  let newsHTML = news.map(item=>{
    return `<div class="row news">
  <div class="col-lg-4">
    <img class="news-img-size" src="${item.media}">
  </div>
    <div class="col-lg-8">
    <h2>${item.title}</h2>
    <p>
    ${item.summary}
    </p>
    <div>
    ${item.rights} * ${item.published_date}
    </div>
  </div>
</div> `
  }).join('');

  document.getElementById("news-board").innerHTML = newsHTML;
};

const doSearch = async ()=>{
  let keyword = document.getElementById("keyword").value;
  console.log(keyword);
  let url = new URL(
    `https://api.newscatcherapi.com/v2/search?q=${keyword}&countries=KR&page_size=10`
  );
  let header = new Headers({'x-api-key': 'DKqrztgDGZs5yQzjGpKGQF3XkXWVAAmBTwQdJmnmlXI'});
  let response = await fetch(url, { headers : header });
  let data = await response.json();
  news = data.articles;
  render();
    
}
searchButton.addEventListener("click", e=>{doSearch()});
getLatestNews();



console.log(Math.random());
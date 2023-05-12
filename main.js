let news = [];

const getLatestNews = async ()=>{
 let url = new URL("https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=5");
 //let header = new Headers({'x-api-key': 'DKqrztgDGZs5yQzjGpKGQF3XkXWVAAmBTwQdJmnmlXI'});
 let response = await fetch(url,{headers: header});
 let data = await response.json();
 news = data.articles;
 render();
};

const render=()=>{
 let newsHTML = news.map(news=>{
  return `<div class="row news">
  <div class="col-lg-4">
    <img src="https://imgnews.pstatic.net/image/032/2023/05/12/0003223182_001_20230512215001114.jpg?type=w647" class="news-img-size">
  </div>
   <div class="col-lg-8">
    <h2>사자짱/h2>
    <p>
    아시아의 호랑이와 함께 대형 고양이족 가운데 최대의 맹수로서 '백수(百獸)의 왕(王)'으로 불린다. 표범, 재규어, 호랑이와 근연속(Panthera)이다. 수컷 사자와 암컷 호랑이가 교배하여 태어난 종을 라이거(liger), 수컷 호랑이와 암컷 사자가 교배하여 태어난 종을 범사자[tigon], 수컷 표범과 암컷 사자가 교배한 것을 레오폰(leopon), 수컷 재규어와 암컷 사자가 교배시에는 재그라이온(jaglion)이라 한다.    
    </p>
    <div>
     오경민 기자 5km@kyunghyang.com
    </div>
  </div>
</div>`
 });
 


 document.getElementById("news-board").innerHTML = newsHTML;
}

getLatestNews();
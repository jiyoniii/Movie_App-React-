function Food({ foodname, picture }) {
  return <div>
    <h1> I Like  {foodname}</h1>
    <img src={picture}></img>
  </div>
}



// 음식종류의 배열..
const foodILike = [
  {
    name: "김치",
    image: "https://newsimg.hankookilbo.com/cms/articlerelease/2020/04/23/202004231500779914_1.jpg"
  },
  {
    name: "불고기",
    image: "http://image.auction.co.kr/itemimage/1f/49/bf/1f49bfd5b6.jpg"
  },
  {
    name: "감자",
    image: "http://image.gsshop.com/image/66/85/66853074_L1.jpg"
  },
  {
    name: "맛동산",
    image: "http://img.danawa.com/prod_img/500000/868/071/img/3071868_1.jpg?shrink=500:500&_v=20190530113959"
  }

]



//dish는 object임. 여기서 object의 이름은 아무거나 정해도 노상관..
function App() {
  return (
    <div>
      {foodILike.map(dish => <Food foodname={dish.name} picture={dish.image} />)}
    </div>
  )
}

export default App;

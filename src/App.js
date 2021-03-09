import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return <div>
    <h1> I Like  {name}</h1>
    <h4>점수는 {rating} 점!</h4>
    <img src={picture}></img>
  </div>
}

//propTypes를 활용해보기.
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}


// 음식종류의 배열..
const foodILike = [
  {
    id: 1,
    name: "김치",
    image: "https://newsimg.hankookilbo.com/cms/articlerelease/2020/04/23/202004231500779914_1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "불고기",
    image: "http://image.auction.co.kr/itemimage/1f/49/bf/1f49bfd5b6.jpg",
    rating: 3
  },
  {
    id: 3,
    name: "감자",
    image: "http://image.gsshop.com/image/66/85/66853074_L1.jpg",
    rating: 3.5
  },
  {
    id: 4,
    name: "맛동산",
    image: "http://img.danawa.com/prod_img/500000/868/071/img/3071868_1.jpg?shrink=500:500&_v=20190530113959",
    rating: 4.4
  }

]

function renderFood(dish) {

  return <Food name={dish.name} picture={dish.image} />
}

//map은 array로 돌려줌. 아래 코드를 보면 { } 사이에 .map으로 작성이 되어있어서 위의 foodILike가 array로 보여지게 되는거임!
//dish는 object임. 여기서 object의 이름은 아무거나 정해도 노상관..
function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating} />
      ))}
    </div>
  )
}

export default App;

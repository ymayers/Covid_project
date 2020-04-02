import React from "react";
import { Route, Link } from "react-router-dom";


const Home = (props) => {
  return (
    <div key={props.idx}>
      <Link to="/details/:idx" className="country-link">
        {" "}
        {props.country}
      </Link>
     
    </div>

  );
}

export default Home;












// class Home extends Component {
//   render() {
//     let list = listOfCurrencies.map(item => {
//       return (
//         <div className="currency" key={item.currency}>
//           <p>
//             <Link to={"/price/" + item.currency}>{item.currency}</Link>:{" "}
//             {item.country}
//           </p>
//         </div>
//       );
//     });
//     return <div>{list}</div>;
//   }
// }

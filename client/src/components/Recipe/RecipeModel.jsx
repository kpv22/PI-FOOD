// import React from "react";
// import { Link } from "react-router-dom";
// import Style from "./RecipeModel.module.css";
// import { Loading } from "../Empty/Loading";

// export const RecipeModel = (props) => {
//   return props.name ? (
//     <div className={Style.card}>
//       <div key={props.id}>
//         <Link to={"/detail/" + props.id}>
//           <img className={Style.img} src={props.image} />
//         </Link>
//         <div className={Style.hidden}>
//           {" "}
//           <h2 className={Style.name}>{props.name}</h2>
//           <p>{props.healthScore}</p>
//           {/* <p>{props.summary}</p> */}
//           <ul className={Style.ul}>
//             {props.diets?.map((element, index) => (
//               <ol className={Style.ol} key={index}>
//                 {element}
//               </ol>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <Loading />
//   );
// };

import React from "react";
import { Link } from "react-router-dom";
import Style from "./RecipeModel.module.css";
import { Loading } from "../Empty/Loading";

export const RecipeModel = (props) => {
  return props.name ? (
    <div className={Style.card}>
      <img className={Style.image} src={props.image} alt="imagen" />
      <h2 className={Style.title}>{props.name}</h2>
      <div key={props.id} className={Style.cardbody}>
        <p className={Style.cardsubtitle}>{props.healthScore}</p>
        <ul className={Style.cardinfo}>
          {props.diets?.map((element, index) => (
            <ol className={Style.ol} key={index}>
              {element}
            </ol>
          ))}
        </ul>
        <Link to={"/detail/" + props.id}>
          <button className={Style.cardbtn}>learn more</button>
        </Link>{" "}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

// import React from "react";
// import * as actions from "../../redux/actions";
// import { useSelector, useDispatch } from "react-redux";
// import styles from "../Pagination/Pagination.module.css";
// import { DesAsc } from "../Side/Filter/OrderByName";
// import { HealthScore } from "../Side/Filter/HealthScore";

// export const Pagination = (props) => {
//   const { charactersPerPage, recipes } = props;
//   const dispatch = useDispatch();
//   const currentPage = useSelector((state) => state.currentPage);

//   let pages = [];

//   for (let i = 1; i <= Math.ceil(recipes / charactersPerPage); i++) {
//     pages.push(i);
//   }

//   return (
//     <div className={styles.container}>
//       {" "}
//       <h2>Sort by</h2>
//       <HealthScore />
//       <DesAsc />
//       <div className={styles.bar}>
//         {pages.map((page, index) => {
//           return (
//             <button
//               key={index}
//               onClick={() => dispatch(actions.change_page(page))}
//               className={styles.btn}
//             >
//               {page}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useEffect, useState } from "react";
import next from "../../assets/next-svgrepo-com.svg";
import prev from "../../assets/back-svgrepo-com.svg";
import styles from "./Pagination.module.css";
import { DesAsc } from "../Nav/Filters/OrderByName";
import { HealthScore } from "../Nav/Filters/HealthScore";
import { Created } from "../Nav/Filters/Created";

export default function Pagination({ totalPages }) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.currentPage);
  const [input, setInput] = useState(page);

  const nextPage = async () => {
    dispatch(actions.setPage(page + 1));
    setInput(page + 1);
  };
  const prevPage = () => {
    dispatch(actions.setPage(page - 1));
    setInput(page - 1);
  };
  useEffect(() => {
    setInput(page);
  }, [page]);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (
        parseInt(e.target.value) < 1 ||
        parseInt(e.target.value) > totalPages ||
        isNaN(parseInt(e.target.value))
      ) {
        dispatch(actions.setPage(1));
        setInput(1);
      } else {
        dispatch(actions.setPage(parseInt(e.target.value)));
        setInput(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={styles.container}>
      {/* <h2>Sort by</h2>
      <Created />
      <HealthScore />
      <DesAsc /> */}
      <div className={styles.wrapper}>
        <button disabled={input === 1} onClick={prevPage}>
          Prev
        </button>
        <input
          onKeyDown={onKeyDown}
          onChange={onChange}
          autoComplete="off"
          value={input}
        />
        <p>
          {page} to {totalPages}
        </p>
        <button disabled={input === totalPages} onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

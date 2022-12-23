// import { useDispatch, useSelector } from "react-redux";
// import * as actions from "../../redux/actions";
// import { useEffect, useState } from "react";
// import styles from "./Pagination.module.css";

// export default function Pagination({ totalPages }) {
//   const dispatch = useDispatch();
//   const page = useSelector((state) => state.currentPage);
//   const [input, setInput] = useState(page);

//   const nextPage = async () => {
//     dispatch(actions.setPage(page + 1));
//     setInput(page + 1);
//   };
//   const prevPage = () => {
//     dispatch(actions.setPage(page - 1));
//     setInput(page - 1);
//   };

//   const validate = (e) => {
//     if (e.keyCode === 13) {
//       if (
//         parseInt(e.target.value) < 1 ||
//         parseInt(e.target.value) > totalPages ||
//         isNaN(parseInt(e.target.value))
//       ) {
//         dispatch(actions.setPage(1));
//         setInput(1);
//       } else {
//         dispatch(actions.setPage(parseInt(e.target.value)));
//         setInput(parseInt(e.target.value));
//       }
//     }
//   };

//   const onChange = (e) => {
//     setInput(e.target.value);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <button disabled={input === 1} onClick={prevPage}>
//           Prev
//         </button>
//         <input
//           validate={validate}
//           onChange={onChange}
//           autoComplete="off"
//           value={input}
//         />
//         <p>
//           {page} to {totalPages}
//         </p>
//         <button disabled={input === totalPages} onClick={nextPage}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useEffect, useState } from "react";
import styles from "./Pagination.module.css";

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

  const validate = (e) => {
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
      <div className={styles.wrapper}>
        <button
          className={styles.btn}
          disabled={input === 1}
          onClick={prevPage}
        >
          Prev
        </button>
        <input
          onKeyDown={validate}
          onChange={onChange}
          autoComplete="off"
          value={input}
        />
        <p>
          {page} to {totalPages}
        </p>
        <button
          className={styles.btn}
          disabled={input === totalPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

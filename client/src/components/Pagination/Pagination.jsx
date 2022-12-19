import React from "react";
import * as actions from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import styles from "../Pagination/Pagination.module.css";
import { DesAsc } from "../Side/Filter/OrderByName";
import { HealthScore } from "../Side/Filter/HealthScore";

export const Pagination = (props) => {
  const { charactersPerPage, recipes } = props;
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);

  let pages = [];

  for (let i = 1; i <= Math.ceil(recipes / charactersPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.container}>
      {" "}
      <h2>Sort by</h2>
      <HealthScore />
      <DesAsc />
      <div className={styles.bar}>
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => dispatch(actions.change_page(page))}
              className={styles.btn}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

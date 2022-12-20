import React from "react";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";

export const Created = (props) => {
  const dispatch = useDispatch();
  // const [, setReloadUsers] = useState(false);

  const handleFilterByCreation = (e) => {
    e.preventDefault();
    dispatch(actions.filterRecipe(e.target.value));
    // setReloadUsers((prevState) => !prevState);
    dispatch(actions.setPage(1));
  };
  return (
    <p>
      <select onChange={(e) => handleFilterByCreation(e)}>
        <option value="all">Filter by origin</option>
        <option value="Created">Created</option>
        <option value="apiCreate">Api Create</option>
      </select>
    </p>
  );
};

export default Created;

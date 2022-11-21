import React, { useState } from "react";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const textChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
        setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };
  return (
    <>
      <form onSubmit={submitFormHandler}>
        <div className="form-control">
          <label htmlFor="course" style={{ color: !isValid ? "red" : "black" }}>
            Course :
          </label>
          <input
            style={{ borderColor: !isValid ? "red" : "black" }}
            type="text"
            value={enteredValue}
            onChange={textChangeHandler}
          />
        </div>
        <button type="submit">Add Goals</button>
      </form>
    </>
  );
};

export default CourseInput;

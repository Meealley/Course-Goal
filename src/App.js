import React, { useState } from "react";
import CourseInput from "./components/CourseGoal/CourseInput";
import CourseGoalList from "./components/CourseGoal/CourseGoalList";
import "./App.css";

const App = (props) => {
  const [courseGoal, setCourseGoal] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoal((prevGoal) => {
      const updatedGoals = [...prevGoal];
      updatedGoals.unshift({ text: enteredGoal, id: Math.random().toString() });
      return updatedGoals;
    });
  };
  const deleteHandler = (goalId) => {
    setCourseGoal((prevGoal) => {
      const updatedGoals = prevGoal.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  return (
    <>
      <div className="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
        <div className="goal">
          {courseGoal.length === 0 ? (
            <p style={{ textAlign: "center" }}>No goals. Add Goals</p>
          ) : (
            <CourseGoalList items={courseGoal} onDeleteItem={deleteHandler} />
          )}
        </div>
      </div>
    </>
  );
};

export default App;

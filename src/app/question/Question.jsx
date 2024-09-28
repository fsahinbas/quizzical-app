"use client";
import React from "react";
import styles from "./question.module.css";

const Question = (props) => {
  const { question, correct_answer, incorrect_answers } = props.question;
  const rndIndex = Math.floor(Math.random() * incorrect_answers.length - 1);

  if (incorrect_answers.length < 4) {
    incorrect_answers.splice(rndIndex, 0, correct_answer);
  }
  const answerElements = incorrect_answers.map((answer) => (
    <div className={styles.answer} key={answer}>
      <input
        type="radio"
        name={question}
        id={answer}
        value={answer}
        className={`${
          answer === correct_answer && props.isSubmitted ? styles.correct : ""
        } ${
          answer !== correct_answer && props.isSubmitted ? styles.wrong : ""
        }`}
        onChange={props.handleChecked}
      />
      <label htmlFor={answer}>{`${answer}`}</label>
    </div>
  ));
  return (
    <div className={styles.container}>
      <p className={styles.question}>{`${question}`}</p>
      <div className={styles.answers}>{answerElements}</div>
    </div>
  );
};

export default Question;

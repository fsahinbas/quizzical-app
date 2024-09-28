"use client";
import React from "react";
import styles from "./page.module.css";
import Question from "../question/Question";
const Page = () => {
  const [score, setScore] = React.useState(0);
  const [questions, setQuestions] = React.useState([]);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  const handleSubmit = (event) => {
    if (isSubmitted) {
      setScore(0);
      setIsSubmitted(false);
      return;
    }
    let score = 0;
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);

    for (let i = 0; i < questions.length; i++) {
      if (result[questions[i].question] === questions[i].correct_answer) {
        score++;
      }
    }
    setScore(score);
    setIsSubmitted(true);
  };

  const questionElements =
    questions &&
    questions.map((question) => (
      <Question
        isSubmitted={isSubmitted}
        key={question.question}
        question={question}
      />
    ));

  return (
    <main style={{ padding: "2rem 4rem" }}>
      <form onSubmit={handleSubmit}>
        {questionElements}
        <div className={styles.resultsWrapper}>
          {isSubmitted && (
            <p>
              You scored {score}/{questions.length} correct answers.
            </p>
          )}
          {questions && questions.length > 0 && (
            <button className={styles.btnCheck}>
              {isSubmitted ? "Play Again" : "Check answers"}
            </button>
          )}
        </div>
      </form>
    </main>
  );
};

export default Page;

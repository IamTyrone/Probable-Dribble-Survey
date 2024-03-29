import React from "react";
import Answers from "./answers";

type Props = {
  setAnswers3: any;
  setAnswers4: any;
  questions: any
};

export default function Tab2({ setAnswers3, setAnswers4, questions }: Props) {
  return (
    <>
      <div className="">
        <h5 className="info-text">{questions && questions[2]?.question}?</h5>
        <Answers setAnswers={setAnswers3} />
      </div>
      <br />
      <br />
      <br />
      <div className="">
        <h5 className="info-text">{questions && questions[3]?.question}?</h5>
        <Answers setAnswers={setAnswers4} />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

import React from "react";
import Answers from "./answers";

type Props = {
  setAnswers7: any;
  setAnswers8: any;
  questions: any
};

export default function Tab4({ setAnswers7, setAnswers8, questions }: Props) {
  return (
    <>
      <div className="">
        <h5 className="info-text">
          {questions && questions[6]?.question}?
        </h5>
        <Answers setAnswers={setAnswers7} />
      </div>
      <br />
      <br />
      <br />
      <div className="">
        <h5 className="info-text">
          {questions && questions[7]?.question}?
        </h5>
        <Answers setAnswers={setAnswers8} />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

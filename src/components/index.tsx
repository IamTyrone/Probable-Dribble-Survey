/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Tab1 from "./tab1";
import { Button, message, Steps } from "antd";
import Tab2 from "./tab2";
import Tab3 from "./tab3";
import "antd/dist/antd.css";
import Tab5 from "./tab5";
import Tab4 from "./tab4";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const { Step } = Steps;

export default function Main() {
  const [questions, setQuestions]: any = useState();
  const [current, setCurrent] = useState(0);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [searchParams] = useSearchParams();

  const steps = [
    {
      title: "First",
      content: <Tab1 setAnswers1={setAnswer1} setAnswers2={setAnswer2} questions={questions} />,
    },
    {
      title: "Second",
      content: <Tab2 setAnswers3={setAnswer3} setAnswers4={setAnswer4} questions={questions} />,
    },
    {
      title: "Third",
      content: <Tab3 setAnswers5={setAnswer5} setAnswers6={setAnswer6} questions={questions} />,
    },
    {
      title: "Fourth",
      content: <Tab4 setAnswers7={setAnswer7} setAnswers8={setAnswer8} questions={questions} />,
    },
    {
      title: "Last",
      content: <Tab5 setAnswers9={setAnswer9} setAnswers10={setAnswer10} questions={questions}/>,
    },
  ];

  const url = searchParams.get("url");

  useEffect(()=>{
    axios.get("http://localhost:8000/api/questionaires/").then((res) => {
      setQuestions(res.data)
    }).catch((err) => {
      message.error("Something went wrong. Please try again later!");
    })
  }, [])

  const onSubmitHandler = () => {
    const answers = [
      { answer: answer1 },
      { answer: answer2 },
      { answer: answer3 },
      { answer: answer4 },
      { answer: answer5 },
      { answer: answer6 },
      { answer: answer7 },
      { answer: answer8 },
      { answer: answer9 },
      { answer: answer10 },
    ];

    axios
      .post("http://localhost:8000/api/questionaires/", { website: url })
      .then((res) => {
        // eslint-disable-next-line array-callback-return
        answers.map((answer, key) => {
          axios.post(`http://localhost:8000/api/answers/`, {
            questionaire: res.data.id,
            rating: answer.answer,
            question: questions[key].id,
          });
        });
        message.success("Your review has been successfully submitted!");
      })
      .catch((err) => {
        message.error("Something went wrong. Please try again later!");
      });
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div
      className="image-container set-full-height"
      style={{ backgroundImage: "url('assets/img/paper-1.jpeg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="wizard-container">
              <div
                className="card wizard-card"
                data-color="orange"
                id="wizardProfile"
              >
                <form action="" method="">
                  {/* <!--        You can switch " data-color="orange" "  with one of the next bright colors: "blue", "green", "orange", "red", "azure"          --> */}

                  <div className="wizard-header text-center">
                    <h3 className="wizard-title">Create your profile</h3>
                    <p className="category">
                      This information will let us know more about you.
                    </p>
                  </div>
                  <div
                    className="wizard-navigation"
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <Steps current={current}>
                      {steps.map((item) => (
                        <Step key={item.title} title={item.title} />
                      ))}
                    </Steps>
                  </div>

                  <div className="tab-content">{steps[current].content}</div>
                  <div className="wizard-footer">
                    {current < steps.length - 1 && (
                      <Button type="primary" onClick={() => next()}>
                        Next
                      </Button>
                    )}
                    {current === steps.length - 1 && (
                      <Button type="primary" onClick={onSubmitHandler}>
                        Done
                      </Button>
                    )}
                    {current > 0 && (
                      <Button
                        style={{ margin: "0 8px" }}
                        onClick={() => prev()}
                      >
                        Previous
                      </Button>
                    )}
                    <div className="clearfix"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

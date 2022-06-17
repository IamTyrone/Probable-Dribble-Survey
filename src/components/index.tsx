/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Tab1 from "./tab1";
import { Button, message, Steps } from "antd";
import Tab2 from "./tab2";
import Tab3 from "./tab3";
import "antd/dist/antd.css";
import Tab5 from "./tab5";
import Tab4 from "./tab4";

type Props = {};

const { Step } = Steps;

const steps = [
  {
    title: "First",
    content: <Tab1 />,
  },
  {
    title: "Second",
    content: <Tab2 />,
  },
  {
    title: "Third",
    content: <Tab3 />,
  },
  {
    title: "Fourth",
    content: <Tab4 />,
  },
  {
    title: "Last",
    content: <Tab5 />,
  },
];

export default function Main({}: Props) {
  const [current, setCurrent] = useState(0);
  const [ratings, setRatings] = useState({});

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
                      <Button
                        type="primary"
                        onClick={() => message.success("Processing complete!")}
                      >
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

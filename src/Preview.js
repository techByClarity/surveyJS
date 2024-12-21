import React from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css"; // Retain core styles as a base
import "./index.css"; // Custom styles
import { formJSON } from "./survey";

const Preview = () => {
  // Create a new Survey model
  const surveyModel = new Model(formJSON);

  // Apply custom CSS
  surveyModel.css = {
    body: "childlike-form-body",
    header: "childlike-form-header",
    question: {
      mainRoot: "childlike-form-question",
      title: "childlike-form-title",
      input: "childlike-form-input",
    },
    navigation: {
      complete: "childlike-form-complete-button",
      prev: "childlike-form-prev-button",
      next: "childlike-form-next-button",
    },
  };

  return (
    <div className="bg-red-600 p-4 rounded-lg shadow-lg">
      <Survey model={surveyModel} />
    </div>
  );
};

export default Preview;

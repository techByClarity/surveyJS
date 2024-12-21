import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import "survey-creator-core/survey-creator-core.css";
import "survey-core/defaultV2.min.css";
import { customTheme } from "./theme";
import { formJSON } from "./survey";

const FormBuilder = () => {
  const creatorOptions = {
    showLogicTab: false,
    isAutoSave: false,
    onSurveySaved: (sender) => {
      console.log(sender.JSON);
    },
  };

  const creator = new SurveyCreator(creatorOptions);
  creator.JSON = formJSON;

  // creator.saveSurveyFunc = (saveNo, callback) => {
  //   console.log("saveSurveyFunc");
  //   callback(saveNo, true);
  //   console.log(creator.JSON);
  // };

  return (
    <div>
      {/* <h1>Form Builder</h1> */}
      <div style={{ height: "100vh" }}>
        <SurveyCreatorComponent creator={creator} customTheme={customTheme} />
      </div>
    </div>
  );
};

export default FormBuilder;

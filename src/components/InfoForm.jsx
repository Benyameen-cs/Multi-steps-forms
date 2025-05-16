
import "bootstrap/dist/css/bootstrap.min.css"
import Styles from "../styles/InfoFormBtn.module.css";


import InfoFormBtn from "./InfoFormBtn";
import { useContext } from "react";
import { MultiStepFormContext } from "../store/MultiStepFormContext";
import FieldEmptyWarn from "./FieldEmptyWarn";

const InfoForm = () => {

  const { goNextPlanForm, allDataObject } = useContext(MultiStepFormContext);
  const { name, email, phoneNumber, emailValidation } = allDataObject;
  
    
  return (
    <form action="/" onSubmit={goNextPlanForm} className="allFormContainer">
      <div className="formContainer">
        <h1>Personal info</h1>
        <p>Please provide your name, email address and phone number</p>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          {name === "" ? <FieldEmptyWarn /> : null}
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="enter your name"
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          {email === "" ? <FieldEmptyWarn /> : null}
          {emailValidation ? (
            <p className={`${Styles.warningMsg}`}>Valid email required</p>
          ) : null}
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            phone Number
          </label>
          {phoneNumber === "" ? <FieldEmptyWarn /> : null}
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="+9203123456789"
          />
        </div>
      </div>

      <div className="formbtsContainer">
        <button type="submit" class={` ${Styles.nextStepBtn}`}>
          Next Step
        </button>
      </div>
    </form>
  );
}

export default InfoForm;
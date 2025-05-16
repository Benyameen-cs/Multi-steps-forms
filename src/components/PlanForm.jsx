
import arcadePicture from "../assets/images/icon-arcade.svg"
import advancedPicture from "../assets/images/icon-advanced.svg"
import proPicture from "../assets/images/icon-pro.svg"

import Styles from "../styles/PlanForm.module.css";
import FormsBtns from "./FormsBtns";
import { useCallback, useContext } from "react";
import { MultiStepFormContext } from "../store/MultiStepFormContext";


const PlanForm = () => {

  const { goNextAddOnsForm, goBackInfoForm, handleBillingToggle, handlePlanOnChange,allDataObject } =
    useContext(MultiStepFormContext);
  
  const { billingToggleValue, itemSelect } = allDataObject;

    
  const selectedPlan = true
  const plans = [
    {
      planId: "1",
      planImg: arcadePicture,
      planType: "Arcade",
      planBillingType: billingToggleValue ? "yr" : "mo",
      planPrices: billingToggleValue ? 90 : 9,
    },
    {
      planId: "2",
      planImg: proPicture,
      planType: "Advanced",
      planBillingType: billingToggleValue ? "yr" : "mo",
      planPrices: billingToggleValue ? 120 : 12,
    },
    {
      planId: "3",
      planImg: advancedPicture,
      planType: "Pro",
      planBillingType: billingToggleValue ? "yr" : "mo",
      planPrices: billingToggleValue ? 150 : 15,
    },
  ];

    return (
      <>
        <form
          action="/"
          onSubmit={goNextAddOnsForm}
          className={`${Styles.formContainer}`}
        >
          <div className={`${Styles.formDataContainer}`}>
            <h1>Select your Plans</h1>
            <p>You have the option of monthly and yearly billing</p>

            <div
              className={Styles.planContainer}
              role="radiogroup"
              aria-labelledby="plan-heading"
            >
              {plans.map((plan) => (
                <label key={plan.planIdid} className={Styles.planLabel}>
                  <input
                    type="radio"
                    name="plan"
                    value={plan.planId}
                    className={Styles.planInput}
                    Checked={plan.id === selectedPlan}
                    onChange={() => {
                      handlePlanOnChange(plan);
                    }}
                  />
                  <div
                    className={`${Styles.planCard} ${
                      itemSelect === plan.planId ? Styles.selected : ""
                    }`}
                  >
                    <div className={Styles.planImg}>
                      <img src={plan.planImg} alt="" width="40" height="40" />
                    </div>
                    <div className={Styles.planText}>
                      <h6>{plan.planType}</h6>
                      <p>
                        ${plan.planPrices}/{plan.planBillingType}
                      </p>
                      {billingToggleValue ? <p>2 months free</p> : null}
                    </div>
                  </div>
                </label>
              ))}
            </div>
            <div class={`${Styles.billingToggle}`}>
              <span>Monthly</span>
              <label class={`${Styles.switch}`}>
                <input
                  className={`${Styles.checkbox}`}
                  onChange={handleBillingToggle}
                  type="checkbox"
                />
                <span class={`${Styles.slider} ${Styles.Round}`}></span>
              </label>
              <span>Yearly</span>
            </div>
          </div>
          <div className={`${Styles.formbtnContainer}`}>
            <navlink
              onClick={goBackInfoForm}
              className={`${Styles.goBackBtn}`}
              type="button"
            >
              Go back
            </navlink>
            <button type="submit" class={` ${Styles.nextStepBtn}`}>
              Next Step
            </button>
          </div>
        </form>
      </>
    );
}

export default PlanForm
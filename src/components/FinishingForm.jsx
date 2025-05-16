
import { useContext } from "react";
import Styles from "../styles/FinishingForm.module.css"
import BtnStyles from "../styles/FormsBtns.module.css"
import { MultiStepFormContext } from "../store/MultiStepFormContext";

const FinishingForm = () => {

  const { goNextConfirmMessege, goBackAddOnsForm , goBackPlanForm , allDataObject} = useContext(MultiStepFormContext)
  


  const { billingToggleValue, planSelected, addOns1 , addOns2 , addOns3} = allDataObject;

  // destructuring data from the planSelected 
  const { planName, planPrice } = planSelected;

  // destructuring data form each addOns likes 1 2 3 .
  let { addOnsName1, addOnsPrice1 } = addOns1;
  let { addOnsName2, addOnsPrice2 } = addOns2;
  let { addOnsName3, addOnsPrice3 } = addOns3;

  
  if (addOnsPrice1 === undefined){
    addOnsPrice1 = 0;
  }

  if (addOnsPrice2 === undefined) {
    addOnsPrice2 = 0;
  }

  if (addOnsPrice3 === undefined) {
    addOnsPrice3 = 0;
  }

  const allTotals = planPrice + addOnsPrice1 + addOnsPrice2 + addOnsPrice3;
  
    return (
      <>
        <form className="allFormContainer">
          <div className="formContainer">
            <h1>Finishing up</h1>
            <p>Double-check everything look Ok before confirming</p>
            <div className={`${Styles.selectedDataContainer}`}>
              {planName === " " ? null : (
                <div>
                  <div style={{ fontWeight: "500" }}>
                    <span className={`${Styles.FinishinPlanType}`}>
                      {planName} {billingToggleValue ? "yearly" : "monthly"}
                    </span>
                    <span className={`${Styles.finishingPrice}`}>
                      ${planPrice}/ {billingToggleValue ? "yr" : "mo"}
                    </span>
                  </div>
                  <navlink
                    onClick={goBackPlanForm}
                    className={`${Styles.changeBtn}`}
                    type="button"
                  >
                    change
                  </navlink>
                </div>
              )}
              <hr />
              {addOnsName1 === undefined ? null : (
                <div>
                  <span className={`${Styles.selectedPlans}`}>
                    {addOnsName1}
                  </span>
                  <span className={`${Styles.finishingPrice}`}>
                    ${addOnsPrice1}/ {billingToggleValue ? "yr" : "mo"}
                  </span>
                </div>
              )}
              <br />
              {addOnsName2 === undefined ? null : (
                <div>
                  <span className={`${Styles.selectedPlans}`}>
                    {addOnsName2}
                  </span>
                  <span className={`${Styles.finishingPrice}`}>
                    ${addOnsPrice2}/ {billingToggleValue ? "yr" : "mo"}
                  </span>
                </div>
              )}
              <br />
              {addOnsName3 === undefined ? null : (
                <div>
                  <span className={`${Styles.selectedPlans}`}>
                    {addOnsName3}
                  </span>
                  <span className={`${Styles.finishingPrice}`}>
                    ${addOnsPrice3}/ {billingToggleValue ? "yr" : "mo"}
                  </span>
                </div>
              )}
            </div>
            <br />
            <div className={`${Styles.totalContainer}`}>
              <span className={`${Styles.selectedPlans}`}>
                Total (per {billingToggleValue ? "yearly" : "monthly"} )
              </span>
              <span className={`${Styles.totalPrice}`}>
                +$ {allTotals} /{billingToggleValue ? "yr" : "mo"}
              </span>
            </div>
          </div>
          <div className="">
            <navlink
              onClick={goBackAddOnsForm}
              className={`${BtnStyles.goBackBtn}`}
              type="button"
            >
              Go back
            </navlink>
            <button
              onClick={goNextConfirmMessege}
              type="button"
              class={`btn btn-primary ${Styles.confirmBtn}`}
            >
              confirm
            </button>
          </div>
        </form>
      </>
    );

}

export default FinishingForm;
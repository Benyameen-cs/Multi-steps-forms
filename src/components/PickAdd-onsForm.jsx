
import { useContext } from "react";
import Styles from "../styles/PickAdd-onsForm.module.css"
import FormsBtns from "./FormsBtns";
import { MultiStepFormContext } from "../store/MultiStepFormContext";


const PickAddOnsForm = () => {
  
  const {
    goNextSummaryForm,
    goBackPlanForm,
    handleAddOnsOnChange1,
    handleAddOnsOnChange2,
    handleAddOnsOnChange3,

    allDataObject,
  } = useContext(MultiStepFormContext);

  const { billingToggleValue } = allDataObject;


    const pickAdd1 = {
      label: "Online Services",
      description: "Access to multiplayer games",  
      type: billingToggleValue ? "yr" : "mo",
      price: billingToggleValue ? 10  : 1,
      }
    const pickAdd2 ={
      label: "Large Storage",
      description: "Extra 1TB of cloud save",
      type: billingToggleValue ? "yr" : "mo",
      price: billingToggleValue ? 20 : 2,
      }
    const pickAdd3 ={
      label: "Customizable Profile",
      description: "Custom theme on your profile",
      type: billingToggleValue ? "yr" : "mo",
      price: billingToggleValue ? 20 : 2,
  }
  
  
  return (
    <>
      <form className="allFormContainer">
        <div className="formContainer">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
          <div className={`${Styles.pickAddContainer}`}>
            <div class={`form-check form-check-inline ${Styles.pickAdd}`}>
              <label className={`${Styles.pickAddLabel}`}>
                <input
                  class={`form-check-input  ${Styles.pickAddCheckbox}`}
                  type="checkbox"
                  id="inslineCheckbox1"
                  value="option1"
                  style={{ marginLeft: "-10px", marginBottom: "10px" }}
                  onChange={() => handleAddOnsOnChange1(pickAdd1)}
                />
                {/* <label class="form-check-label" for="inlineCheckbox1">{pickAdd.hello }</label> */}
                <div className={`${Styles.pickAddType}`}>
                  <span style={{ fontWeight: "bold" }}>{pickAdd1.label}</span>
                  <p style={{ color: " hsl(231, 11%, 63%)" }}>
                    {pickAdd1.description}
                  </p>
                </div>
                <p className={`${Styles.pickAddPrice}`}>
                  +${pickAdd1.price}/{pickAdd1.type}
                </p>
              </label>
            </div>
            <div class={`form-check form-check-inline ${Styles.pickAdd}`}>
              <label className={`${Styles.pickAddLabel}`}>
                <input
                  class={`form-check-input  ${Styles.pickAddCheckbox}`}
                  type="checkbox"
                  id="inslineCheckbox1"
                  value="option1"
                  style={{ marginLeft: "-10px", marginBottom: "10px" }}
                  onChange={() => handleAddOnsOnChange2(pickAdd2)}
                />
                {/* <label class="form-check-label" for="inlineCheckbox1">{pickAdd.hello }</label> */}
                <div className={`${Styles.pickAddType}`}>
                  <span style={{ fontWeight: "bold" }}>{pickAdd2.label}</span>
                  <p style={{ color: " hsl(231, 11%, 63%)" }}>
                    {pickAdd2.description}
                  </p>
                </div>
                <p className={`${Styles.pickAddPrice}`}>
                  +${pickAdd2.price}/{pickAdd2.type}
                </p>
              </label>
            </div>
            <div class={`form-check form-check-inline ${Styles.pickAdd}`}>
              <label className={`${Styles.pickAddLabel}`}>
                <input
                  class={`form-check-input  ${Styles.pickAddCheckbox}`}
                  type="checkbox"
                  id="inslineCheckbox1"
                  value="option1"
                  style={{ marginLeft: "-10px", marginBottom: "10px" }}
                  onChange={() => handleAddOnsOnChange3(pickAdd3)}
                />
                {/* <label class="form-check-label" for="inlineCheckbox1">{pickAdd.hello }</label> */}
                <div className={`${Styles.pickAddType}`}>
                  <span style={{ fontWeight: "bold" }}>{pickAdd3.label}</span>
                  <p style={{ color: " hsl(231, 11%, 63%)" }}>
                    {pickAdd3.description}
                  </p>
                </div>
                <p className={`${Styles.pickAddPrice}`}>
                  +${pickAdd3.price}/{pickAdd3.type}
                </p>
              </label>
            </div>
          </div>
        </div>
        <div className="">
          <navlink
            onClick={goBackPlanForm}
            className={`${Styles.goBackBtn}`}
            type="button"
          >
            Go back
          </navlink>
          <button
            onClick={goNextSummaryForm}
            type="button"
            class={` ${Styles.nextStepBtn}`}
          >
            Next Step
          </button>
        </div>
      </form>
    </>
  );
}

export default PickAddOnsForm;
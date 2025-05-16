

import { useContext } from "react"
import Styles  from "../styles/MultiStepFormContainer.module.css"
import FinishingForm from "./FinishingForm"
import InfoForm from "./InfoForm"
import PickAddOnsForm from "./PickAdd-onsForm"
import PlanForm from "./PlanForm"
import ThankyouMessege from "./ThankyouMessege"
import { MultiStepFormContext } from "../store/MultiStepFormContext"

const MultiStepFormsContainer = () => {

    const { allDataObject } = useContext(MultiStepFormContext)

    const { tabValue } = allDataObject;
    
    return (
      <div className={`${Styles.formsContainer}`}>
        <div className={`${Styles.formSubContainer}`}>
          {tabValue === "info form" ? <InfoForm /> : null}
          {tabValue === "plan form" ? <PlanForm /> : null}
          {tabValue === "addOne form" ? <PickAddOnsForm /> : null}
          {tabValue === "summary form" ? <FinishingForm /> : null}
          {tabValue === "confirm messege" ? <ThankyouMessege /> : null}
        </div>
      </div>
    );


}

export default MultiStepFormsContainer
import { useReducer, useRef, useState } from "react";
import { createContext } from "react";


export const MultiStepFormContext = createContext({
  goNextPlanForm: () => {},
  goNextAddOnsForm: () => {},
  goNextSummaryForm: () => {},
  goNextConfirmMessege: () => {},
  goBackInfoForm: () => {},
  goBackPlanForm: () => {},
  goBackAddOnsForm: () => {},
  handleBillingToggle: () => [],
  handlePlanOnChange: () => {},
  handleAddOnsOnChange1: () => {},
  handleAddOnsOnChange2: () => {},
  handleAddOnsOnChange3: () => {},
  // handleItemSelect: () => {},
});



const multiStepFormFunction = (currValue, action) => {
    
    let UpdatedValue = currValue;

  if (action.type === "PLAN_FORM") {

    UpdatedValue = {
     name: action.payload.infoName, email: action.payload.infoEmail, phoneNumber: action.payload.infoPhoneNumber
       
    };
    

    if (UpdatedValue.name === "" || UpdatedValue.email === "" || UpdatedValue.phoneNumber === "") {
      UpdatedValue = {
        tabValue: 'info form', name: action.payload.infoName, email: action.payload.infoEmail, phoneNumber: action.payload.infoPhoneNumber,

      }
    }
    else {
      const emailPattern = /^[^\s@#\$]+@[^\s@#\$]+\.[^\s@#\$]+$/;
      if (!emailPattern.test(action.payload.infoEmail)) {
        UpdatedValue = {
          tabValue: "info form",
          name: action.payload.infoName,
          phoneNumber: action.payload.infoPhoneNumber,
          emailValidation: true,
        }
      }
      else {
        UpdatedValue = {
          tabValue: action.payload.changeTabValue,
          name: action.payload.infoName,
          email: action.payload.infoEmail,
          phoneNumber: action.payload.infoPhoneNumber,
        };
      }
    }
      
  } else if (action.type === "ADD_ONS_FORM") {
      UpdatedValue = {
        ...UpdatedValue,
        tabValue: action.payload.changeTabValue,
        planSelected: {
          planName: action.payload.planDataLabel,
          planType: action.payload.planDataType,
          planPrice: action.payload.planDataPrice,
        },
      };
    
    
    }else if (action.type === "BILLING_TOGGLE") {
      UpdatedValue = { billingToggleValue: action.payload.billingToggle, tabValue : "plan form", }
  } else if (action.type === "SUMMARY_FORM") {
      
    UpdatedValue = {
      ...UpdatedValue,
      tabValue: action.payload.changeTabValue,
      addOns1: {
        addOnsName1: action.payload.addOns1Label,
        addOnsPrice1: action.payload.addOns1Price,
        addOnsType1: action.payload.addOns1Type,
      },
      addOns2: {
        addOnsName2: action.payload.addOns2Label,
        addOnsPrice2: action.payload.addOns2Price,
        addOnsType2: action.payload.addOns2Type,
      },
      addOns3: {
        addOnsName3: action.payload.addOns3Label,
        addOnsPrice3: action.payload.addOns3Price,
        addOnsType3: action.payload.addOns3Type,
      },
      };
    

    } else if (action.type === "CONFIRM_MESSEGE") {
      UpdatedValue = { tabValue: action.payload.changeTabValue };
    } else if (action.type === "GO_BACK_INFO_FORM") {
      UpdatedValue = { tabValue: action.payload.changeTabValue };
    } else if (action.type === "GO_BACK_PLAN_FORM") {
      UpdatedValue = { tabValue: action.payload.changeTabValue };
    } else if (action.type === "GO_BACK_ADD_ONS_FORM") {
      UpdatedValue = { tabValue: action.payload.changeTabValue };
    } else if (action.type === "SELECT_ITEM") {
      UpdatedValue = {...UpdatedValue ,  itemSelect: action.payload.itemSelected };
    }

  return UpdatedValue;

    
}

const MultiStepFormContextProvider = (props) => {

  const [stateValue, dispatch] = useReducer(multiStepFormFunction, allData)
    


  const goNextPlanForm = (e) => {
    e.preventDefault();
   
    const name = e.target[0].value;
    const email = e.target[1].value;
    const phoneNumber = e.target[2].value;


      
      const changeTab = {
        type: "PLAN_FORM",
        payload: {
          changeTabValue: "plan form",
          infoName: name,
          infoEmail: email,
          infoPhoneNumber:phoneNumber,

        }

        }
      dispatch(changeTab);
    };

    

  const goNextAddOnsForm = (e) => {
      
    e.preventDefault();

      const changeTab = {
        type: "ADD_ONS_FORM",
        payload: {
          changeTabValue: "addOne form",
          planDataLabel: planDataLabel,
          planDataType: planDataType,
          planDataPrice: planDataPrice,

        },
      };
      dispatch(changeTab);
    };


    const goNextSummaryForm = () => {
      const changeTab = {
        type: "SUMMARY_FORM",
        payload: {
          changeTabValue: "summary form",
          // for addons 1 data
          addOns1Price: addOns1Price,
          addOns1Label: addOns1Label,
          addOns1Type: addOns1Type,

          // for addons 2 data
          addOns2Label: addOns2Label,
          addOns2Price: addOns2Price,
          addOns2Type: addOns2Type,

          // for addons 3 data
          addOns3Label: addOns3Label,
          addOns3Price: addOns3Price,
          addOns3Type: addOns3Type,
        },
      };
      dispatch(changeTab);
    };

    const goNextConfirmMessege = () => {
      const changeTab = {
        type: "CONFIRM_MESSEGE",
        payload: {
          changeTabValue: "confirm messege",
        },
      };
      dispatch(changeTab);
  };
  
  const goBackInfoForm = () => {
    const changeTab = {
      type: "GO_BACK_INFO_FORM",
      payload: {
        changeTabValue: "info form",
      },
    };
    dispatch(changeTab);
  };


  const goBackPlanForm = () => {
    const changeTab = {
      type: "GO_BACK_PLAN_FORM",
      payload: {
        changeTabValue: "plan form",
      },
    };
    dispatch(changeTab);
  };

  const goBackAddOnsForm = () => {
    const changeTab = {
      type: "GO_BACK_ADD_ONS_FORM",
      payload: {
        changeTabValue: "addOne form",
      },
    };
    dispatch(changeTab);
  };

  const handleBillingToggle = (e) => {
    
    const changeBilling = {
      type: "BILLING_TOGGLE",
      payload: {
        billingToggle:e.target.checked,
      }
    }

    dispatch(changeBilling)
  }

  const handlePlanOnChange = (planData) => {

    planDataLabel = planData.planType;
    planDataType = planData.planBillingType;
    planDataPrice = planData.planPrices;
    handleItemSelect(planData.planId);
    
  }

  const handleAddOnsOnChange1 = (addOnsData) => {
    addOns1Label = addOnsData.label;
    addOns1Price = addOnsData.price;
    addOns1Type = addOnsData.type;

  };
  const handleAddOnsOnChange2 = (addOnsData) => {
    addOns2Label = addOnsData.label;
    addOns2Price = addOnsData.price;
    addOns2Type = addOnsData.type;


  };

  const handleAddOnsOnChange3 = (addOnsData) => {
    addOns3Label = addOnsData.label;
    addOns3Price = addOnsData.price;
    addOns3Type = addOnsData.type;


  };

  const handleItemSelect = (itemId) => {
    const selectedItem = {
      type: "SELECT_ITEM",
      payload: {
        itemSelected: itemId ,
      }
    }
    dispatch(selectedItem);
  }

    return (
      <>
        <MultiStepFormContext.Provider
          value={{
            allDataObject: stateValue,
            goNextPlanForm,
            goNextAddOnsForm,
            goNextSummaryForm,
            goNextConfirmMessege,
            goBackInfoForm,
            goBackPlanForm,
            goBackAddOnsForm,
            handleBillingToggle,
            handlePlanOnChange,
            handleAddOnsOnChange1,
            handleAddOnsOnChange2,
            handleAddOnsOnChange3,
            // handleItemSelect,
          }}
        >
          {props.children}
        </MultiStepFormContext.Provider>
      </>
    );
}

// define to store selected plan data ...
let planDataLabel;
let planDataType;
let planDataPrice;

// define to store addOns selected data ...

// for first addOns select
let addOns1Label;
let addOns1Price;
let addOns1Type;

// for second addOns select
let addOns2Label;
let addOns2Price;
let addOns2Type;

// for third addOns select
let addOns3Label;
let addOns3Price;
let addOns3Type;

const allData = {
  tabValue: "info form",
  name: "ali",
  email: "abc@gmail.com",
  phoneNumber: "012",
  emailValidation: false,
  billingToggleValue: false,
  itemSelect: false,

  planSelected: {
    planName: "",
    planPrice: "",
    planType: "",
  },

  addOns1: {
      addOnsPrice1: "",
      addOnsName1: "",
      addOnsType1: "",
    },
  addOns2:{
      addOnsPrice2: "",
      addOnsName2: "",
      addOnsType2: "",
  },
  addOns3: {
      addOnsPrice3: "",
      addOnsName3: "",
      addOnsType3: "",
  },
};
export default MultiStepFormContextProvider;
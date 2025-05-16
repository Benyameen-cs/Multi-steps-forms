
import { useContext } from "react";
import Styles from "../styles/MultiStepFormSidebar.module.css"
import SidebarSection from "./SideBarSection";
import { MultiStepFormContext } from "../store/MultiStepFormContext";

const MultiStepFormSidebar = () => {


  const { allDataObject }  = useContext(MultiStepFormContext)
  
  const { tabValue } = allDataObject;
  console.log(tabValue);
  
  const sectionOfSidebar = [
    {
      number: "1",
      stepNo: "STEP 1",
      type: "YOUR INFO",
      active: tabValue === "info form" ? "info form" : null,
    },
    {
      number: "2",
      stepNo: "STEP 2",
      type: "YOUR PLAN",
      active: tabValue === "plan form" ? "plan form" : null,
    },
    {
      number: "3",
      stepNo: "STEP 3",
      type: "ADD-ONS",
      active: tabValue === "addOne form" ? "addOne form" : null,
    },
    {
      number: "4",
      stepNo: "STEP 4",
      type: "SUMMARY",
      active:
        tabValue === "summary form" && "confirm messege"
          ? "summary form"
          : null,
    },
  ];
    
  return (
    <>
      <div className={`${Styles.sidebarContainer}`}>
        <div className={`${Styles.sidebar}`}>
          {sectionOfSidebar.map((section) => {
            return (
              <SidebarSection
                key={section.number}
                sectionData={section}
              ></SidebarSection>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MultiStepFormSidebar;
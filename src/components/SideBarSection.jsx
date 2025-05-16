
import Styles from "../styles/MultiStepFormSidebar.module.css";


const SidebarSection = ({sectionData}) => {
    
    return (
      <>
        <div className={`${Styles.sectionContainer}`}>
          <div
            className={
              sectionData.active === "info form" ||
              sectionData.active === "plan form" ||
              sectionData.active === "addOne form" ||
              sectionData.active === "summary form"
                ? ` ${Styles.sectionNumberState2}`
                : `${Styles.sectionNumberState1} `
            }
          >
            <p style={{ margin: "50%" }}>{sectionData.number}</p>
          </div>
          <div className={`${Styles.sectionType}`}>
            <p className={`${Styles.sectionTypeStepNo}`}>
              {sectionData.stepNo}
            </p>
            <p className={`${Styles.sectionTypeStepNoType}`}>
              {sectionData.type}
            </p>
          </div>
        </div>
      </>
    );
}

export default SidebarSection;
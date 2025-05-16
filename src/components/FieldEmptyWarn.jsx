

import Styles from "../styles/InfoFormBtn.module.css";

const FieldEmptyWarn = () => {
    
    return (
      <>
        <p className={`${Styles.warningMsg}`}>This field is required</p>
      </>
    );
}

export default FieldEmptyWarn
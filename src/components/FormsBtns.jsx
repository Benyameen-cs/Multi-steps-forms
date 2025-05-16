
import Styles from "../styles/FormsBtns.module.css"

import InfoFormBtn from "./InfoFormBtn";

const FormsBtns = () => {
    
    return <>
        <navlink className={`${Styles.goBackBtn}`} type="button" >Go back</navlink>
        <InfoFormBtn></InfoFormBtn>
    </>
}

export default FormsBtns;
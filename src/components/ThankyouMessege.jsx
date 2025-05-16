
import picture from "../assets/images/icon-thank-you.svg"
import Styles from "../styles/ThankyouMessege.module.css"

const ThankyouMessege = () => {
    

    return (
      <>
        <form className={`${Styles.finishFormContainer}`}>
          <div className={`${Styles.thankyouContainer}`}>
            <div className={`${Styles.thankyouMessege}`}>
              <div className={`${Styles.thankyouIcon}`}>
                <img src={picture} alt="thankyou icon" />
              </div>
              <h1 className={`${Styles.thankyouHeading}`}>Thank you!</h1>
              <p className={`${Styles.thankyouPara}`}>
                Thanks for confirming your subscription! We hope you have fun
                using our platform . If your ever need support feel free to
                email us at support@loremgaming.com.
              </p>
            </div>
          </div>
        </form>
      </>
    );
}

export default ThankyouMessege;
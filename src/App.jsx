
import './App.css'
import MultiStepFormSidebar from './components/MultiStepFormSidebar'
import MultiStepFormsContainer from './components/MultStepFormContainer'
import MultiStepFormContextProvider from './store/MultiStepFormContext'

function App() {
  return (
    <>
      <div className="main-container">
        <div className="multi-step-form-container">
          <MultiStepFormContextProvider>
            <MultiStepFormSidebar></MultiStepFormSidebar>
            <MultiStepFormsContainer></MultiStepFormsContainer>
          </MultiStepFormContextProvider>
        </div>
      </div>
    </>
  );
}

export default App

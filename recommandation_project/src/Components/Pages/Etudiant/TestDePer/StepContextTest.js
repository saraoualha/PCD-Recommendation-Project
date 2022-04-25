import React, {useState} from 'react';
import Test from './Test';

export const multiStepContext= React.createContext();

const StepContext=()=>{
    const [currentStep, setCurrentStep]=useState(1);
    const [userData, setUserData]=useState({Id_InfoPer:2});
    const [finalData, setFinalData]=useState([]);
    function submitData(){
        setFinalData(finalData=>[...finalData,userData]);
        setCurrentStep(4);
    }
    return(
        <div>
            <multiStepContext.Provider value={{currentStep,setCurrentStep, userData,setUserData,finalData,setFinalData,submitData}}>
                <Test/>
            </multiStepContext.Provider>
        </div>
    )
}
export default StepContext;
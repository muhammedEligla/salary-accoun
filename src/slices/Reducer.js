import {ar , en , tu } from "../DataLang";

export const initialState = localStorage.langType === 'EN' ? en : localStorage.langType === 'TU' ? tu : ar;


const reducer = (state , action)=>{
    switch(action){
        case "AR":
            return state = ar;

        case "EN":
            return state = en;
        case "TU":
            return state = tu
    }
}

export default reducer ;
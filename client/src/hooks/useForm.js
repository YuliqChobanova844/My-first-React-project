import { useState,  } from "react";

export function useForm(intialValues, onSubmitHandler) {
    const [values, setValues] = useState(intialValues);

    

   const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };


    const onSubmit = (e) => {
        e.preventDefault();
       onSubmitHandler(values)

    };


    

    return {
        values,
        changeHandler,
        onSubmit,
     
    }
}
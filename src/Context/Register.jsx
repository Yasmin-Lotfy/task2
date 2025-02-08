import { createContext, useState } from "react";

export let RegisterContext = createContext()

export function RegisterContextProvider(props){
    const [regData, setRegData] = useState({})

    return <RegisterContext.Provider value={{setRegData, regData}}>
        {props.children}
    </RegisterContext.Provider>
}
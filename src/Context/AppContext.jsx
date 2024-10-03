import { createContext } from "react";
import { doctors } from "../assets/assets";  // the value you want to share with ather component

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const value = {
        doctors
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;
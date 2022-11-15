import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const intitialState = {
    chat: false,
    chart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ childern }) => {
    const [activeMenu, setactiveMenu] = useState (true);

    return (
        <StateContext.Provider
            value = {{
                activeMenu,
            }}
        >
            {childern}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext);
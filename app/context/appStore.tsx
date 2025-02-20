'use client'

import * as types from '../../types/custom'
import {  ReactElement, createContext, useContext, useState } from 'react'


const UserContext = createContext({});

export default function AppStore({ children }: any): ReactElement<any>
{

    const [ loaded, setLoaded ] = useState(false),
          [ active, setActive ] = useState(true);
          

    //user state

    const state: types.state = {
        loaded, 
        active, 
        setLoaded,
        setActive         
    }

    return (
        <UserContext.Provider value={{ state }}>
            { children }
        </UserContext.Provider>
    );
}

export function useUserContext(): any {
    return useContext(UserContext);
}
 


'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { TUser } from '@/types'
import { emptyUser } from '@/utilities/emptyObjects'

interface IProps {
    children: React.ReactNode
}

enum Actions {
    SET_USER = 'SET_USER'
}

type userActions = {
    type: Actions,
    payload: TUser
}
type userContextType = {
    user: TUser,
    setUser: (user: TUser) => void
}
type userState = TUser
const userContext = createContext<userContextType>({ user: emptyUser, setUser: (user: TUser) => { } })
const saveContext = (user: TUser) => {
    localStorage.setItem('user', JSON.stringify(user))
}

const reducer = (state: userState, action: userActions) => {
    switch (action.type) {
        case Actions.SET_USER:
            saveContext(action.payload)
            return {
                ...state = action.payload
            }
        default:
            return state
    }
}

const UserProvider: React.FC<IProps> = ({ children }) => {
    const [user, userDispatch] = useReducer(reducer, {...emptyUser, _id: '0'})
    useEffect(() => {
        const userJSON = localStorage.getItem('user');
        const savedUser = userJSON ? JSON.parse(userJSON) : emptyUser;
        userDispatch({ type: Actions.SET_USER, payload: savedUser })
    }, [])


    const setUser = (user: userState) => {
        userDispatch({ type: Actions.SET_USER, payload: user })
    }

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}

const useUserContext = () => {
    return useContext(userContext)
}

export { UserProvider, useUserContext }
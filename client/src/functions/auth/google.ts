import { GoogleLoginResponse } from "react-google-login";
import { login } from "../api/auth";
import { addUser } from "../api/users";
import { TUser } from "@/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React from "react";

export enum AuthAction {
    LOGIN = "LOGIN",
    SIGNUP = "LOGOUT",
}


export const clientID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''

let gUsername = "";
export const setGUSername = (username: string) => {
    gUsername = username;
}

// export const googleSuccess = (
//     response: GoogleLoginResponse,
//     action: AuthAction, 
//     setUser: (user: TUser) => void,
//     router: AppRouterInstance,
//     setMessage: React.Dispatch<
//         React.SetStateAction<{ text: string; style: string }>
//     >,
//     setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
// ) => {
//     const data = {
//         firstName: response.profileObj.givenName,
//         lastName: response.profileObj.familyName,
//         email: response.profileObj.email,
//         password: response.profileObj.googleId,
//         username: ''
//     };
//     switch (action) {
//         case AuthAction.LOGIN:
//             login(data.password, setUser, undefined, data.email).then(
//                 (result) => {
//                     if (result === true) {
//                         router.push("/");
//                     }
//                     else {
//                         setMessage({
//                             text: 'Incorrect username or password',
//                             style: 'text-red-500'
//                         })
//                     }
//                 }
//                 
//             );
//             break;
//         case AuthAction.SIGNUP:
//             console.log(data);
//             setIsOpen && setIsOpen(true)
//             data.username = gUsername
//             console.log(data)
//             // addUser(data, setMessage)
//             break;
//         default:
//             console.log("Unknown action", action);
//     }
// };

export const onFailure = () => {
    console.log("Failed to login");
};

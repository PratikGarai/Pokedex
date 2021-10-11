import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { readable } from "svelte/store";

import { firebaseConfig } from "./secrets";

initializeApp(firebaseConfig);

const userMapper = claims => ({
    id : claims.user_id, 
    name : claims.name, 
    email : claims.email, 
    picture : claims.picture
})

export const initAuth = (useRedirect = false) => {
    const auth = getAuth()
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        if (useRedirect) {
            return auth.signInWithRedirect(provider)
        } else {
            return auth.signInWithPopup(provider)
        }
    }

    const user = readable(null, set => {
        const unsub = auth.onAuthStateChanged(async fireUser => {
            if (fireUser) {
                const token = await fireUser.getIdTokenResult()
                const user = userMapper(token.claims)
                set(user)
            } else {
                set(null)
            }
        })

        return unsub
    })

    return {
        user, 
        loginWithGoogle
    }
}
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { readable } from "svelte/store";

import { firebaseConfig } from "./secrets";

initializeApp(firebaseConfig);

const userMapper = claims => ({
    id: claims.user_id,
    name: claims.name,
    email: claims.email,
    picture: claims.picture
})

export const initAuth = (useRedirect = false) => {
    const auth = getAuth()

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        if (useRedirect) {
            return signInWithRedirect(auth, provider)
        } else {
            return signInWithPopup(auth, provider)
        }
    }

    const user = readable(null, set => {
        const unsub = onAuthStateChanged(auth, async fireUser => {
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

    const logout = () => auth.signOut();

    return {
        user,
        loginWithGoogle,
        logout
    }
}
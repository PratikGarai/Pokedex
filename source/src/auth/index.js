import firebase from "firebase/app";
import "firebase/auth";

import { firebaseConfig } from "./secrets";

firebase.initializeApp(firebaseConfig);

export const initAuth = () => {}
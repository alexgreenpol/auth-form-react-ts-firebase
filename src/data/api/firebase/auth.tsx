import {
    Auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

export const login = (auth: Auth, email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err.code;
        });
};

export const register = (auth: Auth, email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err.code;
        });
};

export const logout = (auth: Auth) => signOut(auth);

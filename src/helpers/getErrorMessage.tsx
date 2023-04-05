export const getErrorMessage = (code: string) => {
    let errorMessage = "";

    switch (code) {
        case "auth/user-not-found":
            errorMessage =
                "There is no existing user record corresponding to the provided identifier.";
            break;

        case "auth/email-already-exists":
            errorMessage =
                "The provided email is already in use by an existing user. Try to use another email.";
            break;

        case "auth/wrong-password":
            errorMessage =
                "The provided value for the password user property is invalid.";
            break;

        default:
            errorMessage = "Undefined error. Try again please.";
            break;
    }

    return errorMessage;
};

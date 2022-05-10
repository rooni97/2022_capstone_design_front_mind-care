import {atom} from "recoil";

const loginInformation = atom({
    key: "loginInformation",
    default: {},
});

const loginState = atom({
    key: "loginState",
    default: false,
});


export {loginInformation, loginState};
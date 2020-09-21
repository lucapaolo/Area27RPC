"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestore = exports.firebase = void 0;
const app_1 = __importDefault(require("firebase/app"));
exports.firebase = app_1.default;
require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyDBjBShrXBjLkfDbjBHIP8gFWDgPVHuuS0",
    authDomain: "scpf-26799.firebaseapp.com",
    databaseURL: "https://scpf-26799.firebaseio.com",
    projectId: "scpf-26799",
    storageBucket: "scpf-26799.appspot.com",
    messagingSenderId: "594504720912",
    appId: "1:594504720912:web:d2818bc5b4b15478296095",
    measurementId: "G-L7TSQZFDHK"
};
app_1.default.initializeApp(firebaseConfig);
const firestore = app_1.default.firestore();
exports.firestore = firestore;
//# sourceMappingURL=firebase.js.map
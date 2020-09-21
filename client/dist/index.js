"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const onboarding_1 = __importDefault(require("./onboarding"));
const saving_1 = require("./saving");
const logic_1 = require("./logic");
const prompt = require("prompt-sync")({ sigint: true });
// Application Entry Point
(() => __awaiter(void 0, void 0, void 0, function* () {
    if (!saving_1.saveExists()) {
        yield onboarding_1.default()
            .catch(e => { console.log(e); prompt("", ""); return; });
    }
    ;
    console.log("+-------------------------------------------------+");
    console.log("|         Area-27v2 Discord Intergration          |");
    console.log("|     Successful Start, RPC is updating live.     |");
    console.log("+-------------------------------------------------+");
    logic_1.mainloop();
}))();
//# sourceMappingURL=index.js.map
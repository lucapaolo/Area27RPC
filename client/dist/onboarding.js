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
Object.defineProperty(exports, "__esModule", { value: true });
const saving_1 = require("./saving");
const prompt = require("prompt-sync")({ sigint: true });
function handleOnBoarding() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((res, rej) => {
            console.log("+-------------------------------------------------------+");
            console.log("|                                                       |");
            console.log("|             Area-27v2 Discord Intergration            |");
            console.log("|     It looks like this is your first time running     |");
            console.log("|     this application. Please follow the prompts.      |");
            console.log("|                                                       |");
            console.log("+-------------------------------------------------------+");
            const robloxUserId = prompt("What is your ROBLOX User Id?  ");
            console.log("You have chosen " + robloxUserId + ". Is this correct? (y/n)");
            const correct = prompt("(y/n)  ", "y");
            if (correct.toLowerCase() !== "y") {
                rej("Invalid input.");
            }
            else if (isNaN(parseInt(robloxUserId, 10))) {
                rej("Invalid UserId");
            }
            else {
                saving_1.writeData({
                    robloxUserId
                });
                console.log("You have selected " + robloxUserId + " as your ID. To change it, delete the \"userInformation.json\" file. Press enter to continue.");
                prompt("", "");
                res();
            }
        });
    });
}
exports.default = handleOnBoarding;
//# sourceMappingURL=onboarding.js.map
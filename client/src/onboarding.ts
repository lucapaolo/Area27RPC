import { writeData } from "./saving";
const prompt = require("prompt-sync")({sigint: true});

export default async function handleOnBoarding(): Promise<null> {

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
        } else if (isNaN(parseInt(robloxUserId, 10))) {
            rej("Invalid UserId");
        } else {
            writeData({
                robloxUserId
            });
            console.log("You have selected " + robloxUserId + " as your ID. To change it, delete the \"userInformation.json\" file. Press enter to continue.");
            prompt("", "");
            res();
        }
    });

}
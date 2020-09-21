import handleOnBoarding from "./onboarding"
import { saveExists } from "./saving";
import { mainloop } from "./logic";
const prompt = require("prompt-sync")({sigint: true});
// Application Entry Point

(async () => { // yuck, but async is needed

    if (!saveExists()) {
        await handleOnBoarding()
            .catch(e => { console.log(e); prompt("", ""); return; });
    };

    console.log("+-------------------------------------------------+");
    console.log("|         Area-27v2 Discord Intergration          |");
    console.log("|     Successful Start, RPC is updating live.     |");
    console.log("+-------------------------------------------------+");

    mainloop();
})();
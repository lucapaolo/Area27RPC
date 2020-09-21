import { firestore } from "./firebase"
import { readData, SaveData } from "./saving"
import * as RPC from "discord-rpc";

const RPC_CLIENT = new RPC.Client({
    transport: "ipc"
});

export function mainloop() {
    const USER_ID = readData().robloxUserId;

    RPC_CLIENT.on("ready", () => {
        console.log("Connected to Discord.\n");
        RPC_CLIENT.setActivity({
            largeImageKey: "gameicon",
            smallImageKey: "scpficon",
            instance: false,
            startTimestamp: Date.now()
        });

        const doc = firestore.doc("users/" + USER_ID).onSnapshot(sp => {
            const data = sp.data();
            const team = data.team
            const inGame = team == "offline" && "Offline!" || "In Game!"
            RPC_CLIENT.setActivity({
                largeImageKey: "gameicon",
                smallImageKey: "scpficon",
                instance: false,
                details: inGame,
                state: team !== "offline" && team || "") || "Taking a Break 🌙"
            });
    });

    RPC_CLIENT.login({
        clientId: "757051253460172960"
    });
}
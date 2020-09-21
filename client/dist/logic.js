"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainloop = void 0;
const firebase_1 = require("./firebase");
const saving_1 = require("./saving");
const RPC = __importStar(require("discord-rpc"));
const RPC_CLIENT = new RPC.Client({
    transport: "ipc"
});

const Emojis = {
    "Foundation Personnel": "📋",
    "Chaos Insurgency": "👻",
    "Department of External Affairs": "📝",
    "Engineering and Technical": "👷",
    "Ethics Committee": "✏️",
    "Intelligence Agency": "👁️",
    "Internal Security Department": "🛡️",
    "Logistics Department": "🚚",
    "Manufacturing Department": "🖥️",
    "Scientific Department": "🔬",
    "Tactical Intervention Unit": "🔪",
    "Security Department": "⚔️",
    "Mobile Task Force": "🎖️",
    "Medical Department": "🩺"
}

function mainloop() {
    const USER_ID = saving_1.readData().robloxUserId;
    RPC_CLIENT.on("ready", () => {
        console.log("Connected to Discord.\n");
        RPC_CLIENT.setActivity({
            largeImageKey: "gameicon",
            smallImageKey: "scpficon",
            instance: false,
            startTimestamp: Date.now()
        });
        const doc = firebase_1.firestore.doc("users/" + USER_ID).onSnapshot(sp => {
            const data = sp.data();
            const team = data.team || "offline"
            const emoji = Emojis[data.team] || "🎮"
            const definedTeam = team + " " + emoji
            const inGame = team == "offline" && "Offline!" || "In Game!"
            RPC_CLIENT.setActivity({
                largeImageKey: "gameicon",
                smallImageKey: "scpficon",
                instance: false,
                details: inGame,
                state: team !== "offline" && definedTeam || "Taking a Break 🌙",
                largeImageText: "Area-27v2",
                smallImageText: "SCPF",
                startTimestamp: inGame !== "offline" && Math.round((new Date()).getTime() / 1000) || null
            });
            console.log("Updated team to " + team + "!");
        });
    });
    RPC_CLIENT.login({
        clientId: "757051253460172960"
    });
}
exports.mainloop = mainloop;
//# sourceMappingURL=logic.js.map
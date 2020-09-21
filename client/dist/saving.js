"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeData = exports.readData = exports.saveExists = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
function saveExists() {
    const saveFilePath = path_1.join(__dirname, "userInformation.json");
    return fs_1.existsSync(saveFilePath);
}
exports.saveExists = saveExists;
function readData() {
    const saveFilePath = path_1.join(__dirname, "userInformation.json");
    if (!fs_1.existsSync(saveFilePath)) {
        return null;
    }
    else {
        const fileBuffer = fs_1.readFileSync(saveFilePath);
        const jsonData = JSON.parse(fileBuffer.toString());
        if (jsonData.robloxUserId) {
            return jsonData;
        }
        else {
            return null;
        }
    }
}
exports.readData = readData;
function writeData(toWrite) {
    const saveFilePath = path_1.join(__dirname, "userInformation.json");
    try {
        fs_1.writeFileSync(saveFilePath, JSON.stringify(toWrite));
    }
    catch (e) {
        return false;
    }
    return true;
}
exports.writeData = writeData;
//# sourceMappingURL=saving.js.map
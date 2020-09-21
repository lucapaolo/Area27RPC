import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

export type SaveData = {
    robloxUserId: string
}

export function saveExists(): boolean {
    const saveFilePath = join(__dirname, "userInformation.json");
    return existsSync(saveFilePath);
}

export function readData(): SaveData|null {
    const saveFilePath = join(__dirname, "userInformation.json");
    if (!existsSync(saveFilePath)) {
        return null;
    } else {

        const fileBuffer = readFileSync(saveFilePath);
        const jsonData: SaveData = JSON.parse(fileBuffer.toString());

        if (jsonData.robloxUserId) {
            return jsonData;
        } else {
            return null;
        }

    }
}

export function writeData(toWrite: SaveData): boolean {
    const saveFilePath = join(__dirname, "userInformation.json");
    try {
        writeFileSync(saveFilePath, JSON.stringify(toWrite));
    } catch (e) {
        return false;
    }
    return true;
}
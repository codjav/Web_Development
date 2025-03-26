import fs from 'fs/promises';
import fsn from 'fs';
import path from 'path';

const basepath = "/Users/mdjavedali/Sigma_Web_Development/exercise15";

try {
    let files = await fs.readdir(basepath);

    for (const item of files) {
        
        console.log("running for ", item);

        // Extract the file extension
        let ext = item.split(".").pop();

        // Skip JS and JSON files and ignore directories
        if (ext !== "js" && ext !== "json" && item.includes(".")) {
            const targetFolder = path.join(basepath, ext);

            // Ensure the folder exists (create if not)
            if (!fsn.existsSync(targetFolder)) {
                await fs.mkdir(targetFolder);
            }

            // Move the file to the extension folder
            await fs.rename(
                path.join(basepath, item),
                path.join(targetFolder, item)
            );

            console.log(`Moved: ${item} → ${ext}/`);
        }
    }

    console.log("✅ Organizing completed!");
} catch (error) {
    console.error("Error:", error);
}
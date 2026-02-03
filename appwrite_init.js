# Appwrite Pro Initialization Script

import { Client, Databases, Storage, ID } from 'node-appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

const databases = new Databases(client);
const storage = new Storage(client);

async function init() {
    console.log("Initializing Appwrite Collections...");
    
    const dbId = 'foundry_command';
    try {
        await databases.create(ID.unique(), 'Foundry Command');
        // Collection creation and schema definition would follow
        console.log("Database created.");
    } catch (e) {
        console.log("Database may already exist or error occurred.");
    }
}

// init();

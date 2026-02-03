import { Client, Account, Databases, Storage } from 'appwrite';

export const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6981c828001f35769187');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

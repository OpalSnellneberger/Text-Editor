// Importing the openDB function from the idb library
import { openDB } from "idb";

// Function to initialize the database
const initdb = async () =>
  // Opening a database called "jate" with version 1
  openDB("jate", 1, {
    // Handling the upgrade event
    upgrade(db) {
      // Checking if the object store "jate" already exists
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      // If the object store doesn't exist, creating it with an auto-incrementing key
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Function to add data to the database
export const putDb = async (content) => {
  // Opening the "jate" database
  const jateDB = await openDB("jate", 1);
  // Starting a transaction with read-write access
  const tx = jateDB.transaction("jate", "readwrite");
  // Accessing the object store named "jate"
  const store = tx.objectStore("jate");
  // Putting the content into the store with a predefined ID
  const request = store.put({ id: 1, value: content });
  // Waiting for the put operation to complete
  const result = await request;
  // Logging a confirmation message along with the result
  console.log("data saved to the database", result);
};

// Function to retrieve data from the database
export const getDb = async () => {
  // Opening the "jate" database
  const jateDB = await openDB("jate", 1);
  // Starting a transaction with read-only access
  const tx = jateDB.transaction("jate", "readonly");
  // Accessing the object store named "jate"
  const store = tx.objectStore("jate");
  // Getting all the data from the store
  const request = store.getAll();
  // Waiting for the getAll operation to complete
  const result = await request;
  // Logging a confirmation message along with the result
  console.log("data read from database", result);
  // Returning the retrieved data
  return result.value;
};

// Initializing the database when this module is imported
initdb();

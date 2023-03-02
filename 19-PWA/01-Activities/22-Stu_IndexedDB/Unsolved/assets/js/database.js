import { openDB } from "idb";

const initdb = async () =>
  // TODO: Add a comment explaining what this method does
  // Creates database. Adding a name and id
  openDB("todos", 1, {
    // TODO: Add a comment explaining the functionality of this method:
    // Create a store of objects
    upgrade(db) {
      if (db.objectStoreNames.contains("todos")) {
        console.log("todos database already exists");
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      // The 'id' property of the object will be the key
      // If it isn't explicitly set, create a value by auto incrementing
      db.createObjectStore("todos", { keyPath: "id", autoIncrement: true });
      console.log("todos database created");
    },
  });

initdb();

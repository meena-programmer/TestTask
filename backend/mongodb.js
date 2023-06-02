import { MongoClient } from "mongodb";
import jwt from "jsonwebtoken";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const dbName = "testdb";
const collectionName = "users";

/**
 * create connection to mongodb
 */
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
}

/**
 * create database
 */
async function createDatabase() {
  try {
    const database = client.db(dbName);
    console.log("Database created:", database.databaseName);
  } catch (error) {
    console.error("Error creating database", error);
  }
}

/**
 * create collection to db
 */
async function createCollection() {
  try {
    const database = client.db(dbName);
    await database.createCollection(collectionName);
    console.log("Collection created");
  } catch (error) {
    console.error("Error creating collection");
  }
}

/**
 * insert data to user collection
 * @param {*} user
 */
export async function insertUser(user) {
  try {
    const secretKey = "123";
    // create jwt token
    const token = jwt.sign(user, secretKey);

    const collection = client.db(dbName).collection(collectionName);
    const result = await collection.insertOne({ ...user, token });

    console.log("Inserted user:", result.insertedId);
  } catch (error) {
    console.error("Error inserting user", error);
  }
}

/**
 * get user data from users collection
 */
async function getUsersWithEmailDomain() {
  try {
    const collection = client.db(dbName).collection(collectionName);
    const users = await collection
      .find({ email: { $regex: /@example.com$/i } })
      .toArray();
    console.log('Users with email domain "example.com":', users);
  } catch (error) {
    console.error("Error retrieving users", error);
  }
}

/** --------------------------------------------------------------------------------------------
 *  * Functions below are created for working with GraphQL
 *  * GetAllUsers(), UpdateUser(), DeleteUser()==> those functions invoked in GraphQL Resolver
 * ---------------------------------------------------------------------------------------------
 */
/**
 * get user data from users collection
 */
export async function getAllUsers() {
  try {
    const collection = client.db(dbName).collection(collectionName);

    const users = await collection.find().toArray();

    return users;
  } catch (error) {
    console.error("Error retrieving users", error);
  }
}

/**
 * update user in users collection
 * @param {*} id
 * @param {*} user
 */
export async function updateUser(id, user) {
  try {
    const collection = client.db(dbName).collection(collectionName);

    var updatedUser = { $set: user };

    const result = await collection.updateOne({ id: id }, updatedUser);
    console.log("User updated", result);
  } catch (error) {
    console.log("Error Updating user", error);
  }
}

/**
 * delete user from users collection
 * @param {*} id
 * @param {*} user
 */
export async function deleteUser(id, user) {
  try {
    const collection = client.db(dbName).collection(collectionName);

    const result = await collection.deleteOne({ id: id });
    console.log("User deleted", result);
  } catch (error) {
    console.log("Error deleting user", error);
  }
}

/**
 * --------------------******----------------********-----------------*****----------------------
 */

// execute all functions
await connectToDatabase().then(() => createDatabase());
await createCollection().then(() => getUsersWithEmailDomain());

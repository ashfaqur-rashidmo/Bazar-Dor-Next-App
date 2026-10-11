
// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "@better-auth/mongo-adapter";

// const mongodbUrl = process.env.MONGODB_URL;

// if (!mongodbUrl) {
//   throw new Error(
//     "MONGODB_URL is missing. Check your .env.local file."
//   );
// }

// const client = new MongoClient(mongodbUrl);
// const db = client.db("Bazar-Dor-Database");

// export const auth = betterAuth({
//   database: mongodbAdapter(db, { client }),

//   emailAndPassword: {
//     enabled: true,
//   },
//    socialProviders: {
//         google: { 
//             clientId: process.env.GOOGLE_CLIENT_ID as string, 
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
//         }, 
//         github: {
//             clientId: process.env.GITHUB_CLIENT_ID as string, 
//             clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
//         }, 
//     },

//   // Keep your existing socialProviders and other configuration here.
// });



import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const mongodbUrl = process.env.MONGODB_URL;

if (!mongodbUrl) {
  throw new Error("MONGODB_URL is missing.");
}

const globalForMongo = globalThis as typeof globalThis & {
  mongoClient?: MongoClient;
};

const client =
  globalForMongo.mongoClient ?? new MongoClient(mongodbUrl);

globalForMongo.mongoClient = client;

const db = client.db("Bazar-Dor-Database");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,

  trustedOrigins: [
    "https://bazar-dor-next-app.vercel.app",
  ],

  database: mongodbAdapter(db, { client }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});

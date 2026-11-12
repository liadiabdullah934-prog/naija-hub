import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"

const getCleanPrivateKey = () => {
  let key = process.env.AUTH_FIREBASE_PRIVATE_KEY || "";
  
  // Clean up any outer quotes if present
  key = key.replace(/^["'](.+)["']$/, '$1');

  // If the key was flattened into a single continuous block without newlines,
  // restore standard PEM line breaks (every 64 characters of the body)
  if (!key.includes("\n") && !key.includes("\\n")) {
    const header = "-----BEGIN PRIVATE KEY-----";
    const footer = "-----END PRIVATE KEY-----";
    
    if (key.includes(header) && key.includes(footer)) {
      let body = key.replace(header, "").replace(footer, "").replace(/\s+/g, "");
      const chunks = body.match(/.{1,64}/g) || [];
      key = `${header}\n${chunks.join("\n")}\n${footer}\n`;
    }
  } else {
    // Standard replacement for escaped newlines
    key = key.replace(/\\n/g, "\n");
  }

  return key;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    })
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
      clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      privateKey: getCleanPrivateKey(),
    }),
  }),
});
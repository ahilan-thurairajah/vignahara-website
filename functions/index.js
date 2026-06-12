const { onRequest } = require("firebase-functions/v2/https");
// Version: 1.0.1 - Force redeploy with public permissions
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const logger = require("firebase-functions/logger");

initializeApp();
const db = getFirestore();

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.submitInquiry = onCall({
  cors: true,
  invoker: "public"
}, async (request) => {
  const data = request.data;

  // Basic validation
  if (!data.name || !data.email || !data.message) {
    throw new HttpsError("invalid-argument", "The function must be called with name, email, and message.");
  }

  try {
    const docRef = await db.collection("inquiries").add({
      ...data,
      createdAt: new Date(),
      status: "new"
    });

    logger.info("New inquiry received", { id: docRef.id });

    return { success: true, id: docRef.id };
  } catch (error) {
    logger.error("Error saving inquiry", error);
    throw new HttpsError("internal", "Unable to save inquiry.");
  }
});

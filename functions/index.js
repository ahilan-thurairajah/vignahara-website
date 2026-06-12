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
    // 1. Save inquiry to database
    const docRef = await db.collection("inquiries").add({
      ...data,
      createdAt: new Date(),
      status: "new"
    });

    logger.info("New inquiry received", { id: docRef.id });

    // 2. Trigger email notification via Firebase Extension
    await db.collection("mail").add({
      to: "ahilan@vignahara.com",
      message: {
        subject: `New Inquiry from ${data.name} (${data.type || "General"})`,
        html: `
          <h2>New Website Inquiry</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Type:</strong> ${data.type || "General"}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
          <hr>
          <p><small>Inquiry ID: ${docRef.id}</small></p>
        `
      }
    });

    logger.info("Email notification queued");

    return { success: true, id: docRef.id };
  } catch (error) {
    logger.error("Error saving inquiry", error);
    throw new HttpsError("internal", "Unable to save inquiry.");
  }
});

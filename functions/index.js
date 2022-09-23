const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.checkout = functions.https.onCall(async (data, context) => {
  console.log("start");
  let name = data.name;
  console.log(name);

  const serviceRef = db.collection("Service");
  const serviceSnapshot = await serviceRef.where("name", "==", name).get();
  if (serviceSnapshot.empty) {
    console.log("does not exist");
  }
  console.log(">>> ", serviceSnapshot);
  let serviceInfo = null;
  serviceSnapshot.forEach((doc) => {
    serviceInfo = doc.data();
  });

  console.log("data: ", serviceInfo);
  let price = serviceInfo.price * 100;
  price = Number(price.toFixed());

  const stripe = require("stripe")(
    "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"
  );
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "cad",
          product_data: { name: serviceInfo.name },
          unit_amount: price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url:
      "https://squareup.com/appointments/book/3mxfn22nd0pclk/LATYFHKVG6P0T/start",
    cancel_url: "https://eselection.net/",
  });
  console.log(`link: ${session.url}`);
  console.log("end");
  return session.url;
});

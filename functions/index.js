const functions = require("firebase-functions");

exports.checkout = functions.https.onCall(async (data, context) => {
  console.log("start");
  const stripe = require("stripe")(
    "sk_test_51LUaNSLJrqrrGncPioqPMrSTFRVNem0JJPJDfIDUHSaYBWEDlAOtuzBpkIw1Q6ictF5cwApTd5kbuOUEk8PA7G0200b4L5al9k"
  );
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "cad",
          product_data: { name: "Book an appointment" },
          unit_amount: 20000,
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

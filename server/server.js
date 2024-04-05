const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51P1Tp0SFod5TIEmUNTY8Y0QlSYz7tJ8GhA4TEP3jM107VYWcPQGkDGu9Ez5Y1vyeZrfzdT8zgwwE6F7kPqRnepm500Xs007fNs"
);

app.use(express.json());
app.use(cors());

app.post("/api/create-checkout-session", async (req, res) => {
    const products = req.body;

    // console.log(products);

    // Create line items array
    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.name,
            },
            unit_amount: product.price, // Amount in smallest currency unit (cents)
        },
        quantity: product.amount,
    }));

    try {
        // Create checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/cart",
            cancel_url: "http://localhost:3000/cancel",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: "Failed to create checkout session" });
    }
});

app.listen(8000, () => {
    console.log("Server started on port 8000");
});

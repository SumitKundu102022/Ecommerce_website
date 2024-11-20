require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const AuthRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");

const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");

const commonFeatureRouter = require("./routes/common/feature-routes");

const dbUrl = process.env.DB_URL;

mongoose
  .connect(
    dbUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to the MongoDB database successfully!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_BASE_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "cache-control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", AuthRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shopping/products", shopProductsRouter);
app.use("/api/shopping/cart", shopCartRouter);
app.use("/api/shopping/address", shopAddressRouter);
app.use("/api/shopping/order", shopOrderRouter);
app.use("/api/shopping/search", shopSearchRouter);
app.use("/api/shopping/review", shopReviewRouter);

app.use("/api/common/feature", commonFeatureRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

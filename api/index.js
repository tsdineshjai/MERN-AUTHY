import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

mongoose
	.connect(
		"mongodb+srv://tsdineshjai:AIeDCsrvhydUKBoR@mern-auth.kvn3ghi.mongodb.net/?retryWrites=true&w=majority"
	)
	.then(() => {
		console.log(`database connection is successful`);
	})
	.catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
	console.log(`Server listening on port 3000!!`);
});

app.use(express.json());
//This allows the post method to be recieved by the server.

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err,req,res,next) => {
	const statuscode = err.statusCode || 500;
	const errorMessage = err.message || 'Internal serval error';
	return res.status(statuscode).json({
		sucess: "will happen",
		statuscode,
		errorMessage,
	});
} )
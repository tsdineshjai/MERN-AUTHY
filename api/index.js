import express from "express";
import mongoose from "mongoose";

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

console.log(process.env.HELLO);

import User from "../models/user.modal.js";
import bcryptjs from "bcryptjs";

const signup = async (req, res) => {
	console.log(req.body);
	const { username, email, password } = req.body;
	const hashedPassword = bcryptjs.hashSync(password, 10);
	const newUser = new User({ username, email, password: hashedPassword });
	try {
		await newUser.save();
		res.status(201).json({ Status: "message succesfuly saved" });
	} catch (error) {
		res.status(500).json({ status: "duplicate username has been detected" });
	}
};

export default signup;

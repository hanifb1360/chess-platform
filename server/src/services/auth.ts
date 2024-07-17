import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User";

const generateToken = (user: any) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });
};

const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();
  const token = generateToken(newUser);
  return { user: newUser, token };
};

const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid login credentials");
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error("Invalid login credentials");
  }
  const token = generateToken(user);
  return { user, token };
};

export { generateToken, registerUser, loginUser };

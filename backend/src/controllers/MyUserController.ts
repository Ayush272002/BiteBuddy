import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
  // 1. check if the user already exists in the database
  // 2. if it doesnt create the user
  // 3. return the user object to the client

  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {

      //might need to change this to return the user object to 
      // return res.status(200).json({ message: "User already exists" });
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser.toObject());
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error occurred while creating user" });
  }
};

export default {
  createCurrentUser,
};

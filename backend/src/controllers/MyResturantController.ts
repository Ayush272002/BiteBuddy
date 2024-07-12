import { Request, Response } from "express";
import Resturant from "../models/resturant";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

const createMyResturant = async (req: Request, res: Response) => {
  try {
    const existingRestaurant = await Resturant.findOne({ user: req.userId });

    if (existingRestaurant) {
      return res.status(409).json({ message: "You already have a resturant" });
    }

    const image = req.file as Express.Multer.File;
    const base64Image = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64,${base64Image}`;

    const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);

    const resturant = new Resturant(req.body);
    resturant.imageUrl = uploadResponse.url;
    resturant.user = new mongoose.Types.ObjectId(req.userId);
    resturant.lastUpdated = new Date();
    await resturant.save();

    res.status(201).send(resturant);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default { createMyResturant };

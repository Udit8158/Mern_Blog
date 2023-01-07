import express from "express";

const userRoute = express();

userRoute.route("/:userId").get();

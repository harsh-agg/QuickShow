import express from "express";
import { getFavorites, getUserBookings, updateFavorite } from "../controllers/userController.js";
import { clerkMiddleware, getAuth } from "@clerk/express";

const userRouter = express.Router();
userRouter.use(clerkMiddleware());

userRouter.get('/bookings', getUserBookings)
userRouter.post('/update-favorite', updateFavorite)
userRouter.get('/favorites', getFavorites)

export default userRouter;

// import express from "express";
// import { requireAuth } from "@clerk/express";

// import {
//   getFavorites,
//   getUserBookings,
//   updateFavorite
// } from "../controllers/userController.js";

// const userRouter = express.Router();

// userRouter.get('/bookings', requireAuth(), getUserBookings);

// userRouter.post('/update-favorite', requireAuth(), updateFavorite);

// userRouter.get('/favorites', requireAuth(), getFavorites);

// export default userRouter;
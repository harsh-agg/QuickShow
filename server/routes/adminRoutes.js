import express from "express";
import { clerkMiddleware } from "@clerk/express";
import { protectAdmin } from "../middleware/auth.js";
import { getAllBookings, getAllShows, getDashboardData, isAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router();
adminRouter.use(clerkMiddleware());

adminRouter.get('/is-admin',protectAdmin, isAdmin)
adminRouter.get('/dashboard', protectAdmin, getDashboardData)
adminRouter.get('/all-shows', protectAdmin, getAllShows)
adminRouter.get('/all-bookings', protectAdmin, getAllBookings)

export default adminRouter;
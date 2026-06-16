import mongoose from "mongoose";
import dotenv from "dotenv";
import Movie from "./models/Movie.js";
import Show from "./models/Show.js";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing data (optional, for a clean test environment)
    await Movie.deleteMany({});
    await Show.deleteMany({});
    console.log("🗑️ Cleared existing movies and shows");

    // Create sample movies and shows
    // ---- Inception ----
    const inception = await Movie.create({
      _id: "27205",
      title: "Inception",
      overview: "A thief who steals corporate secrets through the use of dream-sharing technology.",
      poster_path: "/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      genres: [{ id: 28, name: "Action" }, { id: 878, name: "Science Fiction" }],
      casts: [],
      release_date: "2010-07-16",
      original_language: "en",
      tagline: "Your mind is the scene of the crime.",
      vote_average: 8.3,
      runtime: 148,
    });
    console.log("🎬 Created movie Inception", inception._id);

    const tomorrow1 = new Date();
    tomorrow1.setDate(tomorrow1.getDate() + 1);
    tomorrow1.setHours(19, 0, 0, 0);
    const show1 = await Show.create({
      movie: inception._id,
      showDateTime: tomorrow1,
      showPrice: 12.5,
      occupiedSeats: {},
    });
    console.log("🎟️ Created show for Inception", show1._id);

    // ---- The Matrix ----
    const matrix = await Movie.create({
      _id: "603",
      title: "The Matrix",
      overview: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
      poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      backdrop_path: "/ncEsesgOJDNrTUED89hYbA117wo.jpg",
      genres: [{ id: 28, name: "Action" }, { id: 878, name: "Science Fiction" }],
      casts: [],
      release_date: "1999-03-30",
      original_language: "en",
      tagline: "Free your mind.",
      vote_average: 8.7,
      runtime: 136,
    });
    console.log("🎬 Created movie The Matrix", matrix._id);

    const tomorrow2 = new Date();
    tomorrow2.setDate(tomorrow2.getDate() + 2);
    tomorrow2.setHours(20, 0, 0, 0);
    const show2 = await Show.create({
      movie: matrix._id,
      showDateTime: tomorrow2,
      showPrice: 13.5,
      occupiedSeats: {},
    });
    console.log("🎟️ Created show for The Matrix", show2._id);

    console.log("✅ Seed data inserted successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error", err);
    process.exit(1);
  }
};

seed();

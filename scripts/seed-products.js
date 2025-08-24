// File: scripts/seed.js

const { MongoClient } = require('mongodb');
const path = require('path');
// .env.local ফাইল থেকে ভ্যারিয়েবল লোড করার জন্য dotenv ব্যবহার করা হচ্ছে
require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });

// আপনার ডেটাবেস কানেকশন স্ট্রিং
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('Please add your MONGODB_URI to .env.local');
}
const client = new MongoClient(uri);

// আপনার প্রোডাক্টের সম্পূর্ণ এবং সঠিক তালিকা
const products = [
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5d4",
      "name": "Clay Storage Jar",
      "description": "A large and sturdy clay storage jar, ideal for keeping grains, pickles, or other kitchen staples fresh. Its traditional design adds a rustic touch to your pantry.",
      "price": 48,
      "image": "https://i.ibb.co/hRBPFr9N/Clay-Storage-Jar.jpg",
      "usage": "Perfect for storing dry goods like rice, lentils, or spices. The clay helps in keeping the contents cool and free from moisture. Ensure the lid is secure."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5d2",
      "name": "Clay Bird House",
      "description": "Invite nature into your garden with this charming clay birdhouse. It provides a safe and cozy shelter for small birds, adding life and beauty to your outdoor space.",
      "price": 32,
      "image": "https://i.ibb.co/qLTRfc4n/Clay-Bird-House.webp",
      "usage": "Place in a quiet, sheltered spot in your garden or balcony. Clean it out once a year during the off-nesting season to welcome new birds."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5c7",
      "name": "Decorative Lamp",
      "description": "Illuminate your home with this exquisite clay lamp. Its intricate cutwork casts beautiful patterns, creating a warm and inviting ambiance for any festive occasion.",
      "price": 30,
      "image": "https://i.ibb.co/Ps7BqJMd/Decorative-Lamp.jpg",
      "usage": "Place a tea light or a small LED candle inside to create a beautiful shadow play. Handle with care as the cutwork is delicate. Keep away from flammable materials."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5cd",
      "name": "Earthen Water Bottle",
      "description": "Stay hydrated with this eco-friendly earthen water bottle. It keeps water naturally cool and fresh, providing a healthier alternative to plastic bottles.",
      "price": 16,
      "image": "https://i.ibb.co/mKzv8ym/Earthen-Water-Bottle.webp",
      "usage": "Fill with water and let it rest for a couple of hours for natural cooling. Hand wash with a soft brush and avoid using soap to maintain the clay's porous quality."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5c2",
      "name": "Ceramic Plate",
      "description": "This durable and stylish ceramic plate is perfect for daily use. Its minimalist design and smooth glaze make every meal feel special. Microwave and dishwasher safe.",
      "price": 15,
      "image": "https://i.ibb.co/zWBwzYHt/Ceramic-Plate.jpg",
      "usage": "Ideal for serving main courses or desserts. It is microwave and dishwasher safe, making it convenient for everyday use. Handle with care to avoid chipping the glaze."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5c3",
      "name": "Pottery Mug",
      "description": "Start your day with this unique, handcrafted pottery mug. Its comfortable grip and artisanal quality make it the perfect companion for your favorite hot beverage.",
      "price": 12,
      "image": "https://i.ibb.co/Ndk1F0XN/Pottery-Mug.webp",
      "usage": "Perfect for coffee, tea, or any hot beverage. Hand wash is recommended to preserve the unique glaze and texture. Not suitable for microwave use."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5c4",
      "name": "Flower Pot",
      "description": "A classic clay pot designed to provide an ideal environment for your indoor plants. Its porous material allows for proper aeration and moisture regulation, promoting healthy root growth.",
      "price": 20,
      "image": "https://i.ibb.co/27SvzDpd/Flower-Pot.webp",
      "usage": "Suitable for a variety of indoor plants like succulents and herbs. Ensure proper drainage by placing a small layer of gravel at the bottom before adding soil."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5c5",
      "name": "Clay Bowl",
      "description": "An eco-friendly and versatile clay bowl, perfect for serving salads, soups, or snacks. Its natural texture and simple design complement any table setting.",
      "price": 10,
      "image": "https://i.ibb.co/pjrcWRLz/Clay-Bowl.webp",
      "usage": "Great for serving dry snacks, fruits, or salads. To maintain its natural finish, avoid using harsh detergents and wash with a soft sponge and mild soap."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5c6",
      "name": "Earthen Jug",
      "description": "Experience the traditional way of storing water with this earthen jug. It naturally cools water and infuses it with a refreshing, earthy flavor.",
      "price": 18,
      "image": "https://i.ibb.co/gM2N0kLQ/Earthen-Jug.webp",
      "usage": "Before first use, soak the jug in water for 24 hours. Fill with drinking water and let it sit for a few hours to cool naturally. Clean regularly with a soft brush."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5c8",
      "name": "Clay Sculpture",
      "description": "A stunning, handcrafted clay sculpture that serves as a unique piece of art. This beautiful creation is sure to be a conversation starter in any room.",
      "price": 45,
      "image": "https://i.ibb.co/f5DgLN9/Clay-Sculpture.jpg",
      "usage": "Position as a centerpiece on a table or shelf. Dust regularly with a soft, dry cloth to maintain its intricate details. Avoid exposure to direct sunlight or moisture."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5c9",
      "name": "Serving Tray",
      "description": "A durable and elegant clay tray, perfect for serving drinks or appetizers. Its sturdy construction and rustic charm make it a great addition to your serveware collection.",
      "price": 22,
      "image": "https://i.ibb.co/nq8dMCvp/Serving-Tray.jpg",
      "usage": "Ideal for serving dry food items and drinks. To clean, wipe with a damp cloth. Do not soak in water or use in a dishwasher to protect its integrity."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5ca",
      "name": "Mini Pot Set",
      "description": "This charming set of three mini pots is perfect for small succulents or as decorative accents on a shelf or desk. A great way to add a touch of green to your space.",
      "price": 28,
      "image": "https://i.ibb.co/K4hVT1C/Mini-Pot-Set.jpg",
      "usage": "Perfect for planting small succulents, cacti, or air plants. Can also be used as holders for small items like paper clips or pins on your desk."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5cb",
      "name": "Clay Candle Holder",
      "description": "Create a cozy atmosphere with this rustic clay candle holder. Its simple yet elegant design enhances the beauty of candlelight, perfect for a relaxing evening.",
      "price": 14,
      "image": "https://i.ibb.co/v6ZQ3rDM/Clay-Candle-Holder.jpg",
      "usage": "Place a standard tea light or a small pillar candle in the holder. Always place on a heat-resistant surface and never leave a burning candle unattended."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5cc",
      "name": "Hand Painted Vase",
      "description": "A vibrant clay vase featuring traditional hand-painted motifs. Each vase is a unique piece of art, bringing color and culture to your home decor.",
      "price": 35,
      "image": "https://i.ibb.co/RG87D2dk/Hand-Painted-Vase.webp",
      "usage": "A perfect decorative item for side tables or shelves. To preserve the hand-painted details, clean gently with a soft, dry cloth and avoid harsh chemicals."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5ce",
      "name": "Clay Incense Holder",
      "description": "A beautifully handmade incense holder that adds a touch of tranquility to your space. Perfect for meditation, yoga, or simply creating a fragrant atmosphere.",
      "price": 9,
      "image": "https://i.ibb.co/zVT3TFb4/Clay-Incense-Holder.jpg",
      "usage": "Place an incense stick in the designated hole. The base will catch the falling ash. Clean after each use to prevent residue buildup."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5cf",
      "name": "Serving Bowl Set",
      "description": "This set of two versatile clay serving bowls is perfect for any occasion. Their classic design and durable construction make them a kitchen essential.",
      "price": 26,
      "image": "https://i.ibb.co/XrGRL1vw/Serving-Bowl-Set.jpg",
      "usage": "Ideal for individual portions of soup, cereal, or desserts. Hand wash is recommended. Avoid sudden temperature changes to prevent cracking."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5d0",
      "name": "Traditional Clay Plate",
      "description": "Enjoy your meals on this eco-friendly traditional clay plate. It's a healthy and sustainable choice that connects you with nature.",
      "price": 13,
      "image": "https://i.ibb.co/mKNjvnV/Traditional-Clay-Plate.jpg",
      "usage": "Best for serving dry to semi-dry food items. After washing, allow it to dry completely in the sun or open air to prevent mildew."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5d1",
      "name": "Clay Wall Hanging",
      "description": "Add an artistic touch to your walls with this handcrafted clay wall hanging. Its unique design and earthy tones create a focal point in any room.",
      "price": 40,
      "image": "https://i.ibb.co/j9FK3m1x/Clay-Wall-Hanging.jpg",
      "usage": "Hang on a secure hook in your living room, bedroom, or hallway. Dust periodically with a soft brush to keep it clean. Handle with care during installation."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5d3",
      "name": "Pottery Tea Set",
      "description": "This elegant pottery tea set, complete with a teapot and two cups, is perfect for sharing a quiet moment. Its timeless design enhances the tea-drinking experience.",
      "price": 55,
      "image": "https://i.ibb.co/kFyNsk0/Pottery-Tea-Set.jpg",
      "usage": "Rinse with warm water before first use. Ideal for brewing and serving tea. Hand wash gently after use and let it air dry completely."
    },
    {
      "_id": "65d8a3b3f8b9c2a1b0e6d5c1",
      "name": "Clay Vase",
      "description": "A beautifully handcrafted clay vase, featuring a rustic finish that adds a touch of earthy elegance to any space. Perfect for displaying fresh flowers or as a standalone decorative piece.",
      "price": 25,
      "image": "https://i.ibb.co/Qjxd1jTM/Clay-Vase.jpg",
      "usage": "Best used for displaying dry flowers or as a standalone art piece. To clean, gently wipe with a soft, dry cloth. Avoid direct contact with water for a long-lasting finish."
    }
];


async function seedDatabase() {
  try {
    // ডেটাবেসের সাথে কানেক্ট করুন
    await client.connect();
    console.log("Successfully connected to MongoDB.");

    const db = client.db("eartencanvas");
    const productsCollection = db.collection("products");

    // পুরানো সব প্রোডাক্ট মুছে ফেলুন
    await productsCollection.deleteMany({});
    console.log("Cleared existing products collection.");
    
    // নতুন প্রোডাক্টগুলো ডেটাবেসে যোগ করুন
    await productsCollection.insertMany(products);
    console.log(`${products.length} products have been successfully seeded.`);

  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    // কানেকশন বন্ধ করুন
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

seedDatabase();

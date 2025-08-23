// File: app/api/auth/[...nextauth]/route.js

import { handlers } from "@/auth"; // src/auth.js থেকে ইম্পোর্ট হচ্ছে
export const { GET, POST } = handlers;
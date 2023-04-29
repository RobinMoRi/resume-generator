import axios from "axios";

export const client = axios.create({
  headers: {
    post: {
      Accept: "application/json",
    },
    get: {
      Accept: "application/json",
    },
  },
});

// //Client for openAI API
// export const openAIClient = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_OPEN_AI_URL,
//     headers: {
//       post: {
//         Accept: "application/json",
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_AI_API_KEY}`,
//       },
//       get: {
//         Accept: "application/json",
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_AI_API_KEY}`,
//       },
//     },
//   });
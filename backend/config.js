// export const PORT = 5555;

// export const mongoDBURL =
//   'mongodb+srv://varunquanth0001:VhE01HkT89q5u8oC@cluster0.t4jif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const mongoDBURL = process.env.MONGODB_URL;

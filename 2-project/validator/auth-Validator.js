const { z } = require('zod');

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name should be at least 3 characters long" })
    .max(255, { message: "Name should be less than 256 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email should be at least 3 characters long" })
    .max(255, { message: "Email should be less than 256 characters" }),

  phone_no: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number should be at least 10 characters long" })
    .max(15, { message: "Phone number should be less than 15 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password should be at least 6 characters long" })
    .max(1024, { message: "Password should be less than 1024 characters" }),
});

module.exports = signupSchema; //Start taking notes from the next day

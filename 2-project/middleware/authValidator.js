const {z} = require('zod');

const signupSchema = z.object({
  username: z
  .string({required_error: "Name is required"})
  .trim()
  .min(3,{ msg: "Name should at least be of 3 characters"})
  .max(255,{ msg: "Name shold be lesser than 256 charecters"})
},
  {
   email: z
  .string({required_error: "Name is required"})
  .trim()
  .email({ msg: "email required"})
  .min(3,{ msg: "Name should at least be of 3 characters"})
  .max(255,{ msg: "Name shold be lesser than 256 charecters"})
},
  {
   phone_no: z
   .string({required_error: "phone_no required "}) 
   .trim()
   .min(10,{ msg: "phone_no min lenght should be minimum 10"})
   .max(15,{ msg: "phone_no min lenght should be minimum 15"})
  },
  {
   password: z
   .string({required_error: "passwprd is required "}) 
   .trim()
   .min(6,{ msg: "pass min lenght should be minimum 6"})
   .max(1024,{ msg: "pass min lenght should be minimum 1024"})
  }
)
 module.exports = signupSchema;

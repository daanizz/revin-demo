import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


import {createUser,deleteUserById,fetchUsers,findUserByIdentifier} from "./auth.repository.js";

export const addUser = async (userData) => {
  const hashPassword=await bcrypt.hash(userData.password,10);
  userData={...userData,password:hashPassword,phone:phone.replace(/\D/g,"").slice(-10)};
  return createUser(userData);
};

export const removeUser = async (id) => {
  return deleteUserById(id);
};

export const getAllUsers=async()=>{
  return fetchUsers();
}

// export const loginUserService = async (email, password) => {
//   const user = await getUser(email);

//   if (!user) {
//     throw new Error("User not found");
//   }

//   const isMatch = await bcrypt.compare(password, user.password);

//   if (!isMatch) {
//     throw new Error("Invalid password");
//   }

//   const token = jwt.sign(
//     {
//       id: user._id,
//       role: user.role,
//     },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "7d",
//     }
//   );

//   return {user,token,};
// };

export const loginUserService = async (identifier,password) => {
  const user = await findUserByIdentifier(identifier);
  console.log(user)

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = await bcrypt.compare(password,user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  

  const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );
  return {user,token};
};
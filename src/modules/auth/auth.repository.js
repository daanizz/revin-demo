import User from "../../models/User.model.js";

export const createUser = async (userData) => {
  return User.create(userData);
};

export const deleteUserById = async (id) => {
  return User.findByIdAndDelete(id);
};

export const fetchUsers=async()=>{
    return User.find();
}

export const getUser=async(email)=>{
  return User.findOne({email});
}
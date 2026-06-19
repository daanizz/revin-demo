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

export const findUserByIdentifier = async (identifier) => {
  return User.findOne({
    $or: [
      { email: identifier },
      { phone: identifier.replace(/\D/g,"").slice(-10) },
    ],
  });
};
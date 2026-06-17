
import {addUser,removeUser, getAllUsers, loginUserService} from "./auth.service.js";

export const createUser =
  async (req, res) => {
    try {
      const user =await addUser(req.body);

      res.status(201).json({success: true,data: user,});
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

export const deleteUser =
  async (req, res) => {
    try {
      const user = await removeUser(req.params.id);

      if (!user) {
        return res.status(404).json({success: false, message:"User not found"});
      }

      res.json({success: true, message:"User deleted successfully",});
    }
    catch (error) {
      res.status(500).json({success: false, message: error.message,});
    }
  };

  export const getUsers=async(req,res)=>{
    try {
        const users=await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
  };

  export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await loginUserService(email,password);

    res.status(200).json({
      success: true,
      token: result.token,
      user: {
        id: result.user._id,
        name: result.user.name,
        email: result.user.email,
        role: result.user.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
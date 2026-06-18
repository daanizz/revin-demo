import { Router } from "express";

import {createUser,deleteUser,getUsers, loginUserController} from "./auth.controller.js";


import {validateCreateUser, validateLoginUser} from "./auth.validator.js";
import { isAdmin } from "../../middlewares/authorize.middleware.js";
import {authenticate} from "../../middlewares/authenticate.middleware.js"

const router = Router();

router.post("/",authenticate, isAdmin, validateCreateUser, createUser);

router.post("/login", validateLoginUser, loginUserController);

router.delete("/:id", deleteUser);

router.get("/",getUsers)

export default router;
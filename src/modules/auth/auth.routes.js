import { Router } from "express";

import {createUser,deleteUser,getUsers, loginUserController} from "./auth.controller.js";


import {validateCreateUser, validateLoginUser} from "./auth.validator.js";

const router = Router();

router.post("/", validateCreateUser, createUser);

router.post("/login", validateLoginUser, loginUserController);

router.delete("/:id", deleteUser);

router.get("/",getUsers)

export default router;
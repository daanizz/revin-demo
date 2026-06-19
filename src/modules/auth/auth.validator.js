import { z } from "zod";

export const validateCreateUser = (req, res, next) => {
  const schema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["admin", "agronomist", "farmer"]),
    phone: z
      .string()
      .regex(/^(\+91[\s-]?)?[6-9]\d{9}$/, "Invalid phone number"),
  });

  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({success: false,errors: result.error.issues,});
  }

  next();
};


export const validateLoginUser = (req, res, next) => {
  const schema = z.object({
    identifier: z.string().refine(
      (value) => z.email().safeParse(value).success || /^(\+91[\s-]?)?[6-9]\d{9}$/.test(value),
      {message: "Must be a valid email or phone number"}
    ),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({success: false,message: result.error.issues,});
  }
  console.log("valok")

  next();
};
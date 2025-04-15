import { z as zod } from "zod";

export const userSchema = {
  body: zod.object({
    name: zod.string().min(1),
    email: zod.string().email(),
    password: zod.string().min(6),
    role: zod.enum(["HR", "EMPLOYEE"]),
    position: zod.string().min(1),
    departement: zod.string().min(1),
  }),
  params: zod.object({
    id: zod.string(),
  }),
};

//zod pada backend digunakan pada create dan update

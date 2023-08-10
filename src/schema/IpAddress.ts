import { z } from "zod";

export const IpAddressSchema = z
  .string()
  .refine((value) => /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(value), {
    message: "Invalid IP Address",
  });

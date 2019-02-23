import { resolve } from "path";
import express from "express";

const { cwd } = process;

export default app => {
  app.use(express.static(resolve(cwd(), "public")));
};

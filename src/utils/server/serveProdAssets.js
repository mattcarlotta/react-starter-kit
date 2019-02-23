import { resolve } from "path";
import express from "express";

const { cwd } = process;

//= =============================================================================//
// SERVE PRODUCTION ASSETS                                                        /
//= =============================================================================//

export default app => {
  app.use(express.static(resolve(cwd(), "public")));
};

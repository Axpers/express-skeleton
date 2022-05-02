import { UsersController } from "./usersController";
import express from "express";
import { Router } from "express-serve-static-core";

export class MainRouter {
  private mainRouter: Router;
  private usersController: UsersController;

  constructor() {
    this.usersController = new UsersController();

    this.mainRouter = express
      .Router()
      .get("/", (req, res) => {
        res.send("Health ok !");
      })
      .use("/users", this.usersController.getRouter());
  }

  getRouter() {
    return this.mainRouter;
  }
}

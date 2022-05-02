import express from "express";
import { Router } from "express-serve-static-core";
import { UsersService } from "./../services/usersService";

export class UsersController {
  private usersService: UsersService;
  private router: Router;

  constructor() {
    this.usersService = new UsersService();
    this.router = express.Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.router
      .get("/", (req, res) => {
        res.send(this.usersService.getUsers());
      })
      .get("/:id", (req, res) => {
        res.send(this.usersService.getUser(Number(req.params.id)));
      });
    // .delete("/:id", (ctx) => {
    //   this.usersService.deleteUser(Number(ctx.params.id));
    //   ctx.response.body = null;
    // })
    // .post("/", async (ctx) => {
    //   const { value } = ctx.request.body({ type: "json" });
    //   const user = await value;
    //   this.usersService.addUser(user);
    //   ctx.response.body = user;
    // });
  }

  getRouter() {
    return this.router;
  }
}

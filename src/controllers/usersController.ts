import express from "express";
import { Router } from "express-serve-static-core";
import { UsersService } from "./../services/usersService";

export class UsersController {
  private usersService: UsersService;
  private router: Router;

  constructor() {
    this.usersService = new UsersService();
    this.router = express.Router();
    this.initMiddlewares();
    this.initRoutes();
  }

  private initRoutes() {
    this.router
      .get("/", (req, res) => {
        res.send(this.usersService.getUsers());
      })
      .get("/:id", (req, res) => {
        res.send(this.usersService.getUser(Number(req.params.id)));
      })
      .delete("/:id", (req, res) => {
        this.usersService.deleteUser(Number(req.params.id));
        res.send(null);
      })
      .post("/", (req, res) => {
        const user = req.body;
        this.usersService.addUser(user);
        res.send(user);
      });
  }

  private initMiddlewares() {
    const logger = (req, res, next) => {
      console.log("Test middleware");
      next();
    };

    this.router.use(logger);
  }

  getRouter() {
    return this.router;
  }
}

import "reflect-metadata";
import "dotenv/config";
import express, { NextFunction, Request, Response, Application } from "express";
import "express-async-errors";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { errors } from "celebrate";
import routes from "./routes";
import AppError from "../../errors/AppError";
import "@shared/container";
import logger from "@config/logger";

// import '@shared/typeorm';
// import { connect } from '../typeorm';

import * as database from "../../../config/database";

export class SetupServer {
  private app: Application;

  constructor(private port = 3000) {
    this.app = express();
  }

  public async init() {
    this.setupExpress();
  }

  private setupExpress(): void {
    this.app.use(
      cors({
        origin: "*",
      })
    );
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(routes);
    this.app.use(errors());
    this.app.use(
      (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction
      ) => {
        if (error instanceof AppError) {
          return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
          });
        } else {
          logger.info("Error: " + error);
          return response.status(500).json({
            status: "error",
            message: "Internal server error",
          });
        }
      }
    );
    this.app.use(helmet());
    this.app.use(compression());
  }

  private async databaseSetup(): Promise<void> {
    // await connect;
    const esse = await database.connect();
  }

  public async start(): Promise<void> {
    await this.databaseSetup();

    this.app.listen(this.port, () => {
      logger.info("Server rodando na porta: " + this.port + " 🚀");
    });
  }

  public getApp(): Application {
    return this.app;
  }
}

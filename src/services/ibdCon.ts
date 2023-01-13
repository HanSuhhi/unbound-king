import { Connection } from "jsstore";
import workerInjector from "jsstore/dist/worker_injector";

export const connection = new Connection();
connection.addPlugin(workerInjector);

import { Router } from "express";

const memberRouter = Router();
memberRouter.post("/", createMember);
export default memberRouter;

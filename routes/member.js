import { Router } from "express";
import { createMember } from "../actions/member.js";

const memberRouter = Router();
memberRouter.post("/members/create", createMember);
export default memberRouter;

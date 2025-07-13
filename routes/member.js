import { Router } from "express";
import { createMember } from "../actions/member.js";
import { getMembers } from "../actions/member.js";
import { deleteMember } from "../actions/member.js";
import { memberView } from "../actions/member.js";
import { updateMember } from "../actions/member.js";

const memberRouter = Router();
memberRouter.post("/members/create", createMember);
memberRouter.get("/members/all", getMembers);
memberRouter.get("/members/view/:id", memberView);
memberRouter.delete("/members/delete/:id", deleteMember);
memberRouter.put("/members/update/:id", updateMember);
export default memberRouter;

import Member from "../models/member.js";
async function createMember(req, res) {
  try {
    let data = req.body;

    // console.log(req.body.memberName);
    // return false;
    // // this wont executre whauahaha
    const member = new Member({
      memberName: data.memberName,
      gender: data.gender,
    });
    await member.save();
    res.send({
      success: true,
      message: "SUCKSEXFULLY DATA ACCUMULATED INTO THE DATABASE!!!",
    });
  } catch (error) {
    console.log(error);
  }
}
export { createMember };

// "use server";
// import { Member } from "../models/memberModel";

// import dbConnect from "@/app/backend/db/dbConnect";

// async function createMember(data) {
//   await dbConnect();
//   const member = new Member({
//     memberName: data.memberName,
//     gender: data.gender,
//   });
//   await member.save();

//   console.log(member);
//   return member.toString();
// }
// export { createMember };

// these are just for reading and references....

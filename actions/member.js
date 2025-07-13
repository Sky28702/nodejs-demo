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

async function getMembers(req, res) {
  try {
    const allMember = await Member.find({}).sort({ createdAt: -1 });

    res.send({
      data: allMember,
      success: true,
      message: "here is list if every member",
    });
  } catch (error) {
    console.log(error);
  }
}

async function memberView(req, res) {
  try {
    const { id } = req.params;
    const memberView = await Member.findById(id);
    res.send({
      data: memberView,
      success: true,
      message: "Member is here",
    });
  } catch (error) {
    console.log(error);
  }
}

async function deleteMember(req, res) {
  try {
    const { id } = req.params;
    await Member.findByIdAndDelete(id);

    res.send({
      success: true,
      message: "Member is deleted",
    });
  } catch (error) {
    console.log(error);
  }
}
async function updateMember(req, res) {
  let member = {
    memberName: req.body.memberName,
    gender: req.body.gender,
  };
  try {
    const { id } = req.params;
    const updatedMember = await Member.findByIdAndUpdate(id, member);
    res.send({
      data: updateMember,
      success: true,
      message: "data is updated",
    });
  } catch (error) {
    console.log(error);
  }
}

export { createMember, getMembers, deleteMember, memberView, updateMember };

// async function deleteItem(id) {
//   await Product.findByIdAndDelete(id);
//   console.log(`Item ${id} deleted`);
//   return deleteItem;
// }

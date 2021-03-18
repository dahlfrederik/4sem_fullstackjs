import { Router } from "express";
const router = Router();
import facade from "../facades/DummyDB-facade";
import { IFriend } from "../interfaces/IFriend";

//import authMiddleware from "../middleware/bacic-auth";
//router.use(authMiddleware);

router.get("/all", async (req: any, res) => {
  const friends = await facade.getAllFriends();
  const friendsDTO = friends.map((friend) => {
    const { firstName, lastName } = friend;
    return { firstName: firstName, lastName }; //Two ways, the silly way, and the easy way
  });
  res.json(friendsDTO);
});

router.get("/findby-username/:userid", async (req, res, next) => {
  const userId = req.params.userid;

  const friend = await facade.getFrind(userId);
  if (friend == null) {
    throw new Error("user not found");
  }
  const { firstName, lastName, email } = friend;
  const friendDTO = { firstName, lastName, email };
  res.json(friendDTO);
});

export default router;

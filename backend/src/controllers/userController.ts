import { Request, Response } from "express";
import { updateUserSchema} from "../types";
import { User } from "../db";
import { hashSync } from "bcryptjs";

export const updateUser = async (req: Request, res: Response) => {
  // validate update body via zod
  const { success } = updateUserSchema.safeParse(req.body);

  if (!success) {
    res.status(411).json({
      msg: "inputs are too small",
    });
    return;
  }

  // update it in mdb using its update query

  try {
    const { password } = req.body;

    if (password) {
      const hashPass = hashSync(password, 10);
      const updateBody = { ...req.body, password: hashPass };
      await User.updateOne({ _id: res.locals.userId }, updateBody);
    } else {
      await User.updateOne({ _id: res.locals.userId }, req.body);
    }

    res.json({
      msg: "user info updated successfully",
    });
    return;
  } catch (error) {
    console.log(
      "im the error you see when trying to edit user information to db",
      error
    );
    return;
  }
};

export const getUser = async (req: Request, res: Response) => {
  // update it in mdb using its update query

  try {
    const user = await User.findById(res.locals.userId)

    if (!user) {
      res.status(401).json({
        msg: "unauthorized"
      })
      return;
    }

    const {username, firstName, lastName} = user;

    res.json({
      user : {
        username, firstName, lastName
      }
    });

    return;

  } catch (error) {
    console.log(
      "im the error you see when trying to edit user information to db",
      error
    );
    return;
  }
};

export const findUsers = async (req: Request, res: Response) => {
  const filter = req.query.filter || ""; //if query has a filter or else no filter is assigned

  try {
    const users = await User.find({
      $or: [
        {
          firstName: {
            $regex: filter,
          },
        },
        {
          lastName: {
            $regex: filter,
          },
        },
      ],
    });

    res.json({
      users: users.map((user) => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        userId: user._id,
      })),
    });
  } catch (error) {
    console.log("im the error u see when fetching queried users", error);
    return;
  }
};

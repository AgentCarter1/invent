import { Request, Response } from "express";
import UserService from "../services/user.service";
import CustomException from "../errors/custom-exception";

export const listUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getUserById(Number(req.params.id));
    res.json(user);
  } catch (error) {
    if (error instanceof CustomException) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while fetching the user." });
    }
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const user = await UserService.createUser(name);
    res.status(201).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the user." });
  }
};

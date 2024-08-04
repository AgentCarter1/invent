import User from "../models/user.model";
import CustomException from "../errors/custom-exception";

class UserService {
  async getAllUsers() {
    return User.findAll({
      attributes: ["id", "name"],
    });
  }

  async getUserById(id: number) {
    const user = await User.findByPk(id, {
      attributes: ["id", "name"],
    });
    if (!user) {
      throw new CustomException(404, "User not found.");
    }
    return user;
  }

  async createUser(name: string) {
    return User.create({ name });
  }
}

export default new UserService();

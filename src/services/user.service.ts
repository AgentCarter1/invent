import User from "../models/user.model";
import CustomException from "../errors/custom-exception";

class UserService {
  private readonly attributes: Array<keyof User> = ["id", "name"];

  async getAllUsers() {
    return User.findAll({
      attributes: this.attributes,
    });
  }

  async getUserById(id: number) {
    const user = await User.findByPk(id, {
      attributes: this.attributes,
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

import User from "../models/user.model";

class UserService {
  async getAllUsers() {
    return User.findAll({
      attributes: ["id", "name"],
    });
  }

  async getUserById(id: number) {
    return User.findByPk(id, {
      attributes: ["id", "name"],
    });
  }

  async createUser(name: string) {
    return User.create({ name });
  }
}

export default new UserService();

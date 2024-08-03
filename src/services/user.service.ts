import User from "../models/user.model";

class UserService {
  async getAllUsers() {
    return User.findAll();
  }

  async getUserById(id: number) {
    return User.findByPk(id);
  }

  async createUser(name: string) {
    return User.create({ name });
  }
}

export default new UserService();

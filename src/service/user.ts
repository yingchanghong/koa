class userService {
  async createUser(name: any, password: any) {
    return '写入成功';
  }
}

module.exports = new userService();

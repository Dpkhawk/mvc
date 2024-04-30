import User, { UserType } from '../models/models';

class UserRepository {
  async getAllUsers() {
    const result = await User.find();
    return result;
  }

  async getUserById(id: string) {
    const result = await User.findById(id);
    return result;
  }
  async deleteUser(id:string){
    const result= await User.findByIdAndDelete(id);
    return result;
  }
  async createuser(data:UserType){
    
    const result=await User.create(data);
    return result;
  }
  async updateUser(id:string, data:UserType){
    const result=await User.findByIdAndUpdate(id, data);
    return result;
  }
  async checkUser(email:string){
    
    const result=await User.findOne({ email:email });
    return result;
  }
}

export default new UserRepository();


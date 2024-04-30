
import { UserType } from '../models/models';
import userRepository from '../repository/userRepository';

class UserServices {
  async getAllUser() {
    const result = await userRepository.getAllUsers();
    return result;
  }

  async getUserById(id: string) {
    const result = await userRepository.getUserById(id);
    return result;
  }
  async deleteUser(id:string){
    const result=await userRepository.deleteUser(id);
    return result; 
  }
  async createUser(data:UserType){
    const result1=await userRepository.checkUser(data.email);
    
    if(result1){
      return 'User Already Existed';
    }
    else{
      
      const result= await userRepository.createuser(data);
      return result;
    }
  }
  async updateUser(id:string, data:UserType){
    const result=await userRepository.updateUser(id, data);
    if(result){
      return result;
    }
    return;
  }
}

export default new UserServices();

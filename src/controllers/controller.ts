import { Request, Response } from 'express';
import UserServices from '../services/userServices';

class Products {
  async getAllUsers(req: Request, res: Response) {
    try {
      if (req.params.id) {
        const result = await UserServices.getUserById(req.params.id);
        if(result){
          res.send(result);
        }
        else{
          res.status(404).send('User Not Found');
        }  
      } else {
        const result = await UserServices.getAllUser();
        if(result){
          res.send(result);
        }
        else{
          res.status(404).send('User Not Found');
        }
      }
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  }
  async deleteUsers(req:Request, res:Response){
    try{
      const result=await UserServices.deleteUser(req.params.id);
      if(result){
        res.send('Deleted Successfully');
      }
      else{
        res.status(404).send('User not found');
      }
    }
    catch(error){
      res.status(500).send('Internal Server Error');
    }
  }
  async createUser(req:Request, res:Response){
    try{ 
      const result=await UserServices.createUser(req.body);
      if(result==='User Already Existed'){
        res.status(409).send(result);
      }
      else{
        res.status(201).send('Created Successfully');
      }
    }
    catch(error){
      res.status(500).send('Internal Server Error');
      
    }
  }
  async updateUser(req:Request, res:Response){
    try{
      const result=await UserServices.updateUser(req.params.id, req.body);
      
      if(result){
        res.status(201).send('Updated Successfully');
      }
      else{
        res.status(404).send('User Not Found');
      }
    }
    catch(error){
      res.status(500).send('Internal Server Error');
    }
  }
}

export default Products;

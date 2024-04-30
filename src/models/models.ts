import mongoose, { Schema, Document } from 'mongoose';

export interface UserType extends Document {
  UserName: string
  email:string
  dob:string
  mobileNumber:string
  gender:string
  address:string
  password:string
  zipcode:string
  district:string
}

const userSchema: Schema = new Schema({
  UserName: {
    type: String,
  },
  email:{
    type:String,
  },
  dob:{
    type:String,
  },
  mobileNumber:{
    type:String,
  },
  gender:{
    type:String,
  },
  address:{
    type:String,
  },
  password:{
    type:String,
  },
  zipcode:{
    type:String,
  },
  district:{
    type:String,
  },
});

const UserModel = mongoose.model<UserType>('Logins', userSchema);

export default UserModel;

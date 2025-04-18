import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique : true, 
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

//pre save middleware/hook -> will work on creat() save () function , save howar age act kore
userSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook : we will save the data');
  //hashing password and save into DB
  const user = this; //this refers to document
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

//post save middleware/  hook empty string after saving password 
userSchema.post('save', function (doc, next) {
  doc.password = '';
  console.log('password has been hashed and cleared');
  next();
});

export const User = model<TUser>('User', userSchema);

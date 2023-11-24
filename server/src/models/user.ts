import { Model, Schema, model } from 'mongoose';
import { hash, genSalt, compare } from 'bcrypt';
import validator from 'validator';


interface IUser {
    _id: string,
    email: string,
    password: string,
}
interface UserModel extends Model<IUser> {
    signup(email: string, password: string): Promise<IUser>;
    login(email: string, password: string): Promise<IUser>;

}
const userSchema = new Schema<IUser, UserModel>({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

// static signup method

userSchema.statics.signup = async function (email: string, password: string) {
    if (!email || !password) throw Error("Email and password are required");
    const exist = await this.findOne({ email });
    if (exist) throw Error("User already exist");
    if (!validator.isEmail(email)) throw Error("Email is not valid");
    if (!validator.isStrongPassword(password)) throw Error("Password is not strong enough");
    const salt = await genSalt(10);
    const hashPass = await hash(password, salt);
    const user = await this.create({ email, password: hashPass });
    return user;
};
// static login  method
userSchema.statics.login = async function (email: string, password: string) {
    if (!email || !password) throw Error("Email and password are required");
    const user = await this.findOne({ email });
    if (!user) throw Error("In correct Email");
    const match = await compare(password, user.password);
    if (!match) throw Error("In correct password");
    return user;
    // const user = await this.findOne({ email, password: hashPass });
};


export default model<IUser, UserModel>("User", userSchema);
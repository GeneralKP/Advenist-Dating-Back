import { Collection, ObjectId } from 'mongodb';

export interface User {
  _id: ObjectId;
  name: string;
  lastName: string;
  birthDate: Date;
  country: ObjectId;
  matches: ObjectId[];
  likes: number;
}

export interface Country {
  _id: ObjectId;
  name: string;
}

export interface Database {
  users: Collection<User>;
  countries: Collection<Country>;
}

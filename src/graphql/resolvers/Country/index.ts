import { ObjectId } from "mongodb";
import { IResolvers } from "apollo-server-express";
import { Database, Country } from '../../../lib/types';

export const countryResolvers: IResolvers = {
    Query: {
        countries: async(_root: undefined, _args: {}, { db }: { db: Database }): Promise<Country[]> => {
            return await db.countries.find({}).toArray();
        }
    },
    Country: {
        id: (country: Country): string => country._id.toString()
    }
}
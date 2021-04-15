import merge from "lodash.merge";
import { userResolvers } from "./User";
import { countryResolvers } from "./Country"

export const resolvers = merge(userResolvers, countryResolvers);
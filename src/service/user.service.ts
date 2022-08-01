import { DocumentDefinition } from "mongoose";
import userModel, { UserDocument } from "../models/users.models";

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    return await userModel.create(input);
  } catch (error: any) {
    throw new Error(error.message);
  }
}

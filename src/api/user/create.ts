import { requestor } from "..";

export const createUser = async (email: string) => (await requestor.post(`user`,{email})).data
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAcount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (userAcount) {
        //call another method
        return this.loging({ email, password });
      } else {
        return userAcount;
      }
    } catch (error) {
      throw error;
    }
  }

  async loging({ email, password }) {
    try {
      await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite serive :: getCurreentUser :: error ", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions()
    } catch (error) {
      console.log("appwrite serive :: getCurreentUser :: error ", error); 
    }
  }
}

const authService = new AuthService();
export default authService;

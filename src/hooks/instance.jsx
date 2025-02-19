import axios from "axios";
import { REQUEST, TOKEN } from "./GetEnv";


export const instance = () => axios.create({baseURL:REQUEST, headers:{Authorization:`Bearer ${TOKEN}`}})
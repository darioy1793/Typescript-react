import axios from "axios";

export const reqResApi = axios.create({
    baseURL: "https://reqres.in/api",
    headers: {
        "x-api-key": "reqres_82d8b0b175ac45d5b4289aa6a0aa0d04"
    },
});
import axios from "axios";

const api = axios.create({
  baseURL: "https://68489822ec44b9f34941609d.mockapi.io/DIOClone",
})

export { api }
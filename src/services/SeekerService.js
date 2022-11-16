import axios from "axios";

const url = "https://itwnuyua85.execute-api.ap-south-1.amazonaws.com"

export const getAllJobs = () => axios.get(`${url}/getAllJobs`)

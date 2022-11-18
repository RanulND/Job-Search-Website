import axios from "axios";

const BASE_URL = "https://itwnuyua85.execute-api.ap-south-1.amazonaws.com"

export const addjob = (data) => axios.post(`${BASE_URL}/addJob`, data)

export const deletejob = (id) => axios.delete(`${BASE_URL}/deleteJob/${id}`)

export const addCompanyDetails = (data) => axios.post(`${BASE_URL}/addCompany`,data)

export const getCompanyDetails = ''


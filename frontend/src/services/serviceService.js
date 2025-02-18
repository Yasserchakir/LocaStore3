import axios from "axios";

const API_URL = "http://localhost:3000/api/services";

export const getServices = () => axios.get(API_URL);
export const createService = (service) => axios.post(API_URL, service);
export const deleteService = (id) => axios.delete(`${API_URL}/${id}`);

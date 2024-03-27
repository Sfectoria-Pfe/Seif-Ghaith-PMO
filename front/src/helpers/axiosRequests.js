import axios from "axios"
import { apiUrl } from "../constants/config";
export const getRequestWithHeader = async(url) => {
    const token=''
    return await axios.get(apiUrl+url,{headers:{
        Authorization:"Bearer "+token
    }})
};
export const postRequestWithHeader = async(url,body) => {
    const token=''
    return await axios.post(apiUrl+url,body,{headers:{
        Authorization:"Bearer "+token
    }})
};
export const deleteRequestWithHeader = async(url) => {
    const token=''
    return await axios.delete(apiUrl+url,{headers:{
        Authorization:"Bearer "+token
    }})
};
export const putRequestWithHeader = async(url,body) => {
    const token=''
    return await axios.put(apiUrl+url,body,{headers:{
        Authorization:"Bearer "+token
    }})
};

import axios from "axios"

export const requireLogin = async () => {
    return await axios.post(`REACT_APP_API/api`, {}, {

    });
}
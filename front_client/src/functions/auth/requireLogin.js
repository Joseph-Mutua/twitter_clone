import axios from "axios";

export const requireLogin = async () => {
  return await axios.post(`${process.env.REACT_APP_API}/api`, {}, {});
};

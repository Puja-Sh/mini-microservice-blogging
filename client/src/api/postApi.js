import axios from "axios";

const url = "http://localhost:";
const port = 4000;

export const callApiPost = async (path, title) => {
    await axios.post(`${url}${port}${path}`, {
       title
    });
}

export const callApiGet = async (path) => {
    const port = 4002
    const res = await axios.get(`${url}${port}${path}`);
    return res;
}
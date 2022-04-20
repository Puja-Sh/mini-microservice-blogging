import axios from "axios";

const url = "http://localhost:";
const port = 4001;

export const callApiPost = async (path, content) => {
    await axios.post(`${url}${port}${path}`, {
        content
    });
}

export const callApiGet = async (path) => {
    const res = await axios.get(`${url}${port}${path}`);

    return res;
}
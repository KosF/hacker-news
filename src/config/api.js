import axios from "axios";

const baseURL = "https://hacker-news.firebaseio.com/v0/";

export default axios.create({ baseURL });

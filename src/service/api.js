import Axios from "axios";
import { BASE_URL } from "../tools/constants";

const access_key = "dd9a71cb2604d5b870b98380ff087bc6";
const query = "New%20York";

// create request with using Axios
const axiosApi = Axios.create({
  baseURL: BASE_URL,
});

// getting data from api of weather
export const getWeather = () =>
  axiosApi.get(
    `http://api.weatherstack.com/current?access_key=${access_key}&query=${query}`
  );

export default getWeather;

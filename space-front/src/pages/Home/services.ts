import { api } from "../../services/api";


export async function getBackgroundOfTheDay() {
    const response = api.get('/home');

    return response;
}
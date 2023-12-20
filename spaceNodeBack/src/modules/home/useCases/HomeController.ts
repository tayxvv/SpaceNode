import { Request, Response } from "express";
import axios from "axios";

class HomeController {

    async handle(request: Request, response: Response) {
        const content = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.KEY_NASA}`);
        const imageContent = content.data;
        return response.status(201).json({ imageContent });
    }
    
}

export { HomeController };
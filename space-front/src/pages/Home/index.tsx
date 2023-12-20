import { useEffect, useState } from "react";
import { getBackgroundOfTheDay } from "./services"
import { Container } from "./style";

export function Home(): JSX.Element {
    const [backGroundImageUrl, setBackGroundImageUrl] = useState<string>("");

    useEffect(() => {
        async function handleHome() {
            const { data } = await getBackgroundOfTheDay();
            setBackGroundImageUrl(data.imageContent.hdurl);
            console.log(data.imageContent.hdurl);
        }
        handleHome();
    }, []);


    return (
        <Container urlBackground={backGroundImageUrl}>
            <div>
                <h1>Home</h1>
            </div>
        </Container>
    )
}
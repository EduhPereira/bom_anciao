import lottie from "lottie-web";
import animationData from "../../Assets/404/404.json";
import { useEffect, useRef } from "react";
import { Container, Contents } from "./styles";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
    const element = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (element.current)
            lottie.loadAnimation({
                animationData,
                container: element.current,
                loop: false,
            });

        lottie.setSpeed(1.5);
    }, [element]);

    return (
        <Container>
            <Contents>
                <div ref={element}></div>
                <Link to="/">Voltar</Link>
            </Contents>
        </Container>
    );
};

import lottie from "lottie-web";
import animationData from "../../Assets/loading/loading.json";
import { useEffect, useRef } from "react";
import { Container, Contents } from "./styles";

export const Loading = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current)
      lottie.loadAnimation({
        animationData,
        container: element.current,
        loop: true,
      });

    lottie.setSpeed(2);
  }, [element]);

  return (
    <Container>
      <Contents>

        <div ref={element}></div>

      </Contents>

    </Container>
  );
};

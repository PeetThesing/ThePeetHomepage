import { useState } from "react";
import {
  TextContainer,
  StyledTextsection,
} from "@/styledcomponents/StyledEverything";

export default function HomePage() {
  const [textVisible, setTextVisible] = useState(false);

  const toggleText = () => {
    setTextVisible(!textVisible);
  };

  return (
    <>
      <StyledTextsection>
        <h1>Peet Thesing</h1>
        <p>Autorin / Wendo-Trainerin / Webentwicklerin</p>

        <button onClick={toggleText}>Zeige Text</button>
        {textVisible && (
          <TextContainer style={{ maxHeight: textVisible ? "100px" : "0" }}>
            Lorem Feminipsum
          </TextContainer>
        )}
      </StyledTextsection>
    </>
  );
}

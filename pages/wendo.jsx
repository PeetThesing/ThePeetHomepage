import Image from "next/image";
import {
  StyledText,
  StyledTextsection,
  SingleImageLeft,
} from "@/styledcomponents/StyledEverything";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import styled from "styled-components";
export default function Wendo() {
  const items = [
    {
      uuid: uuidv4(),
      heading: "Wendo?",
      content: (
        <>
          Wendo kommt von WomEN DO it! Frauen tun es, wehren sich! Wendo steht
          für ein Konzept für feministische Selbstbehauptung, Selbstverteidigung
          und Gewaltprävention. Wendo-Kurse unterstützen Frauen, Mädchen und
          geschlechtsdiverse Menschen für sich selbst, die eigenen Bedürfnisse
          und Grenzen einzutreten. Ich bin akutell aktiv im 5 Finger Kollektiv.
          Wir geben Kurse in Hamburg, Lübeck und Umgebung. Auf unserer Website
          gibt es weitere Informationen. Klickt einfach auf das Logo unten.
        </>
      ),
    },
    {
      uuid: uuidv4(),
      heading: "Qualifizierung",
      content: (
        <>
          Meine Weiterbildung nach den Qualitätsstandards des Bundesfachverband
          feministische Selbstbehauptung und Selbstverteidigung e.V.
          {
            <Link href="https://bvfest.de" target="_blank">
              BV FeSt e.V.
            </Link>
          }
          habe ich 2015-2017 bei Unvergesslich Weiblich e.V. in Gießen. Dort und
          bei Wendo Marburg e.V. habe ich von 2017-2023 zahlreiche Wendo-Kurse
          gegeben.
        </>
      ),
    },
    {
      uuid: uuidv4(),
      heading: "Literatur und Studien",
      content: (
        <>
          Liz Kelly and Nicola Sharp-Jeffs: Knowledge and Know-How: The Role of
          Self-Defence in the Prevention of Violence against Women. 2016. Eine
          Studie im Auftrag des Europäischen Parlaments.{" "}
          {
            <Link
              href="https://www.europarl.europa.eu/RegData/etudes/STUD/2016/571385/IPOL_STU(2016)571385_EN.pdf"
              target="_blank"
            >
              PDF
            </Link>
          }
        </>
      ),
    },
  ];

  return (
    <>
      <StyledTextsection>
        <h2>Wendo</h2>
        <Accordion allowZeroExpanded>
          {items.map((item) => (
            <AccordionItem key={item.uuid}>
              <AccordionItemHeading>
                <AccordionItemButton>{item.heading}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{item.content}</AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>

        <StyledText></StyledText>
        <a
          href="https://www.5finger-kollektiv.de/"
          aria-label="Logo und Link zur Homepage vom 5 Finger Kollektiv"
          target="blank"
        >
          <StyledLogo
            src="/images/LogoLila.png"
            width={271}
            height={186}
            alt=""
          />
        </a>
      </StyledTextsection>
      <SingleImageLeft
        src="/images/fist.png"
        width={228}
        height={360}
        alt="FIST"
      />
    </>
  );
}

const StyledLogo = styled(Image)`
  margin: 2rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 2rem;
`;

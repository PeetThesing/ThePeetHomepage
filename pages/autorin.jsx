
import Navigation from '@/components/Navigation.jsx';
import { StyledText, StyledTextsection, StyledLink,  SingleImageLeft, SingleImageRight} from '@/styledcomponents/StyledEverything';
import Image from 'next/image';


export default function Author() {
  return (
    <> 
      <Navigation/>
      <StyledTextsection>
      <h2>Feministische Psychiatriekritik</h2>
      <Image
src="/../public/bookcover.jpg"
width={150}
height={250}
alt="Bild vom Buchcover, Schrift auf Hintergrund"
/>
     <StyledText>
<p>Erscheinungsdatum: 3. Auflage Januar 2024 (März 2017)</p>
<p> 
<StyledLink href='https://unrast-verlag.de/produkt-kategorie/gesamtprogramm/reihen/transparent-reihen/' target="_blank">unrast transparent</StyledLink>– geschlechterdschungel Band 9</p>  
</StyledText> 
<StyledText>
<h2>Weitere Veröffentlichungen</h2>
<p>„Dafür sind Sie nicht stabil genug“ Mechanismen der Unterwerfung und des Widerstands in der Psychiatrie. In: Mader, Esto; Schmechel, Cora; Kawalska, Kim, Steinweg, Alex: Gegendiagnose II. Beiträge zur radikalen Kritik an Psychiatrie und Psychologie. Get well soon. Psycho_gesundheitspolitik im Kapitalismus. Band 2. edition assemblage, Münster, 2019.</p>
  <p>mit Eva Georg: Zum Umgang mit Sexualisierter Gewalt – hier und überall. Reflexionen und Inspirationen zur Unterstützungsarbeit. In: quix- kollektiv für kritische bildungsarbeit: Gender_Sexualitäten_Begehren in der machtkritischen und entwicklungspolitischen Bildungsarbeit. Wien, 2017.</p>
<p>mit Eva Georg: Sexualisierte Gewalt – (K)ein Thema für Freiwilligendienste? Möglichkeiten der Thematisierung sexualisierter Gewalt auf Seminaren. In: quix- kollektiv für kritische bildungsarbeit: Gender_Sexualitäten_Begehren in der machtkritischen und entwicklungspolitischen Bildungsarbeit. Wien, 2017.</p>
</StyledText>
     </StyledTextsection>
<SingleImageRight

src="/images/tastaturstift.png"
width={167}
height={474}
alt="Tastur und Stift"
/>

<SingleImageLeft
src="/images/stiftbuchstaben.png"
width={228}
height={360}
alt="Stift und zwei Buchstaben aus einer Tastatur"
/>

    </> 
);
};

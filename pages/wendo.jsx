
import Navigation from '@/components/Navigation.jsx';
import Image from 'next/image';
import { StyledText, StyledTextsection, SingleImageLeft } from '@/styledcomponents/StyledEverything';


export default function Wendo() {
  return (
    <> 
      <Navigation/>
      <StyledTextsection>
      <h2>Wendo</h2>
     
     <StyledText> 
        <Image
src="/images/LogoLila.png"
width={271}
height={186}
alt="Logo 5 Finger Wendo Kollektiv"
/>
<p>Wendo steht für ein Konzept für feministische Selbstbehauptung, Selbstverteidigung und Gewaltprävention das aus der Frauenbewegung in Kanada kommt. Ich biete Kurse für Frauen, Mädchen und geschlechtsdiverse Erwachsene, Jugendliche und Kinder.
</p>
<p>Meine Weiterbildung habe ich 2015-2017 bei Unvergesslich Weiblich e.V. in Gießen. Dort und bei Wendo Marburg e.V. habe ich viele Jahre Wendo-Kurse gegeben.</p>
<p>In Hamburg bin ich aktiv im 5 Finger Kollektiv. Auf unserer Website gibt es weitere Informationen und die Möglichkeit, Kurse und Workshops anzubieten.</p>
</StyledText> 
     </StyledTextsection>
     <SingleImageLeft
src="/images/fist.png"
width={228}
height={360}
alt="FIST"
/>
    </> 
);
};



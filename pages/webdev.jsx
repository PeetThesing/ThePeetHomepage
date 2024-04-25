import { SingleImageLeft, SingleImageRight, StyledText, StyledTextsection } from "@/styledcomponents/StyledEverything";
import Navigation from "@/components/Navigation";

export default function WebDev(){
    return (
<><Navigation/>
<StyledTextsection>
  <h2>Webentwicklung</h2>
<StyledText>
  git commit -m `work in progress`
</StyledText>
</StyledTextsection>

<SingleImageLeft
src="/images/laptop.png"
width={228}
height={360}
sizes='20vw'
alt="Laptop"

/>
<SingleImageRight
  src="/images/singlemaus.png"
  width={167}
  height={474}
  alt="MAUS"
/>
</>
         
    )
   
}
import Background from "@/components/Background";
import GlobalStyle from "../styles";
import { Salsa, Lexend } from "next/font/google";
import Navigation from "@/components/Navigation";

const salsa = Salsa({ weight: "400", subsets: ["latin"] });
const lexend = Lexend({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={lexend.className}>
      <GlobalStyle />
      <Component {...pageProps} />
      <Background />
      <Navigation />
    </div>
  );
}

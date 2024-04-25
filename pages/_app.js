import Background from "@/components/Background";
import GlobalStyle from "../styles";
import { Salsa } from 'next/font/google'

const salsa = Salsa({  weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <div  className={salsa.className}>
      <GlobalStyle />
      <Component {...pageProps} />
      <Background/>
    </div>
  );
}

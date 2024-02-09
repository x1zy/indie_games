import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { PopularCardsList } from "./components/CardsList/PopularCardsList";
import { NewCardsList } from "./components/CardsList/NewCardsList";
import { Promo } from "./components/Promo/Promo";
import { Footer } from "./components/Footer/Footer";

import "./globals.css";

export const metadata = {
  title: "Pindie",
  description: "Портал инди-игр от студентов Яндекс Практикума",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>
          {children}
          <Banner />
          <PopularCardsList />
          <NewCardsList />
          <Promo />
        </main>
        <Footer />
      </body>
    </html>
  );
}

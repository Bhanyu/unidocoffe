"use client";

import './globals.css';
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { ShopProvider } from './context/ShopContext';
import { metadata } from './metadata';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <title>{metadata.title.default}</title> 
      </head>
      <body>
        <ShopProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer/>
        </ShopProvider>
      </body>
    </html>
  );
}





import './globals.css'
import Header from '../component/Header'
import Footer from '../component/Footer'

export const metadata = {
  title: 'Muhammad Zaid — Biggest Personal Portfolio',
  description: 'WordPress Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

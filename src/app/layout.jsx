import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import { Monitor } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // Standard SEO Metadata
  title: 'Temesgen Getye - Senior Frontend, Node.js & React Native Developer Portfolio',
  description:
    'Portfolio of Temesgen Getye, a Senior Frontend Developer, Node.js Backend Developer, and React Native expert. Discover my projects in web and mobile app development.',
  keywords: [
    'Temesgen Getye',
    'senior frontend developer',
    'Node.js backend developer',
    'React Native developer',
    'web development',
    'mobile app development',
    'JavaScript',
    'Next.js',
    'portfolio',
    'software engineer',
    'full-stack developer',
  ],
  authors: [{ name: 'Temesgen Getye' }],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',


  openGraph: {
    title: 'Temesgen Getye - Senior Frontend, Node.js & React Native Developer',
    description:
      'Explore Temesgen Getye’s portfolio showcasing expertise as a Senior Frontend Developer, Node.js Backend Developer, and React Native specialist. See my web and mobile projects!',
    url: 'https://temesgen-getye.dev',
    type: 'website',
    images: [
      {
        url: 'https://media.licdn.com/dms/image/v2/D4E03AQFCloVg8NzcUQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729072917287?e=1747872000&v=beta&t=Ih0vcVYZGobRtiNwDOGVB96rfd0R1m51LFQvXr_TDv8', // Replace with your image
        width: 1200,
        height: 630,
        alt: 'Temesgen Getye Portfolio - Senior Developer Projects',
      },
    ],
    siteName: 'Temesgen Getye Portfolio',
    locale: 'en_US',
  },

  // Favicon
  icons: {
    icon: '/favicon.ico', // Ensure this file exists in public/
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* <div className="pc-message">
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md text-center">
              <Monitor className="w-16 h-16 mx-auto mb-4 text-black" />
              <h2 className="text-2xl font-bold mb-4">
                Please open this website on a PC
              </h2>
              <p className="mb-6">
                For the best experience, we recommend using a desktop computer.
              </p>
              <div className="mb-6">
                <div
                  style={{
                    width: "100%",
                    height: "0",
                    paddingBottom: "56%",
                    position: "relative",
                  }}
                >
                  <iframe
                    src="https://giphy.com/embed/POU01YSFVn8zK"
                    width="100%"
                    height="100%"
                    style={{ position: "absolute" }}
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                If you&apos;re already on a PC, try maximizing your browser
                window or adjusting your display settings.
              </p>
            </div>
          </div> 
        </div>
          */}
        <div className="main-content">{children}</div>
      </body>
    </html>
  );
}

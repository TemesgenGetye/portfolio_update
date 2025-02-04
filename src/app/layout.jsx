import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import { Monitor } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Temesgen Getye | Portfolio",
  description: "This is my 2024 portfolio",
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

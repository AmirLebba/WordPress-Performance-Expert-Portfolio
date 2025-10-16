import "./globals.css";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";


export const metadata = {
  title: "SpeedExpert – WordPress Performance Optimisation",
  description:
    "Guaranteed 90+ PageSpeed scores and perfect Core Web Vitals. Free audit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

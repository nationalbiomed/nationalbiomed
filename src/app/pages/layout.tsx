import Footer from "../../components/Footer";
import Header from "./_components/Header"
export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Header/>
      {children}
      {/* <Footer /> */}
    </>
  );
}

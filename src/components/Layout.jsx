import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-800 text-stone-100">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

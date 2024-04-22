import Footer from "./Footer";
import Header from "./Header";

export default function Template({ children }) {
  return (
    <main className="bg-primary min-h-screen flex flex-col justify-between align-center overflow-auto">
      <Header />
      <div className="flex flex-col items-center">{children}</div>
      d
      <Footer />
    </main>
  );
}

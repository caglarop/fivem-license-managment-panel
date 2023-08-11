import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Navbar } from "../nav/Navbar";
import { Sidebar } from "../sidebar/Sidebar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <main className="h-screen w-screen overflow-auto">
      <div className="flex">
        <div className="flex-1">
          <div className="grid">
            <div>
              <div className="flex">
                <div className="flex-1">
                  <Navbar />
                </div>
              </div>
            </div>
            <div>
              <Header />
              <section className="p-12">{children}</section>
              <Footer />
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </main>
  );
};

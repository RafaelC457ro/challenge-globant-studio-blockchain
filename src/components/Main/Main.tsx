import { Outlet } from "react-router-dom";
import { Footer } from "../";
import { Header } from "../";

export function Main() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

import { Meta } from "@/components";
import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <header>
        <nav></nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default DefaultLayout;

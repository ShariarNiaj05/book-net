import Footer from "@/components/shared/Footer";
import Sidebar from "@/components/ui/Sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Sidebar>{children}</Sidebar>
      <Footer />
    </>
  );
};

export default DashboardLayout;

import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1>Header</h1>
      {children}
      <h2>Footer</h2>
    </>
  );
};

export default CommonLayout;

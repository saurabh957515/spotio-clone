import React, { ReactNode } from "react";

interface GlobalSidebarProps {
  children: ReactNode;
}

const GlobalSidebar: React.FC<GlobalSidebarProps> = ({ children }) => {
  return <div className="h-[100vh] w-[100vw] ">{children}</div>;
};

export default GlobalSidebar;

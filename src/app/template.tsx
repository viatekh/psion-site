import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <div className="flex flex-1 flex-col animate-page-in">{children}</div>;
}

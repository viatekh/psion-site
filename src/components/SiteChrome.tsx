"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

// The footer and custom cursor belong to the public site, not the editing screens.
export function SiteChrome({ children }: { children: ReactNode }) {
  return usePathname().startsWith("/keystatic") ? null : children;
}

"use client";

import { useEffect, useState } from "react";
import CartSidebar from "./Cart/CartSidebar";

export default function CartSidebarWrapper() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <CartSidebar />;
}

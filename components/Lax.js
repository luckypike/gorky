import React, { useEffect } from "react";
import lax from "lax.js";

export default function Lax({ children }) {
  useEffect(() => {
    lax.init()
  }, [])

  return <div>{children}</div>
}

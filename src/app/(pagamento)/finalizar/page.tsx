"use client";

import React, { Suspense } from "react";
import Finalizar from "./Finalizar";

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Finalizar />
    </Suspense>
  );
}

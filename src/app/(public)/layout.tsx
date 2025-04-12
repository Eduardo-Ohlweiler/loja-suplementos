import Header from "@/components/Header";
import React from "react";

export default function Home({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
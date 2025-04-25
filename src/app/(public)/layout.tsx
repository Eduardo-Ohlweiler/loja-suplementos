import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderBottons from "@/components/HeaderBottons";
import React from "react";

export default function Home({children}: {children: React.ReactNode}) {
    return (
        <div style={{backgroundColor: "#fff"}}>
            <Header />
            <HeaderBottons />
            {children}
            <Footer />
        </div>
    )
}
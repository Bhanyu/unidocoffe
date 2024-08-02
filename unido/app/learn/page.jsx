"use client";

import AboutUs from "./aboutus";
import Work from "./work";
import Social from "./social";
import BrewGuides from "./brewguides";

import { useState } from "react";
import { GuidesProvider } from "../context/BrewGuidesContext";

export default function Learn() {
  const guidesItems = [
      { id: 1, title: "AEROPRESS", move: "START GUIDE >" },
      { id: 2, title: "DRIP COFFEE MAKER", move: "START GUIDE >" },
      { id: 3, title: "FRENCH PRESS", move: "START GUIDE >" },
      { id: 4, title: "POUR OVER", move: "START GUIDE >" },
    ];

  const [currentPage, setCurrentPage] = useState("aboutus");

  const renderPage = () => {
    switch (currentPage) {
      case "aboutus":
        return <AboutUs setCurrentPage={setCurrentPage} />;
        break;
      case "brewguides":
        return <BrewGuides guides={guidesItems} />;
        break;
      case "work":
        return <Work />;
        break;
      case "social":
        return <Social />;
        break;
      default:
        return <AboutUs setCurrentPage={setCurrentPage} />;
        break;
    }
  };

  return (
    <GuidesProvider>
    <div className="learn">
      {renderPage()}
    </div>
  </GuidesProvider>
  )



}

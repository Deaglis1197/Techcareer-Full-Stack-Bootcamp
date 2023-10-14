import React from "react";
import ProjectSection from "./Page-Content-Components/ProjectSection";
import AboutSection from "./Page-Content-Components/AboutSection";
import ContactSection from "./Page-Content-Components/ContactSection";
import Map from "./Page-Content-Components/Map";

function PageContent() {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
      <ProjectSection></ProjectSection>
      <AboutSection></AboutSection>
      <ContactSection></ContactSection>
      <Map></Map>
      {/* End page content */}
    </div>
  );
}

export default PageContent;

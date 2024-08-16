import React, { useState } from "react";
import "./work.css";
import Project from "../../components/project";
import projectsdata from "../../data/data";

function App() {
  const [activeTab, setActiveTab] = useState("All");

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const filteredProjects =
    activeTab === "All"
      ? projectsdata
      : projectsdata.filter((project) => project.category === activeTab);

  return (
    <div>
      <nav>
        <button
          onClick={() => changeTab("All")}
          className={activeTab === "All" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => changeTab("Web")}
          className={activeTab === "Web" ? "active" : ""}
        >
          Web
        </button>
        <button
          onClick={() => changeTab("App")}
          className={activeTab === "App" ? "active" : ""}
        >
          App
        </button>
        <button
          onClick={() => changeTab("Design")}
          className={activeTab === "Design" ? "active" : ""}
        >
          Design
        </button>
      </nav>
      <section>
        {filteredProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}

export default App;

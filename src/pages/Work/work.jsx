import React, { useState } from "react";
import "./work.css";
import Project from "../../components/project";

function App() {
  const [activeTab, setActiveTab] = useState("All");

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

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
        {activeTab === "All" && (
          <div>
            <Project />
          </div>
        )}
        {activeTab === "Web" && (
          <div>
            <div>
              <Project />
            </div>
          </div>
        )}
        {activeTab === "App" && (
          <div>
            <div>
              <Project />
            </div>
          </div>
        )}
        {activeTab === "Design" && (
          <div>
            <div>
              <Project />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;

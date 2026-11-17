import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainWorkspace from "./components/MainWorkspace";
import AgentActivity from "./components/AgentActivity";





function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activityOpen, setActivityOpen] = useState(false);

    const closeAll = () => {
        setSidebarOpen(false);
        setActivityOpen(false);
    };

    return (
        <div className="dashboard-container">
            {/* Top Navigation Bar visible on mobile/tablet */}
            <header className="mobile-topbar">
                <button
                    className="topbar-btn"
                    onClick={() => {
                        setSidebarOpen(!sidebarOpen);
                        setActivityOpen(false);
                    }}
                >
                    ☰ Menu
                </button>
                <span className="topbar-title">StudyMate AI</span>
                <button
                    className="topbar-btn"
                    onClick={() => {
                        setActivityOpen(!activityOpen);
                        setSidebarOpen(false);
                    }}
                >
                    Activity ✦
                </button>
            </header>

            {/* Backdrop overlay when a drawer is open on mobile */}
            {(sidebarOpen || activityOpen) && (
                <div className="backdrop" onClick={closeAll} />
            )}

            <div className="dashboard">
                <Sidebar isOpen={sidebarOpen} onClose={closeAll} />
                <MainWorkspace />
                <AgentActivity isOpen={activityOpen} onClose={closeAll} />
            </div>
        </div>
    );
}

export default App;

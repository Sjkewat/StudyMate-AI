import { useState } from "react";
import "./App.css";

function Sidebar({ isOpen, onClose }) {
    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="panel-header">
                <h3>Sidebar</h3>
                <button className="mobile-close-btn" onClick={onClose} aria-label="Close sidebar">✕</button>
            </div>
            <div className="panel-content">
                <p>Sidebar navigation and links go here.</p>
            </div>
        </aside>
    );
}

function MainWorkspace() {
    return (
        <main className="main">
            <h2>Main Workspace</h2>
            <p>Main content area for studying, tasks, and notes.</p>
        </main>
    );
}

function AgentActivity({ isOpen, onClose }) {
    return (
        <aside className={`activity ${isOpen ? "open" : ""}`}>
            <div className="panel-header">
                <h3>Agent Activity</h3>
                <button className="mobile-close-btn" onClick={onClose} aria-label="Close activity">✕</button>
            </div>
            <div className="panel-content">
                <p>Agent status, recent activities, and recommendations.</p>
            </div>
        </aside>
    );
}

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

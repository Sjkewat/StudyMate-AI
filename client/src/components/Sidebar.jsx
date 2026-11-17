function Sidebar({ isOpen, onClose }) {
    const menuItems = [
        "⌂ Home",
        "♡ Goals",
        "▣ Projects",
        "▢ Tasks",
        "◉ Memory",
        "✧ Integrations",
        "◷ Activity"
    ];

    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="brand">
                <div className="brand-header">
                    <h2>✧ StudyMate <span>AI</span></h2>
                    {onClose && (
                        <button className="mobile-close-btn" onClick={onClose} aria-label="Close sidebar">✕</button>
                    )}
                </div>
                <p>Your personal study agent</p>
            </div>

            <button className="new-task">
                + New Task
            </button>

            <nav>
                {menuItems.map((item, index) => (
                    <div
                        className={`nav-item ${index === 0 ? "active" : ""}`}
                        key={item}
                    >
                        {item}
                    </div>
                ))}
            </nav>

            <div className="profile">
                <div className="avatar">S</div>
                <div>
                    <strong>StudyMate User</strong>
                    <p>Student account</p>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;

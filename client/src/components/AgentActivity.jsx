const recentActivity = [
    {
        id: 1,
        text: "Retrieved 3 assignments from Google Classroom",
        time: "2h ago",
        icon: "✓",
        iconColor: "#22c55e",
        iconBg: "rgba(34,197,94,0.15)",
    },
    {
        id: 2,
        text: "Analyzed deadlines and priorities",
        time: "2h ago",
        icon: "✓",
        iconColor: "#22c55e",
        iconBg: "rgba(34,197,94,0.15)",
    },
    {
        id: 3,
        text: "Generated a study plan for this week",
        time: "2h ago",
        icon: "✦",
        iconColor: "#a78bfa",
        iconBg: "rgba(139,92,246,0.15)",
    },
];

const nextSteps = [
    { id: 1, icon: "📅", text: "Make a study plan for tomorrow" },
    { id: 2, icon: "📂", text: "Find lecture notes in Drive" },
    { id: 3, icon: "✉️", text: "Summarize my unread course emails" },
];

function AgentActivity({ isOpen, onClose }) {
    return (
        <aside className={`activity ${isOpen ? "open" : ""}`}>

            {/* ── Header ── */}
            <div className="aa-header">
                <div className="aa-header-left">
                    <span className="aa-sparkle">✦</span>
                    <h2 className="aa-title">Agent Activity</h2>
                </div>
                <div className="aa-idle-badge">
                    <span className="aa-idle-dot" />
                    Idle
                </div>
                {onClose && (
                    <button className="mobile-close-btn" onClick={onClose} aria-label="Close">✕</button>
                )}
            </div>

            {/* ── Agent Card ── */}
            <div className="aa-agent-card">
                <div className="aa-agent-icon">🤖</div>
                <div className="aa-agent-info">
                    <strong>StudyMate Agent</strong>
                    <p>Ready to help with your studies</p>
                </div>
            </div>

            {/* ── Recent Activity ── */}
            <div className="aa-section">
                <h3 className="aa-section-title">Recent activity</h3>
                <div className="aa-activity-list">
                    {recentActivity.map((item, idx) => (
                        <div key={item.id} className="aa-activity-item">
                            {/* vertical connector line */}
                            <div className="aa-activity-track">
                                <div
                                    className="aa-activity-icon"
                                    style={{ background: item.iconBg, color: item.iconColor }}
                                >
                                    {item.icon}
                                </div>
                                {idx < recentActivity.length - 1 && (
                                    <div className="aa-activity-line" />
                                )}
                            </div>
                            <div className="aa-activity-body">
                                <span className="aa-activity-text">{item.text}</span>
                                <span className="aa-activity-time">{item.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Current Goal ── */}
            <div className="aa-section">
                <h3 className="aa-section-title">
                    <span className="aa-flag">⛳</span> Current Goal
                </h3>
                <div className="aa-goal-card">
                    <div className="aa-goal-top">
                        <p className="aa-goal-name">Finish this week's assignments</p>
                        <span className="aa-goal-arrow">›</span>
                    </div>
                    <div className="aa-progress-bar">
                        <div className="aa-progress-fill" style={{ width: "50%" }} />
                    </div>
                    <p className="aa-goal-meta">2 of 4 tasks · 50%</p>
                </div>
            </div>

            {/* ── Suggested Next Steps ── */}
            <div className="aa-section">
                <h3 className="aa-section-title">
                    <span className="aa-bolt">⚡</span> Suggested Next Steps
                </h3>
                <div className="aa-steps-list">
                    {nextSteps.map((step) => (
                        <button key={step.id} className="aa-step-row">
                            <span className="aa-step-icon">{step.icon}</span>
                            <span className="aa-step-text">{step.text}</span>
                            <span className="aa-step-arrow">›</span>
                        </button>
                    ))}
                </div>
            </div>

        </aside>
    );
}

export default AgentActivity;

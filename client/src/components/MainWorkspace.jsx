import { useState } from "react";

const quickActions = [
    {
        icon: "📅",
        title: "Plan my study",
        desc: "Create a study plan from my assignments",
        active: true,
    },
    {
        icon: "🔍",
        title: "Find materials",
        desc: "Search my Drive for relevant files",
        active: false,
    },
    {
        icon: "📝",
        title: "Summarize",
        desc: "Summarize notes, PDFs or emails",
        active: false,
    },
    {
        icon: "✅",
        title: "Track tasks",
        desc: "Check deadlines and upcoming work",
        active: false,
    },
];

const focusTasks = [
    {
        id: 1,
        subject: "CS101 – Assignment 2",
        desc: "Data structures implementation",
        due: "Due tomorrow",
        tag: "Programming",
        tagColor: "#7c3aed",
        done: false,
    },
    {
        id: 2,
        subject: "Math – Problem Set 5",
        desc: "Applications of derivatives",
        due: "Due in 2 days",
        tag: "Mathematics",
        tagColor: "#2563eb",
        done: false,
    },
    {
        id: 3,
        subject: "Read – Research Paper",
        desc: "AI in Education (from Drive)",
        due: "Due in 3 days",
        tag: "Reading",
        tagColor: "#059669",
        done: true,
    },
    {
        id: 4,
        subject: "Physics – Lab Report",
        desc: "Write up results for the optics experiment",
        due: "Due in 4 days",
        tag: "Science",
        tagColor: "#d97706",
        done: false,
    },
];

function MainWorkspace() {
    const [prompt, setPrompt] = useState("");
    const [tasks, setTasks] = useState(focusTasks);

    const toggleTask = (id) => {
        setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    };

    const handleSend = () => {
        if (prompt.trim()) {
            setPrompt("");
        }
    };

    return (
        <main className="main">
            {/* Hero greeting */}
            <div className="hero">
                <p className="hero-greeting">Good evening 👋</p>
                <h1 className="hero-title">
                    Ready to <span>study?</span>
                </h1>
                <p className="hero-sub">
                    I'm your AI study agent. Give me a goal, a task, or a question.
                </p>
            </div>

            {/* Quick action cards */}
            <div className="quick-actions">
                {quickActions.map((action) => (
                    <div
                        key={action.title}
                        className={`action-card ${action.active ? "action-card--active" : ""}`}
                    >
                        <div className="action-icon">{action.icon}</div>
                        <h3 className="action-title">{action.title}</h3>
                        <p className="action-desc">{action.desc}</p>
                    </div>
                ))}
            </div>

            {/* Today's Focus */}
            <div className="focus-card">
                <div className="focus-card-header">
                    <h2 className="focus-card-title">🎯 Today's Focus</h2>
                    <span className="focus-badge">{tasks.filter((t) => !t.done).length} pending</span>
                </div>

                <div className="focus-list">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className={`focus-item ${task.done ? "focus-item--done" : ""}`}
                        >
                            <button
                                className={`focus-checkbox ${task.done ? "focus-checkbox--checked" : ""}`}
                                onClick={() => toggleTask(task.id)}
                                aria-label="Toggle task"
                            >
                                {task.done ? "✓" : ""}
                            </button>
                            <div className="focus-info">
                                <strong className="focus-subject">{task.subject}</strong>
                                <span className="focus-desc">{task.desc}</span>
                            </div>
                            <div className="focus-meta">
                                <span
                                    className="focus-tag"
                                    style={{ background: task.tagColor + "22", color: task.tagColor }}
                                >
                                    {task.tag}
                                </span>
                                <span className="focus-due">📅 {task.due}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Prompt text box */}
            <div className="prompt-box">
                <button className="prompt-plus-btn" title="Add attachment">＋</button>
                <input
                    className="prompt-input"
                    type="text"
                    placeholder="Ask StudyMate anything…"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                    className={`prompt-send-btn ${prompt.trim() ? "prompt-send-btn--active" : ""}`}
                    onClick={handleSend}
                    title="Send"
                >
                    ➤
                </button>
            </div>
        </main>
    );
}

export default MainWorkspace;

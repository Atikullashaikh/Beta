import { useEffect, useState } from "react";
import "./Sidebar.scss";

function Sidebar() {
    const [libraryOpen, setLibraryOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("ganit-theme") || "dark";
    });

    useEffect(() => {
        localStorage.setItem("ganit-theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const isDark = theme === "dark";

    return (
        <aside className={`sidebar theme-${theme}`}>

            <div className="sidebar-top">
                <button
                    type="button"
                    className="theme-toggle"
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                >
                    <span className="theme-toggle-label">
                        {isDark ? "Light mode" : "Dark mode"}
                    </span>
                    <span className="theme-toggle-switch" data-on={isDark ? "dark" : "light"}>
                        <span className="theme-toggle-knob" />
                    </span>
                </button>
            </div>

            <div className="logo">
                Ganit logo
            </div>

            <nav className="menu">

                <div
                    className="menu-item"
                    onClick={() => setLibraryOpen(!libraryOpen)}
                >
                    <span>Library</span>

                    <span className="arrow">
                        {libraryOpen ? "⌃" : "⌄"}
                    </span>
                </div>

                {libraryOpen && (
                    <div className="dropdown">
                        <div className="dropdown-item">
                            Active Courses
                        </div>

                        <div className="dropdown-item">
                            All Courses
                        </div>
                    </div>
                )}

                <div className="menu-item">
                    AI Avatar
                </div>

                <div className="menu-item">
                    Bookmarks
                </div>

                <div className="menu-item">
                    Community
                </div>

            </nav>

            <nav className="sidebar-bottom">
                <div className="store">
                    Visit Store
                </div>

                <div className="profile">
                    Contact.Atikulla.Shaikh
                </div>
            </nav>

        </aside>
    );
}

export default Sidebar;
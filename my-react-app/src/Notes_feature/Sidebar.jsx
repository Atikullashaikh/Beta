import { useState } from "react";
import "./Sidebar.scss";

/*
 * Data-driven sidebar configuration.
 * Add, remove, or reorder navigation items by editing this data only —
 * the component renders everything dynamically from it.
 */
const SIDEBAR_CONFIG = {
  brand: {
    label: "Notes",
    mark: "N",
    href: "#",
  },
  sections: [
    {
      id: "library",
      title: "Library",
      collapsible: true,
      defaultOpen: true,
      items: [
        { id: "active", label: "Active Notes", icon: "📝" },
        { id: "all", label: "All Notes", icon: "📄" },
        { id: "archived", label: "Archived", icon: "🗄️" },
      ],
    },
    {
      id: "workspace",
      title: "Workspace",
      collapsible: true,
      defaultOpen: false,
      items: [
        { id: "favorites", label: "Favorites", icon: "★" },
        { id: "tags", label: "Tags", icon: "🏷️" },
        { id: "shared", label: "Shared", icon: "🤝" },
      ],
    },
    {
      id: "tools",
      title: "Tools",
      collapsible: false,
      items: [
        { id: "templates", label: "Templates", icon: "📋" },
        { id: "export", label: "Export", icon: "📤" },
      ],
    },
  ],
  footer: [
    { id: "settings", label: "Settings", icon: "⚙️" },
    { id: "help", label: "Help", icon: "❓", },
  ],
};

function SidebarSection({
  section,
  activeId,
  setActiveId,
  isOpen,
  onToggle,
}) {
  return (
    <section className="sidebar-section" data-section={section.id}>
      {section.title && (
        <button
          type="button"
          className="sidebar-section-title"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <span className="sidebar-section-title-text">{section.title}</span>
          <span className="sidebar-section-arrow" aria-hidden="true">
            {isOpen ? "⌃" : "⌄"}
          </span>
        </button>
      )}
      {isOpen && (
        <nav className="sidebar-section-list">
          {section.items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={
                "sidebar-item" +
                (activeId === item.id ? " sidebar-item--active" : "")
              }
              onClick={() => setActiveId(item.id)}
              aria-pressed={activeId === item.id}
            >
              <span className="sidebar-item-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="sidebar-item-label">{item.label}</span>
            </button>
          ))}
        </nav>
      )}
    </section>
  );
}

export default function NotesSidebar() {
  const [activeId, setActiveId] = useState(null);
  const [openSections, setOpenSections] = useState({});

  const isSectionOpen = (id) =>
    openSections[id] ??
    SIDEBAR_CONFIG.sections.find((s) => s.id === id)?.defaultOpen ??
    true;

  const handleSectionToggle = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !isSectionOpen(id),
    }));
  };

  return (
    <aside className="sidebar notes-sidebar">
      <header className="sidebar-brand">
        <a href={SIDEBAR_CONFIG.brand.href} className="sidebar-brand-link">
          <span className="sidebar-brand-mark" aria-hidden="true">
            {SIDEBAR_CONFIG.brand.mark}
          </span>
          <span className="sidebar-brand-text">
            {SIDEBAR_CONFIG.brand.label}
          </span>
        </a>
      </header>

      <nav className="sidebar-sections" aria-label="Notes navigation">
        {SIDEBAR_CONFIG.sections.map((section) => {
          const open = isSectionOpen(section.id);
          return (
            <SidebarSection
              key={section.id}
              section={section}
              activeId={activeId}
              setActiveId={setActiveId}
              isOpen={open}
              onToggle={() => handleSectionToggle(section.id)}
            />
          );
        })}
      </nav>

      <footer className="sidebar-footer">
        {SIDEBAR_CONFIG.footer.map((item) => (
          <button
            key={item.id}
            type="button"
            className="sidebar-footer-item"
            aria-label={item.label}
          >
            <span className="sidebar-item-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="sidebar-footer-label">{item.label}</span>
          </button>
        ))}
      </footer>
    </aside>
  );
}

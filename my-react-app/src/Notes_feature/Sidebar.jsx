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
      id: "mathematics",
      title: "Class 12 Maths 1",
      collapsible: true,
      defaultOpen: true,
      items: [
        { id: "math-logic", label: "1 : Mathematical Logic", icon: "🧠" },
        { id: "matrices", label: "2 : Matrices", icon: "🔢" },
        { id: "trig-functions", label: "3 : Trigonometric Functions", icon: "📐" },
        { id: "pair-straight-lines", label: "4 : Pair of Straight Lines", icon: "➖" },
        { id: "vectors", label: "5 : Vectors", icon: "➡️" },
        { id: "line-plane", label: "6 : Line and Plane", icon: "📏" },
        { id: "linear-programming", label: "7 : Linear Programming", icon: "📊" },
      ],
    },
    {
      id: "calculus-probability",
      title: "Class 12th Maths 2",
      collapsible: true,
      defaultOpen: false,
      items: [
        { id: "differentiation", label: "1 : Differentiation", icon: "∂" },
        { id: "applications-of-derivatives", label: "2 : Applications of Derivatives", icon: "📈" },
        { id: "indefinite-integration", label: "3 : Indefinite Integration", icon: "∫" },
        { id: "definite-integration", label: "4 : Definite Integration", icon: "∫" },
        { id: "application-of-definite-integration", label: "5 : Application of Definite Integration", icon: "📐" },
        { id: "differential-equations", label: "6 : Differential Equations", icon: "📉" },
        { id: "probability-distribution", label: "7 : Probability Distribution", icon: "🎲" },
        { id: "binomial-distribution", label: "8 : Binomial Distribution", icon: "🎰" },
      ],
    },
    {
      id: "class-11-maths-1",
      title: "Class 11 Maths Part 1",
      collapsible: true,
      defaultOpen: false,
      items: [
        { id: "angle-measurement", label: "1 : Angle and its Measurement", icon: "📐" },
        { id: "trigonometry-i", label: "2 : Trigonometry - I", icon: "📐" },
        { id: "trigonometry-ii", label: "3 : Trigonometry - II", icon: "📐" },
        { id: "determinants-matrices", label: "4 : Determinants and Matrices", icon: "🔢" },
        { id: "straight-line", label: "5 : Straight Line", icon: "➖" },
        { id: "circle", label: "6 : Circle", icon: "⭕" },
        { id: "conic-sections", label: "7 : Conic Sections", icon: "🟣" },
        { id: "measures-of-dispersion", label: "8 : Measures of Dispersion", icon: "📊" },
        { id: "probability", label: "9 : Probability", icon: "🎲" },
      ],
    },
    {
      id: "class-11-maths-2",
      title: "Class 11 Maths 2",
      collapsible: true,
      defaultOpen: false,
      items: [
        { id: "complex-numbers", label: "1 : Complex Numbers", icon: "🔢" },
        { id: "sequences-series", label: "2 : Sequences and Series", icon: "📚" },
        { id: "permutations-combinations", label: "3 : Permutations and Combinations", icon: "🔄" },
        { id: "induction-binomial-theorem", label: "4 : Method of Induction and Binomial Theorem", icon: "📐" },
        { id: "sets-relations", label: "5 : Sets and Relations", icon: "🔗" },
        { id: "functions", label: "6 : Functions", icon: "📌" },
        { id: "limits", label: "7 : Limits", icon: "⏱️" },
        { id: "continuity", label: "8 : Continuity", icon: "⏸️" },
        { id: "differentiation", label: "9 : Differentiation", icon: "∂" },
      ],
    },
    {
      id: "tools",
      title: "Chapter Tools",
      collapsible: false,
      items: [
        { id: "templates", label: "Templates", icon: "📋" },
        { id: "export", label: "Export", icon: "📤" },
        { id: "test-list", label: "test list", icon: "📤" },

      ],
    },
  ],
  footer: [
    { id: "settings", label: "Settings", icon: "⚙️" },
    { id: "help", label: "Help", icon: "❓" },
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

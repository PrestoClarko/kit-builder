"use client";

import { useState } from "react";
import { products, CATEGORIES, Product } from "@/data/products";

function categoryColor(categoryId: string): string {
  return CATEGORIES.find((c) => c.id === categoryId)?.color ?? "#c9a227";
}

export default function Home() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const list =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div
      className="w-full h-screen flex flex-col overflow-hidden"
      style={{ background: "#080808", color: "#f0ece4" }}
    >
      {/* ── Header ── */}
      <header
        className="shrink-0 h-14 flex items-center justify-between px-6 z-10"
        style={{ borderBottom: "1px solid rgba(201,162,39,0.4)", background: "#080808" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-[3px] h-5" style={{ background: "#c9a227" }} />
          <span
            className="font-bold tracking-[0.3em] uppercase text-sm"
            style={{ color: "#c9a227" }}
          >
            New Level Creations
          </span>
        </div>

        <span
          className="text-[10px] tracking-[0.4em] uppercase"
          style={{ color: "#3a3a3a" }}
        >
          Kit Builder
        </span>

        <div className="flex items-center gap-2">
          {selected && (
            <span className="text-xs" style={{ color: "#555" }}>
              {selected.name.length > 22 ? selected.name.slice(0, 22) + "…" : selected.name}
            </span>
          )}
          <span
            className="text-sm font-bold tabular-nums"
            style={{ color: selected ? "#c9a227" : "#333" }}
          >
            {selected ? `$${selected.price.toFixed(2)}` : "$0.00"}
          </span>
        </div>
      </header>

      {/* ── Body ── */}
      <div
        className="flex-1 grid min-h-0"
        style={{ gridTemplateColumns: "272px 1fr 296px" }}
      >
        {/* ── LEFT: Catalog ── */}
        <aside
          className="flex flex-col min-h-0"
          style={{ background: "#0a0a0a", borderRight: "1px solid #1a1a1a" }}
        >
          {/* Category filters */}
          <div
            className="shrink-0 px-3 pt-3 pb-3"
            style={{ borderBottom: "1px solid #141414" }}
          >
            <p
              className="text-[9px] tracking-[0.35em] uppercase mb-2.5"
              style={{ color: "#3a3a3a" }}
            >
              Category
            </p>
            <div className="flex flex-wrap gap-1">
              {CATEGORIES.map((cat) => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="text-[9px] px-2 py-[3px] tracking-wide uppercase transition-all"
                    style={{
                      border: `1px solid ${active ? cat.color : "#1e1e1e"}`,
                      color: active ? cat.color : "#444",
                      background: active ? `${cat.color}14` : "transparent",
                      borderRadius: 1,
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product list */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-2 space-y-[2px]">
              {list.map((product) => {
                const isActive = selected?.id === product.id;
                const dotColor = categoryColor(product.category);
                return (
                  <button
                    key={product.id}
                    onClick={() => setSelected(product)}
                    className="w-full text-left px-3 py-2 transition-all"
                    style={{
                      border: `1px solid ${isActive ? "#c9a227" : "#161616"}`,
                      background: isActive ? "rgba(201,162,39,0.07)" : "#0d0d0d",
                      borderRadius: 1,
                    }}
                  >
                    <div className="flex items-start gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-[5px] shrink-0"
                        style={{ background: dotColor }}
                      />
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-[11px] font-medium truncate leading-tight"
                          style={{ color: isActive ? "#f0ece4" : "#777" }}
                        >
                          {product.name}
                        </p>
                        <p
                          className="text-[9px] mt-0.5 capitalize"
                          style={{ color: "#383838" }}
                        >
                          {product.subcategory}
                        </p>
                      </div>
                      <span
                        className="text-[10px] shrink-0 font-semibold tabular-nums"
                        style={{ color: isActive ? "#c9a227" : "#333" }}
                      >
                        ${product.price}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="shrink-0 px-3 py-2.5 flex items-center justify-between"
            style={{ borderTop: "1px solid #141414" }}
          >
            <p className="text-[9px] uppercase tracking-widest" style={{ color: "#2a2a2a" }}>
              {list.length} Products
            </p>
            {selected && (
              <button
                onClick={() => setSelected(null)}
                className="text-[9px] uppercase tracking-wider transition-colors"
                style={{ color: "#3a3a3a" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#666")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3a3a3a")}
              >
                Clear
              </button>
            )}
          </div>
        </aside>

        {/* ── CENTER: Zakeke Viewer Placeholder ── */}
        <main
          className="relative flex flex-col items-center justify-center min-h-0"
          style={{ background: "#080808" }}
        >
          {selected ? (
            /* Selected state — product accent + name displayed */
            <div className="flex flex-col items-center gap-6 px-8 w-full max-w-sm">
              {/* Color block */}
              <div
                className="w-full aspect-square max-w-[220px]"
                style={{
                  background:
                    selected.accentColor === "#1a1a1a"
                      ? "linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)"
                      : `linear-gradient(135deg, ${selected.accentColor}cc 0%, ${selected.accentColor}55 100%)`,
                  border: `1px solid ${selected.accentColor}44`,
                  borderRadius: 2,
                  boxShadow: `0 0 60px ${selected.accentColor}22`,
                }}
              />
              {/* Label */}
              <div className="text-center">
                <p
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#f0ece4" }}
                >
                  {selected.name}
                </p>
                <p
                  className="text-[9px] mt-1 tracking-widest uppercase"
                  style={{ color: "#3a3a3a" }}
                >
                  3D view coming soon
                </p>
              </div>
            </div>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center gap-5 px-8 text-center">
              {/* NLC mark */}
              <div
                className="flex items-center justify-center w-16 h-16"
                style={{
                  border: "1px solid rgba(201,162,39,0.2)",
                  borderRadius: 2,
                }}
              >
                <span
                  className="text-lg font-bold tracking-widest"
                  style={{ color: "rgba(201,162,39,0.35)" }}
                >
                  NLC
                </span>
              </div>
              <div>
                <p
                  className="text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: "#2a2a2a" }}
                >
                  Select a product
                </p>
                <p
                  className="text-[9px] mt-1 tracking-[0.2em] uppercase"
                  style={{ color: "#1e1e1e" }}
                >
                  3D viewer via Zakeke
                </p>
              </div>
            </div>
          )}
        </main>

        {/* ── RIGHT: Product Details ── */}
        <aside
          className="flex flex-col min-h-0"
          style={{ background: "#0a0a0a", borderLeft: "1px solid #1a1a1a" }}
        >
          <div
            className="shrink-0 px-4 py-3.5"
            style={{ borderBottom: "1px solid #141414" }}
          >
            <p
              className="text-[9px] tracking-[0.4em] uppercase"
              style={{ color: "#3a3a3a" }}
            >
              Product Details
            </p>
          </div>

          {selected ? (
            <div className="flex-1 overflow-y-auto p-4 space-y-5">
              {/* Color swatch */}
              <div>
                <div
                  className="w-full h-14"
                  style={{
                    background:
                      selected.accentColor === "#1a1a1a"
                        ? "#1e1e1e"
                        : selected.accentColor,
                    border: "1px solid #1e1e1e",
                    borderRadius: 1,
                  }}
                />
                <p
                  className="text-[9px] mt-1.5 tracking-widest uppercase"
                  style={{ color: "#2e2e2e" }}
                >
                  {selected.accentColor}
                </p>
              </div>

              {/* Name + price */}
              <div style={{ borderTop: "1px solid #141414", paddingTop: 16 }}>
                <h2
                  className="text-sm font-semibold leading-snug"
                  style={{ color: "#f0ece4" }}
                >
                  {selected.name}
                </h2>
                <p
                  className="text-2xl font-bold mt-2"
                  style={{ color: "#c9a227" }}
                >
                  ${selected.price}
                </p>
              </div>

              {/* Meta */}
              <div
                className="space-y-2.5"
                style={{ borderTop: "1px solid #141414", paddingTop: 16 }}
              >
                {(
                  [
                    ["Category", selected.category.replace(/-/g, " ")],
                    ["Type", selected.subcategory],
                    ["Body Slot", selected.bodySlot],
                  ] as [string, string][]
                ).map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center">
                    <span
                      className="text-[9px] tracking-wider uppercase"
                      style={{ color: "#383838" }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-[10px] capitalize"
                      style={{ color: "#888" }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Style tags */}
              <div style={{ borderTop: "1px solid #141414", paddingTop: 16 }}>
                <p
                  className="text-[9px] tracking-wider uppercase mb-2"
                  style={{ color: "#383838" }}
                >
                  Style Tags
                </p>
                <div className="flex flex-wrap gap-1">
                  {selected.styleTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] px-2 py-[3px] uppercase tracking-wide"
                      style={{ border: "1px solid #1e1e1e", color: "#444" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div
                className="space-y-2"
                style={{ borderTop: "1px solid #141414", paddingTop: 16 }}
              >
                <button
                  className="w-full py-3 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
                  style={{ background: "#c9a227", color: "#080808" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#e8c040")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#c9a227")
                  }
                >
                  Add to Kit
                </button>
                <button
                  className="w-full py-2.5 text-[10px] tracking-[0.2em] uppercase transition-all"
                  style={{ border: "1px solid #222", color: "#555" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#444";
                    e.currentTarget.style.color = "#888";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#222";
                    e.currentTarget.style.color = "#555";
                  }}
                >
                  View on Website
                </button>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center px-6">
              <p
                className="text-center text-[10px] tracking-[0.2em] uppercase leading-relaxed"
                style={{ color: "#1e1e1e" }}
              >
                Select a product<br />to view details
              </p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { products, CATEGORIES, Product } from "@/data/products";

function categoryColor(categoryId: string): string {
  return CATEGORIES.find((c) => c.id === categoryId)?.color ?? "#c9a227";
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selected, setSelected] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const list =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // ── Three.js viewer ────────────────────────────────────────────────────────
  useEffect(() => {
    let raf: number;
    let renderer: any;
    let resizeFn: () => void;
    let alive = true;

    function loadScript(src: string) {
      return new Promise<void>((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          // already in DOM – wait for it if still loading
          const check = () => {
            if (src.includes("three.min") && (window as any).THREE) return resolve();
            if (src.includes("OrbitControls") && (window as any).THREE?.OrbitControls) return resolve();
            setTimeout(check, 30);
          };
          check();
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.onload = () => resolve();
        document.head.appendChild(s);
      });
    }

    async function init() {
      await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
      );
      await loadScript(
        "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"
      );
      if (!alive) return;

      const THREE = (window as any).THREE;
      const canvas = canvasRef.current;
      if (!canvas) return;

      // ── Renderer ──────────────────────────────────────────────────────────
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;

      // ── Scene + Camera ────────────────────────────────────────────────────
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x080808);
      scene.fog = new THREE.FogExp2(0x080808, 0.04);

      const camera = new THREE.PerspectiveCamera(38, 1, 0.01, 100);
      camera.position.set(0, 1.0, 5.8);

      // ── Controls ──────────────────────────────────────────────────────────
      const controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.minDistance = 2.5;
      controls.maxDistance = 12;
      controls.maxPolarAngle = Math.PI * 0.82;

      // ── Resize ────────────────────────────────────────────────────────────
      resizeFn = () => {
        const c = canvasRef.current;
        if (!c) return;
        const p = c.parentElement;
        if (!p) return;
        renderer.setSize(p.clientWidth, p.clientHeight);
        camera.aspect = p.clientWidth / p.clientHeight;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", resizeFn);
      resizeFn();

      // ── Lights ────────────────────────────────────────────────────────────
      scene.add(new THREE.AmbientLight(0x141414, 1));

      const keyLight = new THREE.DirectionalLight(0xfff5e0, 3.5);
      keyLight.position.set(3, 9, 5);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.set(1024, 1024);
      scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0xc9a227, 2.2);
      rimLight.position.set(-4, 1, -5);
      scene.add(rimLight);

      const fillLight = new THREE.PointLight(0x3a1a60, 2.0, 22);
      fillLight.position.set(-5, 4, 4);
      scene.add(fillLight);

      const spot = new THREE.SpotLight(0xc9a227, 3.5, 18, Math.PI / 9, 0.55, 1);
      spot.position.set(0, 9, 0);
      spot.target.position.set(0, 0, 0);
      spot.castShadow = true;
      scene.add(spot);
      scene.add(spot.target);

      // ── Floor ─────────────────────────────────────────────────────────────
      const floor = new THREE.Mesh(
        new THREE.CircleGeometry(7, 64),
        new THREE.MeshStandardMaterial({ color: 0x0c0c0c, roughness: 0.95, metalness: 0.1 })
      );
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -1.7;
      floor.receiveShadow = true;
      scene.add(floor);

      // Thin gold ring on floor
      const floorRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.6, 0.015, 6, 64),
        new THREE.MeshBasicMaterial({ color: 0xc9a227, transparent: true, opacity: 0.3 })
      );
      floorRing.rotation.x = -Math.PI / 2;
      floorRing.position.y = -1.69;
      scene.add(floorRing);

      // ── Product group ─────────────────────────────────────────────────────
      const group = new THREE.Group();
      scene.add(group);

      function makeProductGeo(slot: string): any {
        switch (slot) {
          case "shorts":
            return new THREE.CylinderGeometry(0.85, 0.72, 1.1, 8);
          case "top":
            return new THREE.BoxGeometry(1.5, 1.9, 0.65, 2, 3, 2);
          case "hoodie":
            return new THREE.BoxGeometry(1.6, 2.1, 0.72, 2, 3, 2);
          case "jacket":
            return new THREE.BoxGeometry(1.7, 2.35, 0.73, 2, 4, 2);
          case "compression":
            return new THREE.CylinderGeometry(0.46, 0.36, 2.5, 8);
          case "underwear":
            return new THREE.TorusGeometry(0.72, 0.28, 8, 18);
          case "gloves":
            return new THREE.SphereGeometry(0.9, 22, 16);
          case "gear":
            return new THREE.OctahedronGeometry(1.1, 1);
          case "tracksuit":
          case "set":
            return new THREE.BoxGeometry(1.55, 3.05, 0.7, 2, 4, 2);
          case "accessory":
            return new THREE.DodecahedronGeometry(0.95, 0);
          default:
            return new THREE.BoxGeometry(1.3, 1.7, 0.62, 2, 3, 2);
        }
      }

      function loadProduct(product: Product | null) {
        while (group.children.length > 0) group.remove(group.children[0]);

        const rawHex = product?.accentColor ?? "#c9a227";
        const raw = new THREE.Color(rawHex);
        const brightness = raw.r * 0.299 + raw.g * 0.587 + raw.b * 0.114;
        const col = brightness < 0.08 ? new THREE.Color(0x2a2420) : raw;

        const geo = makeProductGeo(product?.bodySlot ?? "top");

        const mat = new THREE.MeshStandardMaterial({
          color: col,
          roughness: 0.22,
          metalness: 0.75,
          emissive: col,
          emissiveIntensity: 0.12,
        });

        const mesh = new THREE.Mesh(geo, mat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);

        // Wireframe overlay
        const wireMat = new THREE.MeshBasicMaterial({
          color: col,
          wireframe: true,
          transparent: true,
          opacity: 0.06,
        });
        const wire = new THREE.Mesh(geo, wireMat);
        wire.scale.setScalar(1.013);
        group.add(wire);

        // Orbiting rings
        const ringBase = new THREE.MeshBasicMaterial({
          color: 0xc9a227,
          transparent: true,
          opacity: 0.22,
        });
        const r1 = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.013, 6, 56), ringBase);
        r1.rotation.x = Math.PI / 2;
        r1.position.y = -0.4;
        group.add(r1);

        const ringBase2 = new THREE.MeshBasicMaterial({
          color: 0xc9a227,
          transparent: true,
          opacity: 0.12,
        });
        const r2 = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.009, 6, 48), ringBase2);
        r2.rotation.x = Math.PI / 3;
        r2.rotation.z = Math.PI / 5;
        group.add(r2);

        group.rotation.y = 0;
      }

      loadProduct(null);
      (window as any).__nlcLoad = loadProduct;

      // ── Animate ───────────────────────────────────────────────────────────
      const clock = new THREE.Clock();
      function animate() {
        raf = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        group.rotation.y += 0.007;
        group.position.y = Math.sin(t * 0.55) * 0.055;
        controls.update();
        renderer.render(scene, camera);
      }
      animate();
    }

    init();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      if (renderer) renderer.dispose();
      if (resizeFn) window.removeEventListener("resize", resizeFn);
      delete (window as any).__nlcLoad;
    };
  }, []);

  function handleSelect(product: Product) {
    setSelected(product);
    const fn = (window as any).__nlcLoad;
    if (fn) fn(product);
  }

  // ── UI ─────────────────────────────────────────────────────────────────────
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden" style={{ background: "#080808", color: "#f0ece4" }}>

      {/* ── Header ── */}
      <header
        className="shrink-0 h-14 flex items-center justify-between px-6 z-10"
        style={{ borderBottom: "1px solid rgba(201,162,39,0.35)", background: "#080808" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-[3px] h-5" style={{ background: "#c9a227" }} />
          <span className="font-bold tracking-[0.28em] uppercase text-xs" style={{ color: "#c9a227" }}>
            New Level Creations
          </span>
        </div>
        <span className="text-[10px] tracking-[0.35em] uppercase" style={{ color: "#444" }}>
          3D Product Viewer
        </span>
        <span className="text-sm font-semibold" style={{ color: "#c9a227" }}>
          {selected ? `$${selected.price.toFixed(2)}` : "—"}
        </span>
      </header>

      {/* ── Body ── */}
      <div className="flex-1 grid min-h-0" style={{ gridTemplateColumns: "272px 1fr 296px" }}>

        {/* ── LEFT: Catalog ── */}
        <aside
          className="flex flex-col min-h-0"
          style={{ background: "#0d0d0d", borderRight: "1px solid #1c1c1c" }}
        >
          {/* Category filters */}
          <div className="shrink-0 px-3 pt-3 pb-2.5" style={{ borderBottom: "1px solid #161616" }}>
            <p className="text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "#444" }}>
              Filter by Category
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
                      border: `1px solid ${active ? "#c9a227" : "#252525"}`,
                      color: active ? "#c9a227" : "#555",
                      background: active ? "rgba(201,162,39,0.08)" : "transparent",
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
            <div className="p-2 space-y-[3px]">
              {list.map((product) => {
                const isActive = selected?.id === product.id;
                const dotColor = categoryColor(product.category);
                return (
                  <button
                    key={product.id}
                    onClick={() => handleSelect(product)}
                    className="w-full text-left px-3 py-2 transition-all group"
                    style={{
                      border: `1px solid ${isActive ? "#c9a227" : "#1a1a1a"}`,
                      background: isActive ? "rgba(201,162,39,0.08)" : "#101010",
                      borderRadius: 1,
                    }}
                  >
                    <div className="flex items-start gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ background: dotColor }}
                      />
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-[11px] font-medium truncate leading-tight"
                          style={{ color: isActive ? "#f0ece4" : "#888" }}
                        >
                          {product.name}
                        </p>
                        <p className="text-[9px] mt-0.5 capitalize" style={{ color: "#444" }}>
                          {product.subcategory}
                        </p>
                      </div>
                      <span
                        className="text-[10px] shrink-0 font-medium"
                        style={{ color: isActive ? "#c9a227" : "#3a3a3a" }}
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
            className="shrink-0 px-3 py-2"
            style={{ borderTop: "1px solid #161616" }}
          >
            <p className="text-[9px]" style={{ color: "#333" }}>
              {list.length} product{list.length !== 1 ? "s" : ""}
            </p>
          </div>
        </aside>

        {/* ── CENTER: 3D Viewer ── */}
        <main className="relative flex flex-col min-h-0" style={{ background: "#080808" }}>
          <canvas ref={canvasRef} className="flex-1 w-full block" />

          {/* Empty state */}
          {!selected && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ border: "1px solid rgba(201,162,39,0.15)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ border: "1px solid rgba(201,162,39,0.3)" }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: "rgba(201,162,39,0.55)" }} />
                </div>
              </div>
              <p className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "#333" }}>
                Select a product to view in 3D
              </p>
            </div>
          )}

          {/* Product label */}
          {selected && (
            <div className="absolute bottom-5 left-0 right-0 flex justify-center pointer-events-none">
              <div
                className="px-5 py-2.5 text-center"
                style={{
                  background: "rgba(8,8,8,0.82)",
                  border: "1px solid rgba(201,162,39,0.28)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#c9a227" }}>
                  {selected.name}
                </p>
                <p className="text-[9px] mt-0.5 tracking-widest uppercase" style={{ color: "#4a4a4a" }}>
                  {selected.subcategory} &nbsp;·&nbsp; {selected.category.replace(/-/g, " ")}
                </p>
              </div>
            </div>
          )}

          {/* Controls hint */}
          <div className="absolute top-3 right-3 pointer-events-none">
            <p className="text-[8px] tracking-[0.15em] uppercase" style={{ color: "#2a2a2a" }}>
              Drag to rotate · Scroll to zoom
            </p>
          </div>
        </main>

        {/* ── RIGHT: Details ── */}
        <aside
          className="flex flex-col min-h-0 overflow-y-auto"
          style={{ background: "#0d0d0d", borderLeft: "1px solid #1c1c1c" }}
        >
          <div className="shrink-0 px-4 py-3.5" style={{ borderBottom: "1px solid #161616" }}>
            <p className="text-[9px] tracking-[0.35em] uppercase" style={{ color: "#444" }}>
              Product Details
            </p>
          </div>

          {selected ? (
            <div className="p-4 space-y-4">
              {/* Color swatch */}
              <div>
                <div
                  className="w-full h-12 mb-1.5"
                  style={{
                    background:
                      selected.accentColor === "#1a1a1a" ? "#222" : selected.accentColor,
                    border: "1px solid #1e1e1e",
                    borderRadius: 1,
                  }}
                />
                <p className="text-[9px] tracking-widest uppercase" style={{ color: "#3a3a3a" }}>
                  {selected.accentColor}
                </p>
              </div>

              {/* Name + price */}
              <div style={{ borderTop: "1px solid #161616", paddingTop: 14 }}>
                <h2 className="text-sm font-semibold leading-snug" style={{ color: "#f0ece4" }}>
                  {selected.name}
                </h2>
                <p className="text-2xl font-bold mt-1.5" style={{ color: "#c9a227" }}>
                  ${selected.price}
                </p>
              </div>

              {/* Meta rows */}
              <div className="space-y-2" style={{ borderTop: "1px solid #161616", paddingTop: 14 }}>
                {[
                  ["Category", selected.category.replace(/-/g, " ")],
                  ["Type", selected.subcategory],
                  ["Body Slot", selected.bodySlot],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="text-[9px] tracking-wider uppercase" style={{ color: "#444" }}>
                      {label}
                    </span>
                    <span className="text-[10px] capitalize" style={{ color: "#999" }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Style tags */}
              <div style={{ borderTop: "1px solid #161616", paddingTop: 14 }}>
                <p className="text-[9px] tracking-wider uppercase mb-2" style={{ color: "#444" }}>
                  Style Tags
                </p>
                <div className="flex flex-wrap gap-1">
                  {selected.styleTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] px-2 py-[2px] uppercase tracking-wide"
                      style={{ border: "1px solid #222", color: "#555" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div style={{ borderTop: "1px solid #161616", paddingTop: 14 }} className="space-y-2">
                <button
                  className="w-full py-3 text-xs font-bold tracking-[0.2em] uppercase transition-colors"
                  style={{ background: "#c9a227", color: "#080808" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c040")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a227")}
                >
                  Add to Kit
                </button>
                <button
                  className="w-full py-2.5 text-[10px] tracking-[0.15em] uppercase transition-colors"
                  style={{ border: "1px solid #252525", color: "#666" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#444";
                    e.currentTarget.style.color = "#999";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#252525";
                    e.currentTarget.style.color = "#666";
                  }}
                >
                  View on Website
                </button>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center px-6">
              <p className="text-center text-[10px] tracking-[0.15em] uppercase" style={{ color: "#2a2a2a" }}>
                Select a product from the catalog to view details
              </p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

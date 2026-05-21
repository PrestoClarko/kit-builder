"use client";

import { useEffect, useRef } from "react";
import { products } from "@/data/products";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // ⚠️ ALL YOUR JS GOES HERE (Three.js + UI logic)

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.onload = () => {
      const THREE = (window as any).THREE;

      // =========================
      // EVERYTHING FROM YOUR <script>
      // GOES INSIDE HERE
      // =========================

      const canvas = canvasRef.current;
      if (!canvas) return;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0d0d0d);

      const camera = new THREE.PerspectiveCamera(38, 1, 0.01, 100);
      camera.position.set(0, 1.4, 4.2);

      function resize() {

        const parent = canvas.parentElement;

const w = parent ? parent.clientWidth : 800;
const h = parent ? parent.clientHeight : 600;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }

      window.addEventListener("resize", resize);
      resize();

      // LIGHTS (from your code)
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));

      const key = new THREE.DirectionalLight(0xfff8e8, 2.0);
      key.position.set(2, 5, 3);
      scene.add(key);

      // SIMPLE TEST CUBE (replace later with GLB)
      const geo = new THREE.BoxGeometry(1, 2, 1);
      const mat = new THREE.MeshStandardMaterial({ color: 0xf0a500 });
      const cube = new THREE.Mesh(geo, mat);
      scene.add(cube);

      // ANIMATE
      function animate() {
        requestAnimationFrame(animate);
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      }

      animate();
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white">
      {/* HEADER (simplified version for now) */}
      <div className="h-[56px] flex items-center justify-between px-5 border-b border-yellow-500">
        <div className="font-bold uppercase">NEW LEVEL CREATIONS</div>
        <div className="text-yellow-400 text-sm">Kit Builder</div>
        <div>$0.00</div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-[260px_1fr_300px] h-[calc(100vh-56px)]">
        
        {/* LEFT */}
        <div className="bg-zinc-900 p-3 border-r border-yellow-500">
          <p className="text-sm mb-2">Catalog (wired next)</p>
          <div className="text-xs text-gray-400">
            {products.length} products loaded
          </div>
        </div>

        {/* CENTER */}
        <div className="relative">
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>

        {/* RIGHT */}
        <div className="bg-zinc-900 p-3 border-l border-yellow-500">
          <p className="text-sm">Your Kit</p>
          <p className="text-xs text-gray-400 mt-2">
            UI logic coming next
          </p>
        </div>

      </div>
    </div>
  );

}

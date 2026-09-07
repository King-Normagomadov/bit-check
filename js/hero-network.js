/* ============================================================
   ITWURZEL — Hero Network Visualization
   Subtle white grid of connected nodes on teal hero.
   Geometric, clean, minimal — abstract infrastructure.
   ============================================================ */

(function () {
  'use strict';

  const CANVAS_ID = 'hero-network-canvas';

  const CONFIG = {
    nodeCount:       60,
    connectionDist:  180,
    nodeSpeed:       0.3,
    nodeMinSize:     1.5,
    nodeMaxSize:     2.5,
    lineWidth:       0.5,
    nodeColor:       'rgba(255, 255, 255, 0.5)',
    lineColor:       'rgba(255, 255, 255, 0.08)',
    nodeHighlight:   'rgba(255, 255, 255, 0.8)',
    mouseRadius:     200,
  };

  let canvas, ctx;
  let nodes = [];
  let mouse = { x: -9999, y: -9999 };
  let animFrame;
  let width, height, dpr;

  class Node {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * CONFIG.nodeSpeed;
      this.vy = (Math.random() - 0.5) * CONFIG.nodeSpeed;
      this.size = CONFIG.nodeMinSize + Math.random() * (CONFIG.nodeMaxSize - CONFIG.nodeMinSize);
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      this.x = Math.max(0, Math.min(width, this.x));
      this.y = Math.max(0, Math.min(height, this.y));
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width * dpr, height * dpr);
    ctx.save();
    ctx.scale(dpr, dpr);

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.connectionDist) {
          const opacity = 1 - (dist / CONFIG.connectionDist);
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 * opacity})`;
          ctx.lineWidth = CONFIG.lineWidth;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    for (const node of nodes) {
      // Check mouse proximity
      const dx = node.x - mouse.x;
      const dy = node.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const isNear = dist < CONFIG.mouseRadius;

      const alpha = isNear ? 0.8 : 0.35;
      const size = isNear ? node.size * 1.5 : node.size;

      ctx.beginPath();
      ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.fill();

      // Draw connections to mouse for nearby nodes
      if (isNear && dist > 0) {
        const lineAlpha = (1 - dist / CONFIG.mouseRadius) * 0.15;
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    ctx.restore();
  }

  function animate() {
    for (const node of nodes) {
      node.update();
    }
    draw();
    animFrame = requestAnimationFrame(animate);
  }

  function resize() {
    const hero = canvas.parentElement;
    width = hero.offsetWidth;
    height = hero.offsetHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
  }

  function createNodes() {
    nodes = [];
    const count = width < 768 ? Math.floor(CONFIG.nodeCount * 0.5) : CONFIG.nodeCount;
    for (let i = 0; i < count; i++) {
      nodes.push(new Node());
    }
  }

  function init() {
    canvas = document.getElementById(CANVAS_ID);
    if (!canvas) return;

    ctx = canvas.getContext('2d');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      resize();
      createNodes();
      draw();
      return;
    }

    resize();
    createNodes();

    // Mouse tracking
    canvas.parentElement.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    canvas.parentElement.addEventListener('mouseleave', () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    // Resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        createNodes();
      }, 200);
    });

    animate();
  }

  function destroy() {
    if (animFrame) cancelAnimationFrame(animFrame);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.addEventListener('beforeunload', destroy);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      destroy();
    } else if (canvas && ctx) {
      animFrame = requestAnimationFrame(animate);
    }
  });

})();

/* ═══════════════════════════════════════════════════════════════
   SIDDHARTHA GUDIWADA — PORTFOLIO INTERACTIONS & MICRO-ANIMATIONS
   ══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. CUSTOM CURSOR WITH TRAILING FOLLOWER ───────────────────
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');

  if (cursor && follower && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let followerX = mouseX;
    let followerY = mouseY;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    function renderCursor() {
      // Main dot
      cursorX += (mouseX - cursorX) * 0.35;
      cursorY += (mouseY - cursorY) * 0.35;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

      // Smooth trailing ring
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);
  }

  // ── 2. NAVBAR SCROLL & ACCURATE ACTIVE LINK HIGHLIGHT (SCROLLSPY) ──
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const drawerNavLinks = document.querySelectorAll('.drawer-link');
  const sections = document.querySelectorAll('section[id]');

  // Section ID to Nav Target Mapping (maps Certs to Experience)
  const sectionNavMap = {
    'hero': '',
    'services': '',
    'about': '#about',
    'tools': '#tools',
    'projects': '#projects',
    'experience': '#experience',
    'certs': '#experience',
    'contact': '#contact'
  };

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 160; // Offset below floating navbar
    let activeTarget = '';

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeTarget = sectionNavMap[id] || `#${id}`;
      }
    });

    // If scrolled near the bottom of the page, highlight Contact (#contact)
    if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 80)) {
      activeTarget = '#contact';
    }

    // Update desktop nav links
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (activeTarget && href === activeTarget) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update mobile drawer links
    drawerNavLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (activeTarget && href === activeTarget) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  let isTicking = false;
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 40) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        updateActiveNavLink();
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

  // Smooth Scroll with Header Offset for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#' || targetId === '#!') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Initial call on load and on resize
  updateActiveNavLink();
  window.addEventListener('resize', updateActiveNavLink, { passive: true });

  // ── 3. MOBILE MENU DRAWER ─────────────────────────────────────
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    if (hamburgerBtn) hamburgerBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
    if (hamburgerBtn) hamburgerBtn.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', (e) => {
      e.preventDefault();
      closeDrawer();
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  drawerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // ── 4. SCROLL ANIMATIONS (AOS OBSERVER) ────────────────────────
  const aosElements = document.querySelectorAll('[data-aos]');
  const aosObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Stagger sibling items
        const siblings = [...entry.target.parentElement.children].filter(el => el.hasAttribute('data-aos'));
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 0.08}s`;
        entry.target.classList.add('aos-visible');
        aosObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  aosElements.forEach((el) => aosObserver.observe(el));

  // ── 5. STATS COUNTER ANIMATION ────────────────────────────────
  const statCounters = document.querySelectorAll('.stat-counter');
  let animatedStats = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animatedStats) {
        animatedStats = true;
        statCounters.forEach((counter) => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const duration = 1800; // ms
          const start = target > 2000 ? 2018 : 0;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(start + (target - start) * easeOut);

            counter.textContent = currentVal;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          }
          requestAnimationFrame(updateCounter);
        });
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });

  const aboutSection = document.getElementById('about');
  if (aboutSection) statsObserver.observe(aboutSection);

  // ── 6. DOUBLE DIAMOND PROCESS STEPPER ─────────────────────────
  const stepperSteps = document.querySelectorAll('.stepper-step');
  const processCards = document.querySelectorAll('.process-card');
  const stepperFill = document.getElementById('stepperFill');

  if (stepperSteps.length > 0 && processCards.length > 0) {
    stepperSteps.forEach((stepBtn, index) => {
      stepBtn.addEventListener('click', () => {
        // Update Step Buttons
        stepperSteps.forEach((s, idx) => {
          s.classList.toggle('active', idx === index);
          s.classList.toggle('completed', idx < index);
        });

        // Update Cards
        processCards.forEach((card, idx) => {
          card.classList.toggle('active', idx === index);
        });

        // Update Progress Line Fill
        const percentage = (index / (stepperSteps.length - 1)) * 100;
        if (stepperFill) {
          stepperFill.style.width = `${percentage}%`;
        }
      });
    });
  }

  // ── 7. PROJECT FILTER TABS ────────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-showcase-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');

      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'grid';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // ── 8. EMAIL INTERACTIONS & COPY TO CLIPBOARD ─────────────────
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyEmailText = document.getElementById('copyEmailText');
  const emailContactCard = document.getElementById('emailContactCard');
  const toastPopup = document.getElementById('toastPopup');
  const contactForm = document.getElementById('contactForm');
  const targetEmail = 'siddhardhagudiwada133@gmail.com';
  const mailtoLink = `mailto:${targetEmail}?subject=Design%20Opportunity%20%E2%80%94%20Siddhartha%20Gudiwada&body=Hi%20Siddhartha%2C%0A%0A`;

  function showToast(message) {
    if (!toastPopup) return;
    toastPopup.textContent = message;
    toastPopup.classList.add('show');
    setTimeout(() => {
      toastPopup.classList.remove('show');
    }, 3200);
  }

  // Direct Email Display Click
  if (emailContactCard) {
    emailContactCard.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = mailtoLink;
    });
  }

  // Copy Email Button Click
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(targetEmail);
        if (copyEmailText) copyEmailText.textContent = 'Copied!';
        showToast('✓ Email copied to clipboard: ' + targetEmail);
        setTimeout(() => {
          if (copyEmailText) copyEmailText.textContent = 'Copy Address';
        }, 2200);
      } catch (err) {
        showToast('Email: ' + targetEmail);
      }
    });
  }

  // Contact Form Submission (AJAX with Mailto fallback)
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const sendBtn = contactForm.querySelector('.btn-send-form');
      const originalHtml = sendBtn ? sendBtn.innerHTML : '';
      if (sendBtn) {
        sendBtn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
        sendBtn.disabled = true;
      }

      const formData = new FormData(contactForm);
      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          showToast('✓ Message sent successfully! Siddhartha will reply soon.');
          contactForm.reset();
        } else {
          // Direct fallback submission
          contactForm.submit();
        }
      } catch (err) {
        const name = formData.get('name') || '';
        const message = formData.get('message') || '';
        window.location.href = `mailto:${targetEmail}?subject=Design%20Opportunity%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
        showToast('✓ Opening email client to send message...');
      } finally {
        if (sendBtn) {
          sendBtn.innerHTML = originalHtml;
          sendBtn.disabled = false;
        }
      }
    });
  }

  // ── 9. 3D TILT EFFECT ON HERO PORTRAIT & CARDS ────────────────
  const heroPortraitWrap = document.getElementById('heroPortraitWrap');
  if (heroPortraitWrap && window.matchMedia('(pointer: fine)').matches) {
    heroPortraitWrap.addEventListener('mousemove', (e) => {
      const rect = heroPortraitWrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      heroPortraitWrap.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
    });

    heroPortraitWrap.addEventListener('mouseleave', () => {
      heroPortraitWrap.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
      heroPortraitWrap.style.transition = 'transform 0.5s ease';
    });

    heroPortraitWrap.addEventListener('mouseenter', () => {
      heroPortraitWrap.style.transition = 'none';
    });
  }

  // ── 10. ROTATING BADGE HOVER ACCELERATION ─────────────────────
  const rotatingBadge = document.getElementById('rotatingBadge');
  if (rotatingBadge) {
    rotatingBadge.addEventListener('click', () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // ── 11. SMOOTH SCROLL FOR IN-PAGE ANCHORS ─────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ── 12. AURORA BACKGROUND SHADER (React Bits Aurora-TS-TW Effect) ────
  function initAurora() {
    const canvas = document.getElementById('auroraCanvas');
    if (!canvas) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      return;
    }

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec3 u_color1;
      uniform vec3 u_color2;
      uniform vec3 u_color3;
      uniform vec3 u_color4;
      uniform float u_amplitude;
      uniform float u_blend;
      varying vec2 v_uv;

      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

      float snoise(vec3 v){
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);

        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

        i = mod(i, 289.0);
        vec4 p = permute(permute(permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0));

        float n_ = 0.142857142857;
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);

        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);

        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      void main() {
        vec2 uv = v_uv;
        float t = u_time * 0.28;

        float n1 = snoise(vec3(uv.x * 2.0, uv.y * 1.6 - t * 0.3, t * 0.15));
        float n2 = snoise(vec3(uv.x * 3.2 + t * 0.2, uv.y * 2.0 + t * 0.15, t * 0.1));
        float n3 = snoise(vec3(uv.x * 1.5 - t * 0.1, uv.y * 1.2, t * 0.2));

        float wave = sin((uv.y + n1 * u_amplitude * 0.4) * 3.14159) * cos((uv.x + n2 * u_amplitude * 0.3) * 3.14159);
        float ramp = clamp(wave * 0.5 + 0.5 + n3 * 0.22, 0.0, 1.0);

        vec3 col = mix(u_color1, u_color2, smoothstep(0.12, 0.52, ramp));
        col = mix(col, u_color3, smoothstep(0.42, 0.72, ramp));
        col = mix(col, u_color4, smoothstep(0.68, 0.94, ramp));

        float alpha = smoothstep(0.05, 0.85, ramp) * u_blend;
        gl_FragColor = vec4(col, alpha);
      }
    `;

    function createShader(glCtx, type, source) {
      const shader = glCtx.createShader(type);
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]), gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uResLoc = gl.getUniformLocation(program, 'u_resolution');
    const uColor1Loc = gl.getUniformLocation(program, 'u_color1');
    const uColor2Loc = gl.getUniformLocation(program, 'u_color2');
    const uColor3Loc = gl.getUniformLocation(program, 'u_color3');
    const uColor4Loc = gl.getUniformLocation(program, 'u_color4');
    const uAmpLoc = gl.getUniformLocation(program, 'u_amplitude');
    const uBlendLoc = gl.getUniformLocation(program, 'u_blend');

    // Forest Green & Honey Gold Palette
    gl.uniform3f(uColor1Loc, 0.086, 0.188, 0.141); // #163024
    gl.uniform3f(uColor2Loc, 0.898, 0.643, 0.231); // #e5a43b
    gl.uniform3f(uColor3Loc, 0.145, 0.302, 0.231); // #254d3b
    gl.uniform3f(uColor4Loc, 0.961, 0.690, 0.255); // #f5b041
    gl.uniform1f(uAmpLoc, 0.75);
    gl.uniform1f(uBlendLoc, 0.60);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    let isVisible = true;
    const heroSec = document.getElementById('hero');
    if (heroSec && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
      }, { threshold: 0 });
      observer.observe(heroSec);
    }

    function resize() {
      const width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      const height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
      
      canvas.width = Math.max(300, Math.floor(width * 0.5));
      canvas.height = Math.max(300, Math.floor(height * 0.5));
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uResLoc) gl.uniform2f(uResLoc, canvas.width, canvas.height);
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();

    let startTime = performance.now();
    function render(now) {
      if (isVisible) {
        const time = (now - startTime) * 0.001;
        gl.uniform1f(uTimeLoc, time);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }

  initAurora();

});


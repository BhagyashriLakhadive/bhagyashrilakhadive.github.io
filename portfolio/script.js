/* ============================================================
   Bhagyashri Lakhadive — Portfolio Scripts
   script.js · Extracted & enhanced from index.html
   ============================================================ */

/* ── Custom Cursor ─────────────────────────────────────────── */
(function initCursor() {
  const cursor     = document.querySelector('.cursor');
  const cursorRing = document.querySelector('.cursor-ring');
  if (!cursor || !cursorRing) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Smooth ring follow
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Expand cursor on interactive elements
  document.querySelectorAll('a, button, .project-card, .skill-card, .edu-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width  = '18px';
      cursor.style.height = '18px';
      cursorRing.style.width  = '52px';
      cursorRing.style.height = '52px';
      cursorRing.style.borderColor = 'var(--accent2)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width  = '10px';
      cursor.style.height = '10px';
      cursorRing.style.width  = '36px';
      cursorRing.style.height = '36px';
      cursorRing.style.borderColor = 'var(--accent)';
    });
  });
})();

/* ── Scroll Reveal ─────────────────────────────────────────── */
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

/* ── Active Nav Link on Scroll ──────────────────────────────── */
(function initActiveNav() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
})();

/* ── Contact Form Handler ───────────────────────────────────── */
function handleSubmit() {
  const name    = document.getElementById('rec-name').value.trim();
  const company = document.getElementById('rec-company').value.trim();
  const email   = document.getElementById('rec-email').value.trim();
  const role    = document.getElementById('rec-role').value.trim();
  const type    = document.getElementById('rec-type').value;
  const ctc     = document.getElementById('rec-ctc').value.trim();
  const msg     = document.getElementById('rec-msg').value.trim();

  if (!name || !email || !role || !msg) {
    alert('Please fill in all required fields (Name, Email, Role, Message).');
    return;
  }

  const sub  = encodeURIComponent(`Job Opportunity: ${role} at ${company}`);
  const body = encodeURIComponent(
    `Hi Bhagyashri,\n\nI am reaching out about a job opportunity.\n\n` +
    `Recruiter: ${name}\nCompany: ${company}\nEmail: ${email}\n` +
    `Role: ${role}\nType: ${type}\nCTC/Budget: ${ctc}\n\n${msg}\n\nBest,\n${name}`
  );

  window.location.href = `mailto:bhagyashrilakhadive@gmail.com?subject=${sub}&body=${body}`;

  const successEl = document.getElementById('formSuccess');
  const formEl    = document.getElementById('applyForm');

  if (successEl) successEl.style.display = 'block';
  if (formEl) {
    formEl.style.opacity       = '0.4';
    formEl.style.pointerEvents = 'none';
  }
}

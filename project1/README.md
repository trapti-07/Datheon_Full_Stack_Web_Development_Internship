# 🚀 Trapti Katre - Developer Portfolio Website

A clean, modern, responsive, and professional personal developer portfolio website for **Trapti Katre**, a 3rd-year Computer Science student passionate about **Web Development**, **Java DSA (Data Structures & Algorithms)**, and **Artificial Intelligence**.

Designed and optimized for the **Skillinf Portfolio Design Hackathon 2026 – Build, Deploy & Showcase Your Creative**.

Built with semantic **HTML5**, modern **CSS3** (Flexbox, CSS Grid, and custom design tokens), and vanilla **JavaScript** (ES6+).

---

## 🌟 Key Highlights & Features

- **🎨 Premium Dark & Light Themes**: Instant theme toggle with system preference detection (`prefers-color-scheme`) and `localStorage` persistence.
- **✨ Hero Section**:
  - Greeting: *"Hi, I'm Trapti Katre"*
  - Professional Headline: *"Aspiring Web Developer | Java DSA Enthusiast"*
  - Genuine, authentic introduction focused on skill growth and practical project building.
  - Three distinct action buttons: **"Explore My Work"**, **"Download Resume"**, and **"Contact Me"**.
  - Authentic profile photo from `assets/photo.jpeg` with glowing animated ambient aura and floating technology badges.
- **📖 About Me**:
  - Honest overview of Computer Science studies at **Oriental Institute of Science and Technology, Bhopal, Madhya Pradesh** (Expected 2024–2028).
  - Key focus areas: Full-Stack Web Development, Java Algorithmic Problem Solving (DSA), and Artificial Intelligence systems.
- **⚡ Technical Competencies**:
  - Organized into clean, transparent categories without exaggerated progress bars:
    - **Frontend**: HTML, CSS, JavaScript, React
    - **Backend**: Node.js, Express.js
    - **Database**: MongoDB
    - **Programming**: Java (DSA & Problem Solving)
    - **Developer Tools**: Git, GitHub, VS Code, Postman, Vite
  - Interactive category filter tabs (*All*, *Frontend*, *Backend & Database*, *Languages*).
- **💻 Featured Projects**:
  1. **Helvare AI** &mdash; Intelligent emergency response and real-time medical incident assistance platform featuring dispatch tracking, interactive alerts, and automated first-aid guidance. ([GitHub Repository](https://github.com/trapti-07/OIST-ACM-AOC-CodeX))
  2. **Campus Event Management System** &mdash; Role-based campus operations and event task coordinator with administrative oversight and participant coordination.
  3. **QuizPilot** &mdash; AI-powered smart revision and exam preparation assistant that generates practice quizzes, tracks performance, and identifies weak topic areas. ([GitHub Repository](https://github.com/trapti-07/QuizPilot))
  4. **Zoom Clone** &mdash; Real-time video conferencing web application built with WebRTC, Socket.io, Node.js, and Express, offering multi-peer HD video/audio calls, meeting rooms, screen sharing, and chat. ([GitHub Repository](https://github.com/trapti-07/zoom-clone))
- **🎓 Education & Credentials**:
  - **B.Tech Computer Science and Engineering**: Oriental Institute of Science and Technology, Bhopal (3rd Year Undergrad).
  - **Experience**: CBSOT Summer Internship Program 2026 (Web Development & Software Engineering Track).
  - **Certifications**:
    - Oracle Cloud Infrastructure (OCI) AI Foundations Associate (2025 Certified)
    - Claude101 Certificate
    - Agent of Change Certificate
- **📄 Resume Integration**:
  - Direct download and view of `assets/TraptiKatre-resume.pdf`.
  - Graceful fallback detection to ensure no broken links.
- **📬 Verified Contact Channels & Form**:
  - Email: [traptikatre2006@gmail.com](mailto:traptikatre2006@gmail.com)
  - GitHub: [github.com/trapti-07](https://github.com/trapti-07)
  - LinkedIn: [linkedin.com/in/trapti-katre](https://www.linkedin.com/in/trapti-katre-61a007339?utm_source=share_via&utm_content=profile&utm_medium=member_android)
  - Location: Bhopal, Madhya Pradesh | Contact: +91 6267582266
  - One-click copy email button with instant toast notification.
  - Interactive message form with client-side validation.
- **✨ Dynamic Animations & Interactive Polish**:
  - **Scroll Reading Progress Bar**: Real-time multi-color glowing progress bar at the very top of the window tracking page scroll.
  - **Hero Interactive Particle Network**: Lightweight constellation particle background that connects floating nodes and gently deflects around the mouse cursor (auto-pauses off-screen for battery efficiency).
  - **Rotating Conic Halo**: Orbiting multi-stop gradient ring surrounding the profile avatar.
  - **3D Card Tilt & Glare**: Mouse-tracking perspective tilt with dynamic glass glare on project, skill, stat, and about cards.
  - **Click Ripple Waves & Sheen**: Expanding ripple wave on button clicks and light sweep shimmer on hover.
  - **Category-specific Skill Glows**: Custom tailored hover glows for Frontend (cyan), Backend (emerald), and Languages (amber).
  - **Staggered Directional Scroll Reveals**: Fade-up, slide-in from left/right, and scale-in reveals for sections and grids.
  - **Floating Back-to-Top**: Levitation bounce animation to guide user interaction.
- **♿ Accessibility & Performance**:
  - Responsive across mobile devices (320px+), tablets, laptops, and ultra-wide screens.
  - Zero horizontal overflow.
  - High contrast ratios, semantic landmarks, and full keyboard accessibility (`Tab`, `Escape` to close modals and drawer).
  - Respects `prefers-reduced-motion` across all CSS and canvas animations.

---

## 📂 Project Structure

```text
├── assets/
│   ├── photo.jpeg                  # Trapti Katre profile photograph
│   └── TraptiKatre-resume.pdf      # Trapti Katre resume PDF
├── css/
│   └── styles.css                  # Custom CSS styling, variables, animations, and media queries
├── js/
│   └── script.js                   # Navigation, theme toggle, modal handling, form validation
├── index.html                      # Semantic HTML5 document
└── README.md                       # Documentation & deployment guide
```

---

## 🛠️ How to Run Locally

### Method 1: Direct Browser Opening (Quickest)
1. Open the project folder in File Explorer:
   ```text
   c:\Users\INDIA\Desktop\internship project
   ```
2. Double-click `index.html` to open it directly in Chrome, Edge, or Firefox.

### Method 2: Node.js / NPX Server
```powershell
npx serve .
```
Then open `http://localhost:3000` in your web browser.

### Method 3: VS Code Live Server
1. Open this folder in Visual Studio Code.
2. Right-click `index.html` and select **Open with Live Server**.

---

## 🌐 Deployment Instructions

### Option 1: GitHub Pages (Recommended, Free)

1. Open PowerShell in this project folder:
   ```powershell
   cd "c:\Users\INDIA\Desktop\internship project"
   git init
   git config --global user.name "Trapti Katre"
   git config --global user.email "traptikatre2006@gmail.com"
   git add .
   git commit -m "Skillinf Hackathon 2026: Trapti Katre Portfolio Upgrade"
   ```
2. Create a new public repository on GitHub (e.g. `portfolio`).
3. Push your repository:
   ```powershell
   git branch -M main
   git remote add origin https://github.com/trapti-07/portfolio.git
   git push -u origin main
   ```
4. On GitHub, go to **Settings > Pages > Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main` / `/(root)`
   - Click **Save**.
5. Your website will be live in 1–2 minutes at:
   ```text
   https://trapti-07.github.io/portfolio/
   ```

### Option 2: Vercel / Netlify (Drag & Drop or Git)
- **Vercel**: Import repository on [vercel.com](https://vercel.com) as a static site and click **Deploy**.
- **Netlify**: Drag and drop this folder directly onto [app.netlify.com/drop](https://app.netlify.com/drop) for an instant live URL.

---

## 👤 Author

- **Trapti Katre** &mdash; 3rd-Year Computer Science Student
- **GitHub**: [github.com/trapti-07](https://github.com/trapti-07)
- **LinkedIn**: [linkedin.com/in/trapti-katre](https://www.linkedin.com/in/trapti-katre-61a007339?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- **Email**: [traptikatre2006@gmail.com](mailto:traptikatre2006@gmail.com)

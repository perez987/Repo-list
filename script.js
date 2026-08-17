      const repos = [
        {
          id: 1,
          name: "About This Hack",
          url: "https://github.com/perez987/About-This-Hack",
          description:
            "A hardware info app for macOS that keeps the classic About This Mac feel while adding a modern SwiftUI presentation and more detail.",
          category: "SwiftUI App",
          accent: "#ff7b72",
          highlights: ["Hardware discovery", "Logo customization"],
        },
        {
          id: 2,
          name: "AgendaT",
          url: "https://github.com/perez987/AgendaT",
          description:
            "A simple macOS phonebook application built with SwiftUI for macOS 13+. LazyGrid as user interface, search and edit functionalities.",
          category: "SwiftUI App",
          accent: "#ffa657",
          highlights: ["Phonebook", "LazyGrid", "XML source"],
        },
        {         
          id: 3,
          name: "Apple Secure Boot and Vault with OpenCore",
          url: "https://github.com/perez987/Apple-Secure-Boot-and-Vault-with-OpenCore",
          description:
            "OpenCore and Apple Secure Boot. SecureBootModel in OpenCore 0.7.2+. Vaulting OpenCore.",
          category: "Hackintosh",
          accent: "#f2cc60",
          highlights: ["SecureBootModel", "OpenCore vault", "ApECID"],
        },
        {         
          id: 4,
          name: "AppleHDA back on macOS Tahoe",
          url: "https://github.com/perez987/AppleHDA-back-on-macOS-26-Tahoe",
          description:
            "Reinstall AppleHDA.kext, removed since macOS Tahoe beta 2, to restore sound from the built-in audio chip.",
          category: "Hackintosh",
          accent: "#58a6ff",
          highlights: ["AppleHDA.kext", "MyKextInstaller", "SimpleLoader"],
        },
        {
          id: 5,
          name: "Audiometry",
          url: "https://github.com/perez987/Audiometry",
          description:
            "Audiometry app developed with SwiftUI in Xcode 15. Calculates hearing loss, ELI, and SAL. CoreData and SwiftUI as data storage. Patient report print.",
          category: "SwiftUI App",
          accent: "#eed2ee",
          highlights: ["Hearing loss", "ELI index", "SAL index"],
        },
        {
          id: 6,
          name: "DMGBuildNotarize",
          url: "https://github.com/perez987/DMGBuildNotarize",
          description:
            "Create, sign, and notarize DMG installers from Xcode-built macOS app bundles.",
          category: "Developer",
          accent: "#56d364",
          highlights: ["DMG creation", "Code signing", "DMG notarization"],
        },
        {
          id: 7,
          name: "DockProgress-test",
          url: "https://github.com/perez987/DockProgress-test",
          description:
            "Example app to see the different DockProgress animations (styles) in action.",
          category: "Utility",
          accent: "#a371f7",
          highlights: ["DockProgress", "Bar style", "Pie style"],
        },
        {
          id: 8,
          name: "DownloadFullInstaller",
          url: "https://github.com/perez987/DownloadFullInstaller",
          description:
            'A macOS SwiftUI application that downloads PKG packages and IPSW firmwares for the "Install macOS Big Sur" app and newer releases.',
          category: "SwiftUI App",
          accent: "#a020f0",
          highlights: ["PKG downloads", "IPSW firmware", "Golden Gate support"],
        },
        {         
          id: 9,
          name: "Fenvi Wi-Fi back on Sonoma, Sequoia and Tahoe",
          url: "https://github.com/perez987/Fenvi-T919-wifi-back-on-Sonoma-Sequoia-Tahoe",
          description:
            "Get back Fenvi T919 and other Broadcom Wi-Fi devices that lost support in macOS 14 Sonoma.",
          category: "Hackintosh",
          accent: "#ffb5c5",
          highlights: ["Fenvi T919", "Fenvi HB1200", "Broadcom Wi-Fi"],
        },
        {
          id: 10,
          name: "GitHub Updater System",
          url: "https://github.com/perez987/GitHub-updater-system",
          description:
            "A lightweight update checker, built with SwiftUI, that queries the GitHub Releases API to detect newer versions of your application. It requires no third-party dependencies (no Sparkle or similar framework required).",
          category: "GitHub",
          accent: "#cdad00",
          highlights: ["GitHub release API", "GitHub releases"],
        },
        {
          id: 11,
          name: "HeliPort",
          url: "https://github.com/perez987/HeliPort",
          description:
            "Intel Wi-Fi Client for itlwm, with improvements.",
          category: "Hackintosh",
          accent: "#708090",
          highlights: ["itlwm.kext", "OpenIntelWireless", "Intel Wi-Fi"],
        },
        {
          id: 12,
          name: "Icns-creator",
          url: "https://github.com/perez987/Icns-creator",
          description: "A native macOS app that converts images to .iconset or .icns.",
          category: "Developer",
          accent: "#00ff00",
          highlights: ["Build .iconset", "Image to .icns"],
        },
        {
          id: 13,
          name: "Intel AX210 on macOS Sonoma up to Tahoe",
          url: "https://github.com/perez987/Intel-AX210-on-Sonoma-Sequoia-Tahoe",
          description: "Intel AX210S PCIe WiFi card suported on macOS Sonoma to Tahoe thanks to OpenIntelWireless work, not needing to relax Apple Secure Boot or SIP.",
          category: "Hackintosh",
          accent: "#ff83fa",
          highlights: ["itlwm.kext", "AirportItlwm.kext", "OpenIntelWireless"],
        },
        {
          id: 14,
          name: "Intel UHD 630 on macOS",
          url: "https://github.com/perez987/Intel-UHD-630-on-macOS",
          description: "Intel UHD Graphics 630 Coffee Lake R 9th Gen. on macOS using OpenCore + WhateverGreen.",
          category: "Hackintosh",
          accent: "#c1cdcd",
          highlights: ["Coffee Lake", "OpenCore", "WhateverGreen.kext"],
        },
        {
          id: 15,
          name: "LipoArchs",
          url: "https://github.com/perez987/LipoArchs",
          description:
            "A minimal SwiftUI app that displays the architectures found in a dropped executable, library, or app bundle.",
          category: "Developer",
          accent: "#ff7b72",
          highlights: ["Binary inspection", "Architecture display", "Drop target"],
        },
        {
          id: 16,
          name: "macOS Sequoia on Z390 with OpenCore",
          url: "https://github.com/perez987/macOS-15-Sequoia-on-z390-with-OpenCore",
          description:
            "macOS 15 Sequoia on Z390 Aorus Elite motherboard and RX 6600 XT using OpenCore.",
          category: "Hackintosh",
          accent: "#ffa657",
          highlights: ["macOS 15 Sequoia", "OpenCore", "OCLP"],
        },
        {
          id: 17,
          name: "macOS Tahoe on Z390 with OpenCore",
          url: "https://github.com/perez987/macOS-26-Tahoe-on-Z390-with-OpenCore",
          description:
            "macOS 26 Tahoe on Z390 Aorus Elite motherboard with RX 6600 XT and OpenCore.",
          category: "Hackintosh",
          accent: "#f2cc60",
          highlights: ["macOS 26 Tahoe", "USB ports map", "OpenCore"],
        },
        {
          id: 18,
          name: "macOS USB ports map with USBToolBox",
          url: "https://github.com/perez987/USB-ports-map-for-macOS-with-USBToolBox",
          description:
            "How to build the USB ports map for macOS with Dhinakg’s USBToolBox from Windows. Updated to macOS Tahoe.",
          category: "Hackintosh",
          accent: "#58a6ff",
          highlights: ["USBMap", "USBPorts", "Dhinakg"],
        },
        {
          id: 19,
          name: "Microsoft Access in Java with UCanAccess",
          url: "https://github.com/perez987/Microsoft-Access-in-Java-with-UCanAccess",
          description: "Microsoft Access in Java with 64 bits UCanAccess driver.",
          category: "Other",
          accent: "#eed2ee",
          highlights: ["UCanAccess", "Jackcess", "JDBC", "ODBC"],
        },
        {
          id: 20,
          name: "MP3GainOSX-swiftui",
          url: "https://github.com/perez987/MP3GainOSX-swiftui",
          description: "MP3Gain Express for macOS, migrated to SwiftUI",
          category: "SwiftUI App",
          accent: "#56d364",
          highlights: ["MP3 volume", "mp3gain", "aacgain"],
        },
        {
          id: 21,
          name: "MP3Player",
          url: "https://github.com/perez987/MP3Player",
          description: "A simple SwiftUI app for macOS to play MP3 and M4A files.",
          category: "SwiftUI App",
          accent: "#a371f7",
          highlights: ["MP3 playback", "M4A support"],
        },
        {
          id: 22,
          name: "NotarizeDMG",
          url: "https://github.com/perez987/NotarizeDMG",
          description:
            "A macOS Utility that notarizes signed or unsigned DMG images with Apple and can drive create-dmg when it is installed.",
          category: "Developer",
          accent: "#a020f0",
          highlights: ["DMG notarization", "create-dmg Add-on"],
        },
        {
          id: 23,
          name: "OpenCore and UEFI Secure Boot",
          url: "https://github.com/perez987/OpenCore-and-UEFI-Secure-Boot",
          description:
            "UEFI Secure Boot with OpenCore boot loader.",
          category: "Hackintosh",
          accent: "#ffb5c5",
          highlights: ["EFITools", "KeyTool", "SBSignTool"],
        },
        {
          id: 24,
          name: "Repositories list",
          url: "https://github.com/perez987/Repo-list",
          description:
            "List of my GitHub repositories, in a modern design, built as a static html site.",
          category: "GitHub",
          accent: "#cdad00",
          highlights: ["HTML", "CSS", "JavaScript"],
        },
        {
          id: 25,
          name: "RX 6600 XT on macOS with softPowerPlayTable",
          url: "https://github.com/perez987/6600XT-on-macOS-with-softPowerPlayTable",
          description:
            "RX 6600 XT on macOS: Zero RPM disabled with softPowerPlayTable in SSDT or config.plist.",
          category: "Hackintosh",
          accent: "#708090",
          highlights: ["PowerPlayTable", "softPowerPlayTable", "SSDT"],
        },
        {
          id: 26,
          name: "Sleep issue in macOS Sequoia",
          url: "https://github.com/perez987/macOS-15-sequoia-sleep-issue",
          description:
            "macOS 15 Sequoia does enter sleep properly due to wake events.",
          category: "Hackintosh",
          accent: "#00ff00",
          highlights: ["apsd process", "Wake Events", "launchctl"],
        },
        {
          id: 27,
          name: "SMBIOS of Macs Intel",
          url: "https://github.com/perez987/SMBIOS-Intel-Mac-all",
          description: "Intel Mac SMBIOS with CPU, GPU, year, screen size and supported macOS (excluding Xserve).",
          category: "Hackintosh",
          accent: "#ff83fa",
          highlights: ["Intel Mac", "SMBIOS", "Mac model"],
        },
        {
          id: 28,
          name: "Sparkle in a sandboxed app",
          url: "https://github.com/perez987/Sparkle-in-sandboxed-app",
          description:
            "Testing site to learn how to implement Sparkle in a SwiftUI sandboxed app.",
          category: "GitHub",
          accent: "#c1cdcd",
          highlights: ["Appcast.xml", "App sandboxing", "Release updater"],
        },
        {
          id: 29,
          name: "Sparkle in an Xcode project",
          url: "https://github.com/perez987/How-to-Sparkle-in-Xcode-project",
          description:
            "How to configure the Sparkle auto-update system in a GitHub repository containing an Xcode project.",
          category: "GitHub",
          accent: "#ff7b72",
          highlights: ["Appcast.xml", "SUPublicKey", "EDSignature"],
        },
        {
          id: 30,
          name: "Update volume name in OpenCore picker",
          url: "https://github.com/perez987/Update-volume-name-in-OpenCore-picker",
          description:
            "How to update the macOS volume name in the OpenCore picker.",
          category: "Hackintosh",
          accent: "#ffa657",
          highlights: ["OpenCore", "Preboot volume", ".disk_label"],
        },
        {
          id: 31,
          name: "Windowify-swiftui",
          url: "https://github.com/perez987/Windowify-swiftui",
          description:
            "Open an image as a configurable macOS-style window using a SwiftUI desktop app.",
          category: "SwiftUI App",
          accent: "#f2cc60",
          highlights: ["Screenshot from image", "Configurable screenshot"],
        },
        {
          id: 32,
          name: "Xattr-Editor",
          url: "https://github.com/perez987/Xattr-Editor",
          description:
            "A SwiftUI GUI for viewing, changing, adding, and removing extended file attributes on macOS.",
          category: "Utility",
          accent: "#58a6ff",
          highlights: ["Extended attributes", "Edit metadata", "Quarantine removal"],
        },
        {
          id: 33,
          name: "Xattr-remove",
          url: "https://github.com/perez987/Xattr-remove",
          description:
            'A SwiftUI application for macOS that removes the extended attribute "com.apple.quarantine" from files downloaded from the internet.',
          category: "Utility",
          accent: "#eed2ee",
          highlights: ["Drag & drop", "Quarantine removal", "Ad-hoc signing"],
        },
        {
          id: 34,
          name: "XML + XSL Transform → HTML",
          url: "https://github.com/perez987/HTML-from-XML-XSL-with-VisualStudio",
          description:
            "Convert an XML document to an HTML document with formatting and layout defined in an XSL style sheet with Visual Studio 2019 (VB).",
          category: "Other",
          accent: "#56d364",
          highlights: ["XSLCompiledTransform", "XSLT"],
        },
        {
          id: 35,
          name: "XMLFolderStructure",
          url: "https://github.com/perez987/XMLFolderStructure",
          description:
            'macOS SwiftUI application that recursively generates XML representations of directory structure.',
          category: "SwiftUI App",
          accent: "#a371f7",
          highlights: [ "Directory structure", "Syntax highlighting"],
        },
        {
          id: 36,
          name: "XSL-Transform",
          url: "https://github.com/perez987/XSL-Transform",
          description:
            'SwiftUI macOS application that performs XSL transformations on XML files to produce formatted HTML output.',
          category: "SwiftUI App",
          accent: "#a020f0",
          highlights: [ "XML + XSL → HTML", "XSL stylesheet"],
        },
      ];
      
/* COLOR CYCLE
red → ff7b72
orange → ffa657
yellow → f2cc60
blue → 58a6ff
thistle → eed2ee
lavender → 56d364
green → a371f7
purple → a020f0
pink → ffb5c5
gold3 → cdad00
slate-grey → 708090
green1 → 00ff00
orchid1 → ff83fa
azure3 → c1cdcd
*/

      const categoryCounts = repos.reduce((acc, repo) => {
        acc[repo.category] = (acc[repo.category] || 0) + 1;
        return acc;
      }, {});
      const categories = [
        "All",
        ...[...new Set(repos.map((repo) => repo.category))].sort(
          (a, b) => categoryCounts[b] - categoryCounts[a]
        ),
      ];
      let activeCategory = "All";

      const repoGrid = document.getElementById("repo-grid");
      const emptyState = document.getElementById("empty-state");
      const searchInput = document.getElementById("search-input");
      const categoryPills = document.getElementById("category-pills");
      const activeCategoryLabel = document.getElementById("active-category-label");
      const repoCount = document.getElementById("repo-count");
      const highlightCount = document.getElementById("highlight-count");
      const backToTop = document.getElementById("back-to-top");

      function createCategoryPills() {
        categoryPills.innerHTML = "";

        categories.forEach((category) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "category-pill";
          button.textContent = category;
          button.setAttribute("role", "tab");
          button.setAttribute("aria-selected", String(activeCategory === category));

          if (activeCategory === category) {
            button.classList.add("is-active");
          }

          button.addEventListener("click", () => {
            activeCategory = category;
            activeCategoryLabel.textContent = category;
            createCategoryPills();
            renderRepos();
          });

          categoryPills.appendChild(button);
        });
      }

      function getFilteredRepos() {
        const query = searchInput.value.trim().toLowerCase();

        return repos.filter((repo) => {
          const categoryMatch = activeCategory === "All" || repo.category === activeCategory;
          const searchableText = [repo.name, repo.description, repo.category, ...repo.highlights]
            .join(" ")
            .toLowerCase();

          return categoryMatch && (!query || searchableText.includes(query));
        });
      }

      function renderRepos() {
        const filteredRepos = getFilteredRepos().sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        repoGrid.innerHTML = "";
        emptyState.classList.toggle("show", filteredRepos.length === 0);
        repoGrid.hidden = filteredRepos.length === 0;

        filteredRepos.forEach((repo) => {
          const card = document.createElement("article");
          card.className = "repo-card";
          card.style.setProperty("--repo-accent", repo.accent);
          card.innerHTML = `
            <div class="repo-preview">
              <div class="preview-toolbar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="preview-content">
                <div class="preview-monogram" aria-hidden="true">⌘</div>
                <div class="preview-meta">
                  <span class="preview-label">Repository #${repo.id}</span>
                  <strong>${repo.name}</strong>
                  <span>${repo.category}</span>
                </div>
              </div>
            </div>
            <div class="repo-body">
              <div class="repo-heading">
                <div>
                  <h3>${repo.name}</h3>
                  <p>${repo.description}</p>
                </div>
              </div>
              <div class="repo-tags">
                ${repo.highlights.map((highlight) => `<span class="repo-tag">${highlight}</span>`).join("")}
              </div>
              <div class="repo-footer">
                <span class="repo-category">${repo.category}</span>
                <a
                  href="${repo.url}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="repo-action"
                >
                  View on GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          `;

          repoGrid.appendChild(card);
        });
      }

      function updateStaticStats() {
        repoCount.textContent = String(repos.length);
        highlightCount.textContent = String(
          repos.reduce((sum, repo) => sum + repo.highlights.length, 0),
        );
      }

      function initializeBackToTop() {
        const toggleVisibility = () => {
          backToTop.classList.toggle("show", window.scrollY > 260);
        };

        backToTop.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });

        toggleVisibility();
        window.addEventListener("scroll", toggleVisibility, { passive: true });
      }

      function initializeBackground() {
        const canvas = document.querySelector(".galaxy-background");
        const context = canvas.getContext("2d");

        if (!context) {
          return;
        }

        const colors = ["#ffffff", "#d2a8ff", "#a371f7", "#7ee787"];
        let stars = [];
        let width = 0;
        let height = 0;
        let frame = 0;

        function buildStars() {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
          const count = Math.max(60, Math.floor((width * height) / 9000));

          stars = Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.4 + 0.2,
            speedX: (Math.random() - 0.5) * 0.14,
            speedY: (Math.random() - 0.5) * 0.14,
            opacity: Math.random() * 0.6 + 0.2,
            twinkleSpeed: Math.random() * 0.03 + 0.004,
            twinklePhase: Math.random() * Math.PI * 2,
            color: colors[Math.floor(Math.random() * colors.length)],
          }));
        }

        function hexToRgb(hex) {
          const cleanHex = hex.replace("#", "");
          return {
            r: Number.parseInt(cleanHex.slice(0, 2), 16),
            g: Number.parseInt(cleanHex.slice(2, 4), 16),
            b: Number.parseInt(cleanHex.slice(4, 6), 16),
          };
        }

        function draw() {
          context.clearRect(0, 0, width, height);

          stars.forEach((star) => {
            star.x += star.speedX;
            star.y += star.speedY;
            star.twinklePhase += star.twinkleSpeed;

            if (star.x < 0) star.x = width;
            if (star.x > width) star.x = 0;
            if (star.y < 0) star.y = height;
            if (star.y > height) star.y = 0;

            const opacity = star.opacity * (Math.sin(star.twinklePhase) * 0.5 + 0.5);
            const { r, g, b } = hexToRgb(star.color);

            context.beginPath();
            context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            context.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            context.fill();
          });

          frame = window.requestAnimationFrame(draw);
        }

        buildStars();
        draw();

        window.addEventListener("resize", buildStars);
        window.addEventListener("beforeunload", () => window.cancelAnimationFrame(frame), {
          once: true,
        });
      }

      searchInput.addEventListener("input", renderRepos);

      updateStaticStats();
      createCategoryPills();
      renderRepos();
      initializeBackToTop();
      initializeBackground();

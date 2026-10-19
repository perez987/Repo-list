      const repos = [
        {
          id: 1,
          name: "About This Hack",
          url: "https://github.com/perez987/About-This-Hack",
          description:
            "Aplicación de información de hardware para macOS que mantiene el aspecto clásico de «Acerca de este Mac» añadiendo una presentación moderna con SwiftUI y más detalles.",
          category: "SwiftUI App",
          accent: "#ff7b72",
          highlights: ["Hardware discovery", "Logo customization"],
        },
        {
          id: 2,
          name: "About This Hack 4.4.9",
          url: "https://github.com/perez987/About-This-Hack-4.4.9",
          description:
            "Versión 4.4.9 del proyecto About This Hack.",
          category: "SwiftUI App",
          accent: "#ffa657",
          highlights: ["About This Hack", "Version 4.4.9"],
        },
        {
          id: 3,
          name: "About This Hack glass",
          url: "https://github.com/perez987/About-This-Hack-glass",
          description:
            "Variante glass del proyecto About This Hack.",
          category: "SwiftUI App",
          accent: "#f2cc60",
          highlights: ["About This Hack", "Glass variant"],
        },
        {
          id: 4,
          name: "AgendaT",
          url: "https://github.com/perez987/AgendaT",
          description:
            "Sencilla aplicación de agenda de contactos para macOS desarrollada con SwiftUI para macOS 13+. Interfaz con LazyGrid, búsqueda y edición de contactos.",
          category: "SwiftUI App",
          accent: "#58a6ff",
          highlights: ["Phonebook", "LazyGrid", "XML source"],
        },
        {
          id: 5,
          name: "AgendaT-iOS",
          url: "https://github.com/perez987/AgendaT-iOS",
          description:
            "Agenda de contactos ligera con SwiftUI para iPhone y iPad con iOS o iPadOS 16 o posterior.",
          category: "SwiftUI App",
          accent: "#eed2ee",
          highlights: ["Phonebook", "iPhone", "iPad"],
        },
        {         
          id: 6,
          name: "Apple Secure Boot and Vault with OpenCore",
          url: "https://github.com/perez987/Apple-Secure-Boot-and-Vault-with-OpenCore",
          description:
            "OpenCore y Apple Secure Boot. SecureBootModel en OpenCore 0.7.2+. `Vault` en OpenCore.",
          category: "Hackintosh",
          accent: "#56d364",
          highlights: ["SecureBootModel", "OpenCore vault", "ApECID"],
        },
        {         
          id: 7,
          name: "AppleHDA back on macOS Tahoe",
          url: "https://github.com/perez987/AppleHDA-gone-on-macOS-26-Tahoe",
          description:
            "Reinstala AppleHDA.kext, eliminado desde macOS Tahoe beta 2, para restaurar el sonido del chip de audio integrado.",
          category: "Hackintosh",
          accent: "#a371f7",
          highlights: ["AppleHDA.kext", "MyKextInstaller", "SimpleLoader"],
        },
        {
          id: 8,
          name: "Audiometry",
          url: "https://github.com/perez987/Audiometry",
          description:
            "Aplicación de audiometría desarrollada con SwiftUI en Xcode 15. Calcula la pérdida auditiva, ELI y SAL. CoreData y SwiftUI como almacenamiento de datos. Impresión del informe del paciente.",
          category: "SwiftUI App",
          accent: "#a020f0",
          highlights: ["Hearing loss", "ELI index", "SAL index"],
        },
        {
          id: 9,
          name: "Audiometry-iOS",
          url: "https://github.com/perez987/Audiometry-iOS",
          description:
            "Aplicación de audiometría con SwiftUI para iPhone y iPad.",
          category: "SwiftUI App",
          accent: "#ffb5c5",
          highlights: ["Audiometry", "iPhone", "iPad"],
        },
        {
          id: 10,
          name: "DMGBuildNotarize",
          url: "https://github.com/perez987/DMGBuildNotarize",
          description:
            "Crea, firma y notariza instaladores DMG a partir de paquetes de aplicaciones macOS compilados con Xcode.",
          category: "Developer",
          accent: "#cdad00",
          highlights: ["DMG creation", "Code signing", "DMG notarization"],
        },
        {
          id: 11,
          name: "DockProgress-test",
          url: "https://github.com/perez987/DockProgress-test",
          description:
            "Aplicación de ejemplo para ver las diferentes animaciones (estilos) de DockProgress en acción.",
          category: "Utility",
          accent: "#708090",
          highlights: ["DockProgress", "Bar style", "Pie style"],
        },
        {
          id: 12,
          name: "DownloadFullInstaller",
          url: "https://github.com/perez987/DownloadFullInstaller",
          description:
            'Aplicación macOS con SwiftUI que descarga paquetes PKG y firmwares IPSW para la app «Instalar macOS Big Sur» y versiones posteriores.',
          category: "SwiftUI App",
          accent: "#00ff00",
          highlights: ["PKG downloads", "IPSW firmware", "Golden Gate support"],
        },
        {
          id: 13,
          name: "DownloadFullInstaller-11",
          url: "https://github.com/perez987/DownloadFullInstaller-11",
          description:
            "Variante de DownloadFullInstaller del repositorio DownloadFullInstaller-11.",
          category: "SwiftUI App",
          accent: "#ff83fa",
          highlights: ["DownloadFullInstaller"],
        },
        {
          id: 14,
          name: "DownloadFullInstaller-swift6",
          url: "https://github.com/perez987/DownloadFullInstaller-swift6",
          description:
            "Variante en Swift 6 del proyecto DownloadFullInstaller.",
          category: "SwiftUI App",
          accent: "#c1cdcd",
          highlights: ["DownloadFullInstaller", "Swift 6"],
        },
        {
          id: 15,
          name: "Easy-Ethernet-Icon",
          url: "https://github.com/perez987/Easy-Ethernet-Icon",
          description:
            "Aplicación SwiftUI para la barra de menús de macOS que monitoriza el estado y la velocidad de Ethernet, con selección de Ethernet o Ethernet 2 para HeliPort e itlwm.",
          category: "SwiftUI App",
          accent: "#ff7b72",
          highlights: ["Ethernet status", "Link speed", "HeliPort + itlwm"],
        },
        {
          id: 16,
          name: "Fenvi Wi-Fi back on Sonoma, Sequoia and Tahoe",
          url: "https://github.com/perez987/Fenvi-wifi-back-on-Sonoma-Sequoia-Tahoe",
          description:
            "Recupera Fenvi T919 y otros dispositivos Wi-Fi Broadcom que perdieron soporte en macOS 14 Sonoma.",
          category: "Hackintosh",
          accent: "#ffa657",
          highlights: ["Fenvi T919", "Fenvi HB1200", "Broadcom Wi-Fi"],
        },
        {
          id: 17,
          name: "GHDownloads-iOS",
          url: "https://github.com/perez987/GHDownloads-iOS",
          description:
            "Aplicación SwiftUI para iOS y iPadOS que cuenta las descargas de archivos de releases de GitHub, por repositorio y en total.",
          category: "GitHub",
          accent: "#f2cc60",
          highlights: ["Release downloads", "iPhone", "iPad"],
        },
        {
          id: 18,
          name: "GHGetRepos",
          url: "https://github.com/perez987/GHGetRepos",
          description:
            "Aplicación SwiftUI para macOS que descarga tus repositorios públicos y privados de GitHub, cuenta las descargas de archivos de releases y guarda las credenciales en el Llavero.",
          category: "GitHub",
          accent: "#58a6ff",
          highlights: ["GitHub repository downloads", "Releases counts", "Keychain"],
        },
        {
          id: 19,
          name: "GitHub Updater System",
          url: "https://github.com/perez987/GitHub-updater-system",
          description:
            "Comprobador de actualizaciones ligero, desarrollado con SwiftUI, que consulta la API de Releases de GitHub para detectar versiones más recientes de tu aplicación. No tiene dependencias de terceros (sin Sparkle ni framework similar).",
          category: "GitHub",
          accent: "#eed2ee",
          highlights: ["GitHub release API", "GitHub releases"],
        },
        {
          id: 20,
          name: "HeliPort",
          url: "https://github.com/perez987/HeliPort",
          description:
            "Cliente Wi-Fi Intel para itlwm, con mejoras.",
          category: "Hackintosh",
          accent: "#56d364",
          highlights: ["itlwm.kext", "OpenIntelWireless", "Intel Wi-Fi"],
        },
        {
          id: 21,
          name: "Icns-creator",
          url: "https://github.com/perez987/Icns-creator",
          description: "Aplicación nativa para macOS que convierte imágenes a .iconset o .icns.",
          category: "Developer",
          accent: "#a371f7",
          highlights: ["Build .iconset", "Image to .icns"],
        },
        {
          id: 22,
          name: "Iconos",
          url: "https://github.com/perez987/Iconos",
          description: "Repositorio del proyecto Iconos.",
          category: "Other",
          accent: "#a020f0",
          highlights: ["Iconos"],
        },
        {
          id: 23,
          name: "Intel AX210 on macOS Sonoma up to Tahoe",
          url: "https://github.com/perez987/Intel-AX210-on-Sonoma-Sequoia-Tahoe",
          description: "Tarjeta PCIe Wi-Fi Intel AX210S compatible con macOS Sonoma hasta Tahoe gracias al proyecto OpenIntelWireless, sin necesidad de relajar Apple Secure Boot ni SIP.",
          category: "Hackintosh",
          accent: "#ffb5c5",
          highlights: ["itlwm.kext", "AirportItlwm.kext", "OpenIntelWireless"],
        },
        {
          id: 24,
          name: "Intel UHD 630 on macOS",
          url: "https://github.com/perez987/Intel-UHD-630-on-macOS",
          description: "Intel UHD Graphics 630 Coffee Lake R 9ª Gen. en macOS con OpenCore + WhateverGreen.",
          category: "Hackintosh",
          accent: "#cdad00",
          highlights: ["Coffee Lake", "OpenCore", "WhateverGreen.kext"],
        },
        {
          id: 25,
          name: "Jicoteca",
          url: "https://github.com/perez987/Jicoteca",
          description: "Repositorio del proyecto Jicoteca.",
          category: "Other",
          accent: "#708090",
          highlights: ["Jicoteca"],
        },
        {
          id: 26,
          name: "LipoArchs",
          url: "https://github.com/perez987/LipoArchs",
          description:
            "Sencilla aplicación SwiftUI que muestra las arquitecturas de ejecutables, bibliotecas o aplicaciones arrastradas sobre ella.",
          category: "Developer",
          accent: "#00ff00",
          highlights: ["Binary inspection", "Architecture display", "Drop target"],
        },
        {
          id: 27,
          name: "Localizing an app on macOS Ventura",
          url: "https://github.com/perez987/Localizing-an-app-on-macOS-Ventura",
          description:
            "Traduce una aplicación Swift al español en macOS Ventura con Xcode 14.",
          category: "Developer",
          accent: "#ff83fa",
          highlights: ["Localization", "Spanish", "Xcode"],
        },
        {
          id: 28,
          name: "macOS Monterey and Ventura on Z390 with OpenCore",
          url: "https://github.com/perez987/macOS-12-13-on-Z390-with-OpenCore",
          description:
            "Instala macOS Monterey y Ventura en Gigabyte Z390 Aorus Elite con OpenCore, RX 6600 o Intel UHD 630 y configuraciones EFI para distintos modelos SMBIOS.",
          category: "Hackintosh",
          accent: "#c1cdcd",
          highlights: ["macOS Monterey", "macOS Ventura", "OpenCore"],
        },
        {
          id: 29,
          name: "macOS Sequoia on Z390 with OpenCore",
          url: "https://github.com/perez987/macOS-15-Sequoia-on-z390-with-OpenCore",
          description:
            "macOS 15 Sequoia en placa base Z390 Aorus Elite con RX 6600 XT usando OpenCore.",
          category: "Hackintosh",
          accent: "#ff7b72",
          highlights: ["macOS Sequoia", "OpenCore", "OCLP"],
        },
        {
          id: 30,
          name: "macOS Sonoma on Z390 with OpenCore",
          url: "https://github.com/perez987/macOS-14-Sonoma-on-z390-with-OpenCore",
          description:
            "Instala macOS Sonoma en Gigabyte Z390 Aorus Elite con RX 6600 XT y OpenCore, incluida la recuperación del Wi-Fi Broadcom mediante OCLP.",
          category: "Hackintosh",
          accent: "#ffa657",
          highlights: ["macOS Sonoma", "OpenCore", "Broadcom Wi-Fi + OCLP"],
        },
        {
          id: 31,
          name: "macOS Tahoe on Z390 with OpenCore",
          url: "https://github.com/perez987/macOS-26-Tahoe-on-Z390-with-OpenCore",
          description:
            "macOS 26 Tahoe en placa base Z390 Aorus Elite con RX 6600 XT y OpenCore.",
          category: "Hackintosh",
          accent: "#f2cc60",
          highlights: ["macOS 26 Tahoe", "USB ports map", "OpenCore"],
        },
        {
          id: 32,
          name: "macOS USB ports map with USBToolBox",
          url: "https://github.com/perez987/macOS-USB-ports-map-with-USBToolBox",
          description:
            "Cómo construir el mapa de puertos USB para macOS con USBToolBox de Dhinakg desde Windows. Actualizado para macOS Tahoe.",
          category: "Hackintosh",
          accent: "#58a6ff",
          highlights: ["USBMap", "USBPorts", "Dhinakg"],
        },
        {
          id: 33,
          name: "MacOS-Calculator",
          url: "https://github.com/perez987/MacOS-Calculator",
          description:
            "Recreación de la calculadora de macOS con SwiftUI para operaciones aritméticas básicas.",
          category: "SwiftUI App",
          accent: "#eed2ee",
          highlights: ["Calculator", "SwiftUI", "Arithmetic"],
        },
        {
          id: 34,
          name: "Microsoft Access in Java with UCanAccess",
          url: "https://github.com/perez987/Microsoft-Access-in-Java-with-UCanAccess",
          description: "Microsoft Access en Java con controlador UCanAccess de 64 bits.",
          category: "Other",
          accent: "#56d364",
          highlights: ["UCanAccess", "Jackcess", "JDBC", "ODBC"],
        },
        {
          id: 35,
          name: "MP3GainOSX-swiftui",
          url: "https://github.com/perez987/MP3GainOSX-swiftui",
          description: "MP3Gain Express para macOS, migrado a SwiftUI",
          category: "SwiftUI App",
          accent: "#a371f7",
          highlights: ["MP3 volume", "mp3gain", "aacgain"],
        },
        {
          id: 36,
          name: "MP3Player",
          url: "https://github.com/perez987/MP3Player",
          description: "Sencilla aplicación SwiftUI para macOS para reproducir archivos MP3 y M4A.",
          category: "SwiftUI App",
          accent: "#a020f0",
          highlights: ["MP3 playback", "M4A support"],
        },
        {
          id: 37,
          name: "NotarizeDMG",
          url: "https://github.com/perez987/NotarizeDMG",
          description:
            "Utilidad para macOS que notariza imágenes DMG firmadas o sin firmar con Apple y puede gestionar `create-dmg` cuando está instalado.",
          category: "Developer",
          accent: "#ffb5c5",
          highlights: ["DMG notarization", "create-dmg Add-on"],
        },
        {
          id: 38,
          name: "OpenCore and UEFI Secure Boot",
          url: "https://github.com/perez987/OpenCore-and-UEFI-Secure-Boot",
          description:
            "Arranque seguro UEFI con el gestor de arranque OpenCore.",
          category: "Hackintosh",
          accent: "#cdad00",
          highlights: ["EFITools", "KeyTool", "SBSignTool"],
        },
        {
          id: 39,
          name: "Repositories list",
          url: "https://github.com/perez987/Repo-list",
          description:
            "Lista de mis repositorios de GitHub, con diseño moderno, construida como sitio html estático.",
          category: "GitHub",
          accent: "#708090",
          highlights: ["HTML", "CSS", "JavaScript"],
        },
        {
          id: 40,
          name: "RX 6600 XT on macOS with softPowerPlayTable",
          url: "https://github.com/perez987/RX6600XT-on-macOS-with-softPowerPlayTable",
          description:
            "RX 6600 XT en macOS: Zero RPM desactivada con softPowerPlayTable en SSDT o config.plist.",
          category: "Hackintosh",
          accent: "#00ff00",
          highlights: ["PowerPlayTable", "softPowerPlayTable", "SSDT"],
        },
        {
          id: 41,
          name: "Sleep issue in macOS Sequoia",
          url: "https://github.com/perez987/macOS-15-sequoia-sleep-issue",
          description:
            "macOS 15 Sequoia no entra en reposo correctamente debido a eventos de activación.",
          category: "Hackintosh",
          accent: "#ff83fa",
          highlights: ["apsd process", "Wake Events", "launchctl"],
        },
        {
          id: 42,
          name: "SMBIOS of Intel Macs",
          url: "https://github.com/perez987/SMBIOS-Macs-Intel",
          description: "SMBIOS de Mac Intel con CPU, GPU, año, tamaño de pantalla y macOS compatibles (excepto Xserve).",
          category: "Hackintosh",
          accent: "#c1cdcd",
          highlights: ["Intel Mac", "SMBIOS", "Mac model"],
        },
        {
          id: 43,
          name: "Sparkle in a sandboxed app",
          url: "https://github.com/perez987/Sparkle-in-sandboxed-app",
          description:
            "Sitio de pruebas para aprender a implementar Sparkle en una aplicación SwiftUI en sandbox.",
          category: "GitHub",
          accent: "#ff7b72",
          highlights: ["Appcast.xml", "App sandboxing", "Release updater"],
        },
        {
          id: 44,
          name: "Sparkle in an Xcode project",
          url: "https://github.com/perez987/Sparkle-in-Xcode-project",
          description:
            "Cómo configurar el sistema de actualización automática Sparkle en un repositorio de GitHub que contiene un proyecto de Xcode.",
          category: "GitHub",
          accent: "#ffa657",
          highlights: ["Appcast.xml", "SUPublicKey", "EDSignature"],
        },
        {
          id: 45,
          name: "Update volume name in OpenCore picker",
          url: "https://github.com/perez987/Update-volume-name-in-OpenCore-picker",
          description:
            "Cómo actualizar el nombre del volumen de macOS en el selector de OpenCore.",
          category: "Hackintosh",
          accent: "#f2cc60",
          highlights: ["OpenCore", "Preboot volume", ".disk_label"],
        },
        {
          id: 46,
          name: "Windowify-swiftui",
          url: "https://github.com/perez987/Windowify-swiftui",
          description:
            "Abre una imagen como ventana al estilo de macOS configurable, usando una aplicación de escritorio con SwiftUI.",
          category: "SwiftUI App",
          accent: "#58a6ff",
          highlights: ["Screenshot from image", "Configurable screenshot"],
        },
        {
          id: 47,
          name: "Xattr-Editor",
          url: "https://github.com/perez987/Xattr-Editor",
          description:
            "Interfaz gráfica SwiftUI para ver, cambiar, añadir y eliminar atributos de archivo extendidos en macOS.",
          category: "Utility",
          accent: "#eed2ee",
          highlights: ["Extended attributes", "Edit metadata", "Quarantine removal"],
        },
        {
          id: 48,
          name: "Xattr-remove",
          url: "https://github.com/perez987/Xattr-remove",
          description:
            'Aplicación SwiftUI para macOS que elimina el atributo extendido «com.apple.quarantine» de los archivos descargados de internet.',
          category: "Utility",
          accent: "#56d364",
          highlights: ["Drag & drop", "Quarantine removal", "Ad-hoc signing"],
        },
        {
          id: 49,
          name: "XML + XSL Transform → HTML",
          url: "https://github.com/perez987/HTML-from-XML-XSL-with-VisualStudio",
          description:
            "Convierte un documento XML a un documento HTML con formato y diseño definidos en una hoja de estilos XSL con Visual Studio 2019 (VB).",
          category: "Other",
          accent: "#a371f7",
          highlights: ["XSLCompiledTransform", "XSLT"],
        },
        {
          id: 50,
          name: "XMLFolderStructure",
          url: "https://github.com/perez987/XMLFolderStructure",
          description:
            'Aplicación SwiftUI para macOS que genera de forma recursiva representaciones XML de la estructura de directorios.',
          category: "SwiftUI App",
          accent: "#a020f0",
          highlights: [ "Directory structure", "Syntax highlighting"],
        },
        {
          id: 51,
          name: "XSL-Transform",
          url: "https://github.com/perez987/XSL-Transform",
          description:
            'Aplicación SwiftUI para macOS que realiza transformaciones XSL sobre archivos XML para producir una salida HTML formateada.',
          category: "SwiftUI App",
          accent: "#ffb5c5",
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
        "Todos",
        ...[...new Set(repos.map((repo) => repo.category))].sort(
          (a, b) => categoryCounts[b] - categoryCounts[a]
        ),
      ];
      let activeCategory = "Todos";

      const repoGrid = document.getElementById("repo-grid");
      const emptyState = document.getElementById("empty-state");
      const searchInput = document.getElementById("search-input");
      const categoryPills = document.getElementById("category-pills");
      const activeCategoryLabel = document.getElementById("active-category-label");
      const repoCount = document.getElementById("repo-count");
      const visibleCount = document.getElementById("visible-count");
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
          const categoryMatch = activeCategory === "Todos" || repo.category === activeCategory;
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
        visibleCount.textContent = String(filteredRepos.length);
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
                  <span class="preview-label">Repositorio #${repo.id}</span>
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
                  Ver en GitHub
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

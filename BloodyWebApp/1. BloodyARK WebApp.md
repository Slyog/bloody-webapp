---
title: BloodyARK WebApp
tags:
  - nextjs
  - tailwind
  - aws
  - devops
  - bloodyark
date: 2025-10-17
aliases:
  - BloodyARK Setup Workflow
  - WebApp Setup
---

## 🎯 Ziel
Saubere, skalierbare WebApp-Struktur mit CI/CD, Versionierung und Dokumentation – ideal für AWS Deployment und langfristige Weiterentwicklung.

---

| 🪜 Schritt                     | 🎯 Zielbeschreibung                                                                                                          |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| **1️⃣ GitHub einrichten**      | Zentrale Codebasis erstellen – Repository `bloodyark-webapp` anlegen. Nutze GitHub als Portfolio und für Team-Collaboration. |
| **2️⃣ Umgebung aufsetzen**     | Lokale Entwicklungsumgebung einrichten: VS Code, Node.js, Git, AWS CLI, Docker.                                              |
| **3️⃣ Framework installieren** | Grundgerüst mit `Next.js` + `TailwindCSS` + evtl. `MongoDB` aufsetzen.                                                       |
| **4️⃣ Commit & Push**          | Erstes Commit (`init project`) erstellen und nach GitHub pushen. Dient der Versionierung und als Backup.                     |
| **5️⃣ Dokumentation**          | `README.md`, `.env.example`, `Dockerfile`, `docker-compose.yml` pflegen. Notiere Projektstruktur in Obsidian.                |
| **6️⃣ Deployment**             | App über Docker auf AWS EC2 hosten. Optional CloudFront + S3 für statische Files.                                            |
| **7️⃣ Automatisierung**        | CI/CD mit GitHub Actions oder AWS CodePipeline. Monitoring z. B. mit Grafana oder CloudWatch.                                |

---

## 🧩 Bonus-Tipp
- Nutze Branches: `main` (stable), `dev` (Entwicklung), `feature/*` (neue Funktionen)  
- Commits klar benennen:  
  - `feat:` → neue Funktion  
  - `fix:` → Bugfix  
  - `chore:` → Wartung / Cleanup  

---

## 🚀 Weiterführende Tasks
- [ ] GitHub Repository anlegen  
- [ ] `.gitignore` anpassen (`node_modules`, `.env`)  
- [ ] Dockerfile für Deployment schreiben  
- [ ] EC2-Instance vorbereiten  
- [ ] CI/CD Pipeline testen  
- [ ] Monitoring mit Grafana oder AWS integrieren  

---


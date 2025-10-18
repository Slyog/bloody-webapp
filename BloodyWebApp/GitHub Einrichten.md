

---
title: Schritt_1_GitHub_Einrichten
tags:
  - github
  - versionierung
  - devops
  - bloodyark
  - webapp
date: 2025-10-17
aliases: [GitHub Setup, Repository Initialisierung]
---

# 🧭 Schritt 1: GitHub einrichten

## 🎯 Ziel  
Erstelle ein zentrales Repository für deine BloodyARK-WebApp, um Codeversionen, Teamarbeit und CI/CD-Automatisierung zu ermöglichen.

---

## ⚙️ Vorbereitung

**Voraussetzungen:**
- GitHub-Account  
- Git auf deinem PC installiert  
- VS Code oder Terminalzugriff  
- Node.js & npm installiert  

---

## 🏗️ Repository anlegen

1. Gehe auf [https://github.com/new](https://github.com/new)  
2. **Name:** `bloodyark-webapp`  
3. **Beschreibung:** WebApp für BloodyARK (Next.js + Tailwind)  
4. **Sichtbarkeit:** Public (für Portfolio) oder Private (Team)  
5. **README** → aktivieren  
6. **.gitignore** → „Node“ auswählen  
7. **Lizenz (optional)** → MIT  

Klicke auf **Create Repository**

---

## 💻 Lokales Projekt verbinden

In VS Code oder Terminal:

```bash
# 1. Lokales Git initialisieren
git init

# 2. Remote hinzufügen
git remote add origin https://github.com/<DEIN-USERNAME>/bloodyark-webapp.git

# 3. Dateien hinzufügen
git add .

# 4. Erster Commit
git commit -m "init: bloodyark webapp setup"

# 5. Push zur Hauptbranch
git branch -M main
git push -u origin main
```

Kurzüberblick der behobenen Probleme im Frontend
===============================================

- App.tsx
  - Unbenutzte useState-Variable (`count`, `setCount`) entfernte: führte zu TypeScript-Fehlern (no-unused-vars).
  - `Header` eingebunden, damit Komponenten verwendet werden und nicht als ungenutzt markiert bleiben.

- Components/Header/header.tsx
  - Falsche JSX-Syntax entfernt (zuvor: `<Maldives></Maldives>`). Jetzt statisches `<h1>Maldives</h1>`.

- Components/Header/AuthContainer
  - Import `useNavigate` aus `react-router-dom` entfernt — `react-router-dom` war nicht installiert und erzeugte Unsicherheit.
  - Navigation für den Gast-Button provisorisch auf `window.location.assign("/home")` umgestellt.
  - Falscher Import `LoginButton` korrigiert auf `LoginLogouButton/LoginLogoutButton`.
  - `GuestButton` erhält jetzt eine typisierte `onClick`-Prop, damit `handleGuestClick` sauber übergeben werden kann.

- Allgemein
  - Abhängigkeiten mit `npm.cmd install` installiert (PowerShell kann `npm.ps1` blockieren — Workaround: `npm.cmd`).
  - Build und Lint erfolgreich verifiziert: `npm.cmd run build` und `npm.cmd run lint` laufen ohne Fehler.

Kurzbefehle
-----------

- Installieren:
  - `npm.cmd install`
- Build prüfen:
  - `npm.cmd run build`
- Lint prüfen:
  - `npm.cmd run lint`
- Dev-Server:
  - `npm.cmd run dev` → lokal: http://localhost:5173/

Wenn du möchtest, schreibe ich noch eine kurze Anleitung, wie `react-router-dom` eingebaut werden kann (falls ihr Routing benötigt), oder ich setze die Navigation statisch zurück auf Router, wenn ihr das Paket installiert habt.

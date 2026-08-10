# HIERODEIIS landing v2 — design

Date : 2026-06-28
Fichier cible : `netlify-hierodeiis/index.html` (canonique, dossier de déploiement Netlify) + miroir `hierodeiis-landing.html`.

## Objectif
Faire évoluer la landing de la masterclass IA HIERODEIIS pour : multiplier les CTA, intégrer les vraies photos (Jérôme, équipe, lieu), poser les vrais logos écosystème, ajouter une réservation de sessions, et permettre le téléchargement de la plaquette PDF. Inspirations : certif-ia.fr, moon-ia.fr, kor.ai.koray-it.com.

## Contrainte de charte (inchangée)
navy `#0E1626` · crème `#F4EEE3` · terracotta `#C2502E` · or `#C49A45` · Fraunces (titres) + Inter (corps). Animations Lenis + GSAP, amélioration progressive (`html.js`), `prefers-reduced-motion` respecté. Évolution ciblée, pas de refonte de la direction artistique.

## Stratégie CTA
- **CTA flottant sticky** bas-droite, apparaît après ~600px de scroll : « Réserver un échange ».
- **2 bandes CTA inline** : après Méthode (#1) et après Investissement (#2) — chacune « Réserver un échange » (terracotta) + « Télécharger la plaquette » (ghost).
- **Hero** : 3e bouton « Télécharger la plaquette (PDF) » + bandeau preuve (France 2030 · 50+ entreprises · 7 écoles).
- **Header** : lien secondaire « Plaquette PDF ».
- **Footer** : lien Télécharger la plaquette.

## Sections (du haut vers le bas)
1. Header — + lien « Plaquette PDF ».
2. Hero — + bouton téléchargement, + bandeau preuve.
3. Constat — inchangé (sources « à confirmer » conservées).
4. Jérôme — **portrait HD** `img/jerome-denis.jpg`, `object-position` corrigé (visage non tronqué).
5. Méthode — bande écosystème avec **vrais logos** : France Travail (svg), CCI France (svg), France Numérique Ensemble (png) ; **Medef** + **La French Tech** en wordmark texte (slots `img/eco/medef.svg`, `img/eco/french-tech.svg` prêts).
6. **Bande CTA #1**.
7. Méthodologie 3 temps — inchangé.
8. Livrables — inchangé.
9. **Sessions / Réservation (NOUVEAU)** — « Cohortes à partir de septembre 2026 », sans dates fixes, slogan rareté « Il reste quelques places », CTA « Réserver ma place ».
10. Investissement — inchangé (4 950 € HT + tableau financement OPCO/AGEFICE/FIFPL/FAFCEA).
11. **Bande CTA #2**.
12. Lieu — **4 vraies photos** du Philantro Lab (`img/lieu/phil1-4.jpg` : cour patrimoniale, lounge, salle boisée, terrasse rooftop). Mention « Le Philantro Lab » rétablie (photos réelles).
13. **Témoignages (NOUVEAU)** — 2-3 citations issues du questionnaire post-masterclass si exploitables ; sinon section retenue.
14. **FAQ (NOUVEAU)** — 6 Q/R (financement, éligibilité, format 3 jours, secteur, lieu, suite). JSON-LD FAQPage pour le GEO.
15. Étapes — inchangé.
16. Contacts — **vrais portraits** `img/contact-{jerome,jonathan,camille}.png` (au lieu des initiales).
17. **CTA flottant** sticky.
18. Footer — + lien téléchargement.

## Assets
- Portraits : `img/jerome-denis.jpg`, `img/contact-jerome.png`, `img/contact-jonathan.png`, `img/contact-camille.png`.
- Lieu : `img/lieu/phil1.jpg … phil4.jpg`.
- Écosystème : `img/eco/france-travail.svg`, `img/eco/cci-france.svg`, `img/eco/france-numerique-ensemble.png` (+ slots medef/french-tech).
- PDF : `plaquette-hierodeiis.pdf` (Plaquette HIERODEIIS HD, 4,3 Mo).

## Hors périmètre / à fournir par Jérôme
- Logos officiels Medef + La French Tech (si partenariats à afficher en logo).
- Confirmation des chiffres du constat (Bpifrance / Ipsos-Eurostat).
- Retrait du `noindex` au moment de la mise en production.

## Vérification
Rendu statique fidèle (script retiré + `min-height:100svh` neutralisé) pour screenshot ; contrôle visuel des photos, des CTA, du bloc sessions et du lien PDF.

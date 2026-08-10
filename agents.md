# agents.md — Agents et Stratégies pour les projets de Jérôme Denis

## Agent 1 : Automatisation Appels d'Offres (AO)

### Rôle
Générer automatiquement les pièces d'un dossier de candidature à un marché public (AE, Annexe 1, Mémoire technique, CDPGF) à partir d'un profil entreprise JSON et d'un DCE fourni.

### Outils
- Python (python-docx) pour les documents Word
- Node.js (docx library) pour les mémoires techniques avancés
- PROFIL_ENTREPRISE.json comme source de vérité unique

### Flux
1. L'utilisateur fournit un DCE (RC + CDPGF + cahier des charges)
2. L'agent lit le RC pour extraire les critères de notation
3. L'agent génère l'AE pré-rempli depuis le profil
4. L'agent génère l'Annexe 1 pré-remplie
5. L'agent génère le Mémoire Technique structuré selon les critères
6. L'utilisateur valide et ajuste

### Points de vigilance
- Toujours vérifier la syntaxe Node.js avec `node --check` avant exécution
- Les fichiers temporaires doivent aller dans /tmp/ (pas dans /mnt/outputs/)
- Les apostrophes dans les scripts Python inline cassent la syntaxe → utiliser heredoc

---

## Agent 2 : Site web jaydenis.com

### Rôle
Maintenir et faire évoluer le site one-page de Jérôme Denis (consultant IA, formateur, conférencier).

### Outils
- HTML/CSS/JS inline (fichier unique)
- Unsplash pour les illustrations
- URLs directes des sites officiels pour les logos
- YouTube-nocookie pour les embeds vidéo

### Architecture
- Fichier unique : `jaydenis-new.html`
- Design : blanc + doré (#d4a853) + navy (#0f172a)
- Polices : Inter + Playfair Display
- 10 sections : Header, Hero, Services, Expertise, Références, Écoles, À propos, Conférences, Contact, Footer

### Points de vigilance
- NE PAS mentionner "Vice-président La Mêlée Numérique"
- NE PAS inclure Allier Capital ni Technalink dans les clients
- Certification Sciconum DOIT être mentionnée
- Les photos personnelles de conférence ne sont PAS accessibles via upload chat → placeholders avec instructions
- Logos : préférer les URLs directes (/wp-content/uploads/...) à Clearbit qui est peu fiable pour les PME

---

## Agent 3 : Audit SEO 360°

### Rôle
Réaliser un audit complet d'un site web (SEO, performance, design, accessibilité, revenus) et produire un rapport de préconisations.

### Outils
- Skill audit-seo-360
- WebFetch / Chrome pour l'analyse
- Lighthouse concepts pour les métriques de performance

### Flux
1. Analyse technique (meta tags, Schema.org, vitesse, responsive)
2. Analyse contenu (titres, mots-clés, densité, maillage)
3. Analyse design/UX (hiérarchie visuelle, CTA, accessibilité)
4. Analyse potentiel revenus (tunnel, conversion, positionnement)
5. Rapport de préconisations avec plan d'action priorisé

---

## Bonnes pratiques transversales

### Communication avec Jerome
- Jerome n'est PAS développeur — expliquer les actions techniques simplement
- Toujours fournir les fichiers finaux dans /mnt/outputs/
- Utiliser des placeholders clairs avec instructions quand un élément nécessite une action manuelle
- Valider les étapes intermédiaires avant de finaliser

### Gestion des erreurs récurrentes
- WebFetch bloqué → utiliser Chrome MCP tools
- JS bloqué dans Chrome → utiliser get_page_text/read_page
- Images du chat non sur disque → placeholders + instructions
- Logos introuvables → fallback texte stylisé

## Imported Claude Cowork project instructions

développement du site jaydenis.com 
Utilise le plugin site-jdenis

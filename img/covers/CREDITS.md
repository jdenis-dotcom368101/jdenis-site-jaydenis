# Crédits et licences des photographies de couverture

Toutes les images de ce dossier sont **auto-hébergées** : aucune requête n'est faite
vers un domaine tiers au chargement des pages. Les fichiers `.webp` ont été produits
à partir des originaux téléchargés depuis Pexels, recadrés en 1600 × 667 px puis
encodés en WebP (qualité 76).

## Licence applicable

Les six photographies sont publiées sous **licence Pexels**
(<https://www.pexels.com/license/>), constatée le 12 août 2026 sur la page publique
de chaque photo (mention « Free to use » / « Gratuit d'utilisation »).

Ce que la licence autorise :

- utilisation gratuite, y compris **commerciale**, sans inscription ni paiement ;
- modification et recadrage ;
- usage sur site web, blog, application, supports marketing et imprimés ;
- **attribution non obligatoire** (« Giving credit to the photographer or Pexels is
  not necessary but always appreciated »). Le présent fichier documente malgré tout
  chaque source, par prudence et pour traçabilité.

Ce que la licence interdit — et qui est respecté ici :

- présenter des personnes identifiables dans un contexte négatif ou offensant ;
- vendre des copies non modifiées sous forme de produits physiques ;
- laisser entendre qu'une personne ou une marque visible cautionne le cabinet ;
- redistribuer les images sur une plateforme de banque d'images concurrente ;
- utiliser une image comme marque ou élément d'identité de l'entreprise.

Aucune photo retenue n'est issue d'une offre payante de type « Unsplash+ » : elles
proviennent toutes de Pexels, dont la licence unique s'applique à l'ensemble du
catalogue public.

## Inventaire

| Fichier | Emploi sur le site | Page source | Auteur | Licence constatée | Téléchargée le |
|---|---|---|---|---|---|
| `diagnostic.webp` | Carte service « Diagnostic & Audit IA » (accueil FR/EN) + carte d'article « Diagnostic IA en PME » | <https://www.pexels.com/photo/hands-holding-business-analysis-8068691/> | RDNE Stock project | Licence Pexels — « Free to use » | 12/08/2026 |
| `formation.webp` | Carte service « Formation IA en entreprise » (accueil FR/EN) | <https://www.pexels.com/photo/diverse-team-engaged-in-business-training-workshop-34046709/> | Beniam | Licence Pexels — « Free to use » | 12/08/2026 |
| `architecture.webp` | Carte service « Architecture & Solutions IA » (accueil FR/EN) + carte d'article « Agents IA, RAG, MCP » | <https://www.pexels.com/photo/engineer-holding-laptop-1181316/> | Christina Morillo (@divinetechygirl) | Licence Pexels — « Free to use » | 12/08/2026 |
| `gouvernance.webp` | Carte service « Gouvernance Data & AI Act » (accueil FR/EN) | <https://www.pexels.com/photo/european-union-flag-waving-against-modern-building-33401027/> | Aleksandre Lomadze | Licence Pexels — « Free to use » | 12/08/2026 |
| `cohorte.webp` | Carte « Méthode HIERODEIIS » de l'index du blog (FR/EN) | <https://www.pexels.com/photo/group-of-people-using-laptop-computer-1181370/> | Christina Morillo (@divinetechygirl) | Licence Pexels — « Free to use » | 12/08/2026 |
| `matrice.webp` | Couverture des articles « Diagnostic IA en PME » (FR) et « AI diagnostics for SMEs » (EN) | <https://www.pexels.com/photo/a-man-discussing-while-pointing-on-the-sticky-notes-4623462/> | Ketut Subiyanto | Licence Pexels — « Free to use » | 12/08/2026 |

## Historique

- **12/08/2026** — Ces six photographies remplacent six illustrations SVG au trait
  posées le matin même. Les SVG avaient eux-mêmes remplacé des photos Unsplash
  appelées en *hotlink* depuis `images.unsplash.com`, dont la licence n'avait pas
  été vérifiée et qui créaient une dépendance à un domaine tiers. Les deux problèmes
  — licence et dépendance externe — sont réglés ici : licence documentée et fichiers
  servis depuis le domaine du site.

## Pour remplacer une image

1. Choisir la photo sur Pexels et **ouvrir sa page publique** pour constater la mention
   de licence et le nom de l'auteur.
2. Télécharger l'original, recadrer en 1600 × 667 px (le même fichier sert de vignette
   de carte en ~263 × 160 et de bandeau d'article ; garder le sujet centré).
3. Encoder : `cwebp -q 76 -m 6 -sharp_yuv -metadata none source.png -o cible.webp`.
4. Mettre à jour la ligne correspondante du tableau ci-dessus.

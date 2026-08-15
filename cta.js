/**
 * cta.js — Mesure des clics d'intention (contact, téléphone, e-mail, pages d'offre)
 *
 * Envoie un événement GA4 `clic_cta` quand un visiteur clique un lien qui traduit
 * une intention commerciale. Sans cette mesure, on connaît les pages vues mais pas
 * la page qui décide un visiteur à prendre contact — la seule question qui compte.
 *
 * Consentement : l'événement n'est envoyé que si `window.gtag` existe, ce que
 * /consent.js ne pose qu'après acceptation explicite. Un visiteur qui refuse la
 * mesure d'audience ne déclenche rien. Voir /consent.js.
 *
 * Paramètres envoyés : type_cta (contact | telephone | email | offre), lien, texte.
 */
(function () {
  'use strict';

  /* Pages d'offre : celles dont un clic vaut un début de qualification. */
  var OFFRES = /(diagnostic-audit-ia-toulouse|ai-diagnostics-audit|formation-ia-entreprise-toulouse|corporate-ai-training|architecture-ia-sur-mesure|ai-architecture-design|conformite-ai-act-gouvernance-donnees|verificateur-risque-ai-act|ai-act-risk-checker|grille-classification-risques-ai-act)/;

  function typeDuLien(a) {
    var href = a.getAttribute('href') || '';
    if (/^mailto:/i.test(href)) return 'email';
    if (/^tel:/i.test(href)) return 'telephone';
    if (/(^|[#\/])contact\b/i.test(href)) return 'contact';
    if (OFFRES.test(href)) return 'offre';
    return null;
  }

  /* Capture : on écoute avant les gestionnaires de la page, dont certains
     arrêtent la propagation pour gérer le défilement doux des ancres. */
  document.addEventListener('click', function (ev) {
    var cible = ev.target;
    if (!cible || !cible.closest) return;

    var a = cible.closest('a');
    if (!a) return;

    var type = typeDuLien(a);
    if (!type) return;

    try {
      if (window.gtag) {
        window.gtag('event', 'clic_cta', {
          type_cta: type,
          lien: (a.href || '').slice(0, 200),
          texte: (a.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80)
        });
      }
    } catch (e) {
      /* La mesure ne doit jamais casser la navigation. */
    }
  }, true);
})();

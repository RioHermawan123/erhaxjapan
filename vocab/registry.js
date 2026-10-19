// ===== Registry Kosakata =====
// Basis data kosakata dipisah per tema. Setiap file tema mendaftarkan
// itself ke registry ini, lalu script.js mengambil datanya dari sini.
//
// Format item: { h: "kata japan", r: "romaji", m: "arti" }

window.VocabRegistry = (function () {
  const themes = [];

  function add(theme) {
    if (!theme || !theme.id || !Array.isArray(theme.items)) {
      console.warn("VocabRegistry: tema tidak valid, dilewati.", theme);
      return;
    }
    themes.push({
      id: theme.id,
      label: theme.label || theme.id,
      icon: theme.icon || "📘",
      script: theme.script || "hira", // "hira" | "kata"
      items: theme.items.filter((it) => it && it.h && it.r && it.m)
    });
  }

  function all() {
    return themes;
  }

  function byScript(script) {
    return themes.filter((t) => t.script === script);
  }

  function byId(id) {
    return themes.find((t) => t.id === id) || null;
  }

  function itemsByScript(script) {
    return byScript(script).flatMap((t) => t.items);
  }

  function itemsByTheme(id) {
    const theme = byId(id);
    return theme ? theme.items : [];
  }

  return { add, all, byScript, byId, itemsByScript, itemsByTheme };
})();

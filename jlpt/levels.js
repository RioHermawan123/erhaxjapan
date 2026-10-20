// ===== Metadata level JLPT =====
// Label, keterangan singkat, dan urutan level.
// N5 = trial test aktif. N4-N1 sudah terdaftar tapi bank soalnya kosong (Coming soon).

JLPTRegistry.addLevel("n5", {
  label: "JLPT N5",
  desc: "Pemula (level paling dasar)",
  icon: "🌱",
  order: 1
});

JLPTRegistry.addLevel("n4", {
  label: "JLPT N4",
  desc: "Dasar",
  icon: "🌿",
  order: 2
});

JLPTRegistry.addLevel("n3", {
  label: "JLPT N3",
  desc: "Menengah",
  icon: "⛰️",
  order: 3
});

JLPTRegistry.addLevel("n2", {
  label: "JLPT N2",
  desc: "Lanjutan",
  icon: "🏔️",
  order: 4
});

JLPTRegistry.addLevel("n1", {
  label: "JLPT N1",
  desc: "Puncak",
  icon: "👑",
  order: 5
});

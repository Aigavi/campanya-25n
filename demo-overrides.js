const demoMessages = [
  {
    id: 1,
    body: "Vaig acabar demanant perdó per coses que no havia fet. Quan vaig començar a contar-ho en veu alta, les peces van encaixar.",
    createdAt: 1,
    moderatedAt: 1,
    sortOrder: 1,
    featuredOrder: 1
  },
  {
    id: 2,
    body: "Decidia quines amistats eren una mala influència. Deia que volia protegir-me, però cada vegada tenia menys persones al meu costat.",
    createdAt: 2,
    moderatedAt: 2,
    sortOrder: 2,
    featuredOrder: 2
  },
  {
    id: 3,
    body: "Després de cada discussió canviava la versió del que havia passat. Escriure les coses em va ajudar a confirmar que no les imaginava.",
    createdAt: 3,
    moderatedAt: 3,
    sortOrder: 3,
    featuredOrder: null
  },
  {
    id: 4,
    body: "Em criticava quan estudiava o intentava millorar en la faena. Vaig començar a renunciar a oportunitats per por de no estar preparada.",
    createdAt: 4,
    moderatedAt: 4,
    sortOrder: 4,
    featuredOrder: null
  }
];

const nativeFetch = window.fetch.bind(window);
window.fetch = async (input, options = {}) => {
  const url = typeof input === "string" ? input : input.url;
  if (!url.includes("/api/wall.php")) return nativeFetch(input, options);

  if ((options.method || "GET").toUpperCase() === "POST") {
    return new Response(JSON.stringify({
      ok: true,
      message: "Esta és una demostració pública. El missatge no s'ha guardat ni enviat a moderació."
    }), { status: 200, headers: { "content-type": "application/json" } });
  }

  return new Response(JSON.stringify({
    ok: true,
    messages: demoMessages,
    featured: demoMessages.filter((message) => message.featuredOrder !== null),
    pagination: { total: demoMessages.length, page: 1, limit: 6, hasMore: false }
  }), { status: 200, headers: { "content-type": "application/json" } });
};

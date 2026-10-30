// Conexão com o projeto Supabase
(() => {
  "use strict";
  const SUPABASE_URL = "https://yglnsxcoqcxpheooiupl.supabase.co";
  const SUPABASE_KEY = "sb_publishable_uPkpFcaaxIP9WGdkx4cSvA_j1gtW5yA";

  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    console.error("[Detetives] Biblioteca do Supabase não carregou. Verifique o CDN/conexão.");
    window.supabaseClient = null;
    return;
  }

  try {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    console.info("[Detetives] Cliente Supabase inicializado.");
  } catch (error) {
    window.supabaseClient = null;
    console.error("[Detetives] Falha ao inicializar o Supabase:", error);
  }
})();

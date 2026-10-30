// Cliente Supabase carregado como módulo ES para evitar conflitos de nomes globais.
const SUPABASE_URL = "https://yglnsxcoqcxpheooiupl.supabase.co";
const SUPABASE_KEY = "sb_publishable_uPkpFcaaxIP9WGdkx4cSvA_j1gtW5yA";

window.supabaseReady = import("https://esm.sh/@supabase/supabase-js@2")
  .then(({ createClient }) => {
    if (typeof createClient !== "function") {
      throw new Error("A biblioteca carregada não disponibilizou createClient.");
    }

    const client = createClient(SUPABASE_URL, SUPABASE_KEY);
    window.supabaseClient = client;
    console.info("[Detetives] Cliente Supabase inicializado com sucesso.");
    return client;
  })
  .catch((error) => {
    window.supabaseClient = null;
    console.error("[Detetives] Falha ao carregar a biblioteca Supabase:", error);
    throw error;
  });

// Conexão com o projeto Supabase, com CDN alternativo automático
(() => {
  "use strict";
  const SUPABASE_URL = "https://yglnsxcoqcxpheooiupl.supabase.co";
  const SUPABASE_KEY = "sb_publishable_uPkpFcaaxIP9WGdkx4cSvA_j1gtW5yA";

  function createClient() {
    if (!window.supabase || typeof window.supabase.createClient !== "function") {
      throw new Error("A biblioteca do Supabase não disponibilizou createClient.");
    }
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    console.info("[Detetives] Cliente Supabase inicializado.");
    return window.supabaseClient;
  }

  window.supabaseReady = new Promise((resolve, reject) => {
    try {
      if (window.supabase && typeof window.supabase.createClient === "function") {
        resolve(createClient());
        return;
      }
      const fallback = document.createElement("script");
      fallback.src = "https://unpkg.com/@supabase/supabase-js@2";
      fallback.onload = () => {
        try { resolve(createClient()); }
        catch (error) { reject(error); }
      };
      fallback.onerror = () => reject(new Error("Não foi possível carregar o Supabase pelos CDNs jsDelivr ou unpkg."));
      document.head.appendChild(fallback);
    } catch (error) {
      reject(error);
    }
  });

  window.supabaseReady.catch(error => {
    window.supabaseClient = null;
    console.error("[Detetives] Erro ao iniciar Supabase:", error);
  });
})();

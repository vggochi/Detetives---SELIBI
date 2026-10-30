// Conexão com o projeto Supabase
const SUPABASE_URL = "https://yglnsxcoqcxpheooiupl.supabase.co";
const SUPABASE_KEY = "sb_publishable_uPkpFcaaxIP9WGdkx4cSvA_j1gtW5yA";

// O CDN disponibiliza window.supabase como biblioteca.
// O cliente conectado fica em window.supabaseClient.
window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

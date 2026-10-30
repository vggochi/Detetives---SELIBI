// Cliente Supabase: importação ES direta, sem depender de window.supabase.
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://yglnsxcoqcxpheooiupl.supabase.co";
const SUPABASE_KEY = "sb_publishable_uPkpFcaaxIP9WGdkx4cSvA_j1gtW5yA";

if (typeof createClient !== "function") {
  throw new Error("[Detetives] A biblioteca Supabase não exportou createClient.");
}

const client = createClient(SUPABASE_URL, SUPABASE_KEY);
window.supabaseClient = client;
window.supabaseReady = Promise.resolve(client);

console.info("[Detetives] Cliente Supabase inicializado com sucesso.");

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'

const supabaseUrl = 'https://vufymausskugbgnrtinx.supabase.co' // Pake URL lu
const supabaseKey = 'sb_publishable_hbGzKC1A9JcXCMx-nCpZVQ_MT3tJLwT' // Pake anon key lu

export const supabase = createClient(supabaseUrl, supabaseKey)

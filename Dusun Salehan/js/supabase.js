import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://vufvmausskugbgnrtinx.supabase.co'
const supabaseKey = 'sb_publishable_hbGzKC1A9IcXCMx-nCpZVQ_MT3tJLwT'

export const supabase = createClient(supabaseUrl, supabaseKey)

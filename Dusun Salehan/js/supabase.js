// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// GANTI 2 INI DARI SUPABASE > SETTINGS > API
const SUPABASE_URL = 'https://vufymausskugbgnrtinx.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1ZnltYXVzc2t1Z2JnbnJ0aW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5MDQwODksImV4cCI6MjA5OTQ4MDA4OX0.SFXT6xCeQtShORlC2TPNhW3BI3Tj4vI2oD07wcRBKwU' // Bukan sb_publishable

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
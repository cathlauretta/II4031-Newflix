import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ksnscmimlwzscmmjultv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzbnNjbWltbHd6c2NtbWp1bHR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxODc0OTEsImV4cCI6MjAzMzc2MzQ5MX0.BjLelvSZbV3OgSHDuvtcrxgBLPKx7rk25cF_7Ojwgrs'
export const supabase = createClient(supabaseUrl, supabaseKey)
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://decsuvmkzbkfnywxkzvz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlY3N1dm1remJrZm55d3hrenZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5MTk4NTYsImV4cCI6MjA4NzQ5NTg1Nn0.ytUtCq47_JD2eb7oqRDzcqHjTX63IwAi7D50H3KBA3I'

export const supabase = createClient(supabaseUrl, supabaseKey)
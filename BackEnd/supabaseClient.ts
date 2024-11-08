import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zlypgcoefperpxwnkkyd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpseXBnY29lZnBlcnB4d25ra3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyMTE4MDAsImV4cCI6MjA0NTc4NzgwMH0.EhIVCN04efWPrRwNOs178DQi8yWIR0OyoYLWGrKf_ZI';


export const supabase = createClient(supabaseUrl, supabaseAnonKey);

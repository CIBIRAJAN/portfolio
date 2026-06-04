const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://kfcqfaqkxbsvjatzjxfd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmY3FmYXFreGJzdmphdHpqeGZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3NDg4ODksImV4cCI6MjA4OTMyNDg4OX0.ReAzLZ_uxSeXoNIIA0oTSnjdvNjP48HxpMA_X6BpXbs';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function run() {
    console.log("Fetching first resume...");
    const { data: resumes, error: fetchErr } = await supabase.from('resumes').select('*').limit(1);
    if (fetchErr) {
        console.error("Fetch error:", fetchErr);
        return;
    }
    if (!resumes || resumes.length === 0) {
        console.log("No resumes found to update.");
        return;
    }

    const firstResume = resumes[0];
    console.log("Found resume:", firstResume);

    console.log("Attempting to update version...");
    const updatedVersion = (parseInt(firstResume.version) || 1) + 1;
    const { data, error: updateErr } = await supabase
        .from('resumes')
        .update({ version: String(updatedVersion) })
        .eq('id', firstResume.id)
        .select();

    if (updateErr) {
        console.error("Update failed:", updateErr);
    } else {
        console.log("Update succeeded! Response:", data);
    }
}

run();

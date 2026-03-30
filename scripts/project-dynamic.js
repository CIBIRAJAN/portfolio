/**
 * @file project-dynamic.js
 * @description Makes static project case study pages dynamic by fetching the latest data (images, titles, tech) from Supabase.
 */

(async function() {
    const SUPABASE_URL = 'https://kfcqfaqkxbsvjatzjxfd.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmY3FmYXFreGJzdmphdHpqeGZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3NDg4ODksImV4cCI6MjA4OTMyNDg4OX0.ReAzLZ_uxSeXoNIIA0oTSnjdvNjP48HxpMA_X6BpXbs';

    // Wait for Supabase to be loaded if via script tag
    const waitForSupabase = () => {
        return new Promise((resolve) => {
            const check = () => {
                if (window.supabase) resolve();
                else setTimeout(check, 50);
            };
            check();
        });
    };

    try {
        await waitForSupabase();
        const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

        // Get current relative link format: projects/filename.html
        let currentLink = window.location.pathname;
        // Clean path (handle index, extensions, etc.)
        if (currentLink.startsWith('/')) currentLink = currentLink.substring(1);
        
        // Find project in DB
        const { data: project, error } = await supabase
            .from('projects')
            .select('*')
            .eq('link', currentLink)
            .single();

        if (error || !project) {
            // Try matching without '/' if at root
            const fallbackLink = 'projects/' + currentLink.split('/').pop();
            const { data: p2 } = await supabase
                .from('projects')
                .select('*')
                .eq('link', fallbackLink)
                .single();
            if(p2) updatePage(p2);
        } else {
            updatePage(project);
        }

    } catch (err) {
        console.warn('Dynamic project loader failed:', err);
    }

    function updatePage(project) {
        // 1. Update Hero Image
        const heroImg = document.querySelector('.project-showcase-img');
        if (heroImg && project.image) {
            heroImg.src = project.image.startsWith('http') ? project.image : '../' + project.image;
        }

        // 2. Update Title
        const titleEl = document.querySelector('.project-display-title');
        if (titleEl && project.title) {
            titleEl.innerText = project.title;
        }

        // 3. Update Tech Pills
        const techContainer = document.querySelector('.project-tech-pills');
        if (techContainer && project.tech && Array.isArray(project.tech)) {
            techContainer.innerHTML = project.tech.map(t => `<span class="tech-pill-modern">${t}</span>`).join('');
        }
    }
})();

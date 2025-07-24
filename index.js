
document.addEventListener('DOMContentLoaded', () => {

    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    const headerLogo = document.getElementById('header-logo');
    const headerText = document.getElementById('header-text');
    
    if (header && headerLogo && headerText) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-white', 'shadow-md');
                header.classList.remove('bg-transparent');
                headerLogo.classList.add('text-stone-800');
                headerLogo.classList.remove('text-white');
                headerText.classList.add('text-stone-800');
                headerText.classList.remove('text-white');
            } else {
                header.classList.remove('bg-white', 'shadow-md');
                header.classList.add('bg-transparent');
                headerLogo.classList.remove('text-stone-800');
                headerLogo.classList.add('text-white');
                headerText.classList.remove('text-stone-800');
                headerText.classList.add('text-white');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run on load to set initial state
    }

    // --- Dynamic Experiences Grid ---
    const experiences = [
        { name: 'Relaxation', icon: '🧘', url: 'https://www.wanderjapan.co/vibes/1' },
        { name: 'Adventures', icon: '🧭', url: 'https://www.wanderjapan.co/vibes/2' },
        { name: 'Culture', icon: '⛩️', url: 'https://www.wanderjapan.co/vibes/3' },
        { name: 'Nαture', icon: '🌳', url: 'https://www.wanderjapan.co/vibes/4' },
        { name: 'Urban Vibes', icon: '🌃', url: 'https://www.wanderjapan.co/vibes/5' },
        { name: 'Family Fun', icon: '🎈', url: 'https://www.wanderjapan.co/vibes/6' },
        { name: 'Romance', icon: '🥂', url: 'https://www.wanderjapan.co/vibes/7' },
        { name: 'Gourmet', icon: '🍣', url: 'https://www.wanderjapan.co/vibes/8' },
        { name: 'Festivals', icon: '🎆', url: 'https://www.wanderjapan.co/vibes/9' },
        { name: 'Luxury', icon: '💎', url: 'https://www.wanderjapan.co/vibes/10' }
    ];

    const experiencesGrid = document.getElementById('experiences-grid');
    if (experiencesGrid) {
        experiences.forEach(exp => {
            const expEl = document.createElement('a');
            expEl.href = exp.url;
            expEl.target = '_blank';
            expEl.rel = 'noopener noreferrer';
            expEl.className = 'group flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 cursor-pointer';
            expEl.innerHTML = `
                <span class="text-4xl mb-4">${exp.icon}</span>
                <span class="font-semibold text-center text-stone-700 group-hover:text-red-700 transition-colors">${exp.name}</span>
            `;
            experiencesGrid.appendChild(expEl);
        });
    }

    // --- Dynamic "How It Works" Steps ---
    const steps = [
        { 
            title: 'WATCH', 
            description: 'Get inspired by watching authentic short videos from all over Japan.',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
        },
        { 
            title: 'SAVE', 
            description: 'Keep track of your favorite spots and creators on social media.',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>`
        },
        { 
            title: 'GO', 
            description: 'Use your inspiration to plan a unique trip and create your own story.',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>`
        }
    ];

    const stepsContainer = document.getElementById('how-it-works-steps');
    if (stepsContainer) {
        steps.forEach((step, index) => {
            const stepEl = document.createElement('div');
            stepEl.className = 'text-center';
            stepEl.innerHTML = `
                <div class="mb-4 inline-flex items-center justify-center h-20 w-20 rounded-full bg-red-700 shadow-lg">
                    ${step.icon}
                </div>
                <h3 class="text-xl font-bold text-stone-900 mb-2">${index + 1}. ${step.title}</h3>
                <p class="text-stone-600">${step.description}</p>
            `;
            stepsContainer.appendChild(stepEl);
        });
    }

    const MICROCMS_API_ENDPOINT = 'https://wander.microcms.io/api/v1/blog';
    const MICROCMS_API_KEY = 'zD1rFkHA879FHNDhW4t4XWfSknCrv7BPEn1H';
    
    const fetchBlogPosts = async () => {
        try {
            const response = await fetch(MICROCMS_API_ENDPOINT, {
                headers: {
                    'X-MICROCMS-API-KEY': MICROCMS_API_KEY,
                    'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data.contents || [];
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            return null;
        }
    };
    
    const renderBlogPosts = (posts) => {
        const blogGrid = document.getElementById('blog-grid');
        const blogError = document.getElementById('blog-error');
        
        if (!blogGrid) return;
        
        if (!posts || posts.length === 0) {
            blogError.classList.remove('hidden');
            return;
        }
        
        const postsToShow = posts.slice(0, 3);
        
        postsToShow.forEach(post => {
            const postEl = document.createElement('a');
            postEl.href = `https://wanderjapan.co/blog/${post.id}`;
            postEl.target = '_blank';
            postEl.rel = 'noopener noreferrer';
            postEl.className = 'group bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden block';
            
            const categoryColors = {
                'spot': 'bg-blue-100 text-blue-800',
                'manner': 'bg-green-100 text-green-800', 
                'history': 'bg-purple-100 text-purple-800',
                'experience': 'bg-red-100 text-red-800'
            };
            
            const categoryLabels = {
                'spot': 'スポット',
                'manner': 'マナー',
                'history': '歴史',
                'experience': '体験'
            };
            
            const mainCategory = post.categories && post.categories.length > 0 ? post.categories[0] : 'experience';
            const categoryClass = categoryColors[mainCategory] || categoryColors['experience'];
            const categoryLabel = categoryLabels[mainCategory] || categoryLabels['experience'];
            
            postEl.innerHTML = `
                ${post.mainvisual ? `
                    <div class="aspect-w-16 aspect-h-9 bg-stone-200">
                        <img src="${post.mainvisual.url}" alt="${post.title}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                ` : `
                    <div class="h-48 bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
                        <svg class="h-16 w-16 text-stone-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                `}
                <div class="p-6">
                    <div class="mb-3">
                        <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full ${categoryClass}">
                            ${categoryLabel}
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-stone-900 mb-3 group-hover:text-red-700 transition-colors line-clamp-2">
                        ${post.title}
                    </h3>
                    <div class="text-stone-600 text-sm line-clamp-3">
                        ${post.body ? post.body.replace(/<[^>]*>/g, '').substring(0, 120) + '...' : ''}
                    </div>
                </div>
            `;
            
            blogGrid.appendChild(postEl);
        });
    };
    
    const initBlogSection = async () => {
        const posts = await fetchBlogPosts();
        renderBlogPosts(posts);
    };
    
    initBlogSection();

    // --- Update copyright year ---
    const yearSpan = document.getElementById('copyright-year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear().toString();
    }
});


document.addEventListener('DOMContentLoaded', () => {

    // --- API Configuration ---
    const MICROCMS_API_ENDPOINT = 'https://wander.microcms.io/api/v1/blog';
    const MICROCMS_API_KEY = 'zD1rFkHA879FHNDhW4t4XWfSknCrv7BPEn1H';

    // --- Client-side Routing ---
    const showHomePage = () => {
        document.getElementById('home-content').classList.remove('hidden');
        document.getElementById('blog-detail-section').classList.add('hidden');
        document.title = 'Wander | See More. Feel More. Japan Awaits.';
    };

    const showBlogDetailPage = () => {
        document.getElementById('home-content').classList.add('hidden');
        document.getElementById('blog-detail-section').classList.remove('hidden');
    };

    const parseCurrentPath = () => {
        const path = window.location.pathname;
        if (path === '/' || path === '/index.html') {
            return { type: 'home' };
        } else if (path.match(/^\/[a-zA-Z0-9_-]+$/)) {
            // Matches pattern like /xcc4x1trsg_z
            const postId = path.substring(1); // Remove leading slash
            return { type: 'blog', postId };
        }
        return { type: 'home' }; // Default fallback
    };

    const fetchBlogPost = async (postId) => {
        try {
            const response = await fetch(`${MICROCMS_API_ENDPOINT}/${postId}`, {
                headers: {
                    'X-MICROCMS-API-KEY': MICROCMS_API_KEY,
                    'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const post = await response.json();
            return post;
        } catch (error) {
            console.error('Error fetching blog post:', error);
            return null;
        }
    };

    const renderBlogDetail = (post) => {
        const blogDetailContent = document.getElementById('blog-detail-content');
        const blogLoading = document.getElementById('blog-loading');
        const blogErrorDetail = document.getElementById('blog-error-detail');
        
        if (!post) {
            blogLoading.classList.add('hidden');
            blogErrorDetail.classList.remove('hidden');
            return;
        }

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

        document.title = `${post.title} | Wander Japan`;

        const detailHTML = `
            <div class="container mx-auto px-6 pb-20">
                ${post.mainvisual ? `
                    <div class="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden shadow-lg">
                        <img src="${post.mainvisual.url}" alt="${post.title}" class="w-full h-96 object-cover" />
                    </div>
                ` : ''}
                
                <div class="max-w-4xl mx-auto">
                    <div class="mb-6">
                        <span class="inline-block px-4 py-2 text-sm font-semibold rounded-full ${categoryClass}">
                            ${categoryLabel}
                        </span>
                    </div>
                    
                    <h1 class="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                        ${post.title}
                    </h1>
                    
                    <div class="flex items-center text-stone-600 text-sm mb-8">
                        <svg class="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        ${new Date(post.createdAt).toLocaleDateString('ja-JP')}
                    </div>
                    
                    <div class="prose prose-lg max-w-none text-stone-700 leading-relaxed">
                        ${post.body || '<p>コンテンツが見つかりませんでした。</p>'}
                    </div>
                </div>
            </div>
        `;

        blogLoading.classList.add('hidden');
        blogErrorDetail.classList.add('hidden');
        blogDetailContent.innerHTML = detailHTML;
    };

    const handleRoute = async (route) => {
        if (route.type === 'home') {
            showHomePage();
        } else if (route.type === 'blog') {
            showBlogDetailPage();
            const post = await fetchBlogPost(route.postId);
            renderBlogDetail(post);
        }
    };

    const initializeRouter = () => {
        const route = parseCurrentPath();
        handleRoute(route);

        // Handle back to home button
        const backToHomeBtn = document.getElementById('back-to-home');
        if (backToHomeBtn) {
            backToHomeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.history.pushState(null, null, '/');
                showHomePage();
            });
        }

        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            const route = parseCurrentPath();
            handleRoute(route);
        });
    };

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
            icon: `<i data-lucide="play-circle" class="h-12 w-12 text-white"></i>`
        },
        { 
            title: 'SAVE', 
            description: 'Keep track of your favorite spots and creators on social media.',
            icon: `<i data-lucide="bookmark" class="h-12 w-12 text-white"></i>`
        },
        { 
            title: 'GO', 
            description: 'Use your inspiration to plan a unique trip and create your own story.',
            icon: `<i data-lucide="plane" class="h-12 w-12 text-white"></i>`
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
        
        // Re-initialize Lucide icons for dynamically added content
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

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
            postEl.href = `https://service.wanderjapan.co/${post.id}`;
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

    // --- Update copyright year ---
    const yearSpan = document.getElementById('copyright-year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear().toString();
    }

    // --- Initialize Router and App ---
    initializeRouter();
    
    // Initialize blog section only if we're on the home page
    const route = parseCurrentPath();
    if (route.type === 'home') {
        initBlogSection();
    }
});

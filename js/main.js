document.addEventListener('DOMContentLoaded', () => {
    // Theme management
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });

    // Search functionality
    const searchBtn = document.getElementById('search-btn');
    const closeSearch = document.getElementById('close-search');
    const searchOverlay = document.querySelector('.search-overlay');
    const channelSearch = document.getElementById('channel-search');
    const searchResults = document.getElementById('search-results');
    
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        channelSearch.focus();
    });
    
    closeSearch.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });
    
    channelSearch.addEventListener('input', () => {
        const query = channelSearch.value.toLowerCase();
        if (query.length > 0) {
            const filtered = channels.filter(channel => 
                channel.name.toLowerCase().includes(query) || 
                channel.category.toLowerCase().includes(query)
            );
            displayChannels(filtered, searchResults);
        } else {
            displayChannels(channels, searchResults);
        }
    });

    // Fullscreen toggle
    document.getElementById('fullscreen-btn').addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });

    // Keyboard navigation for TV remote support
    document.addEventListener('keydown', (e) => {
        const activeElement = document.activeElement;
        const channelCards = Array.from(document.querySelectorAll('.channel-card'));
        const currentIndex = channelCards.indexOf(activeElement);
        
        if (e.key === 'ArrowRight' && currentIndex < channelCards.length - 1) {
            channelCards[currentIndex + 1].focus();
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            channelCards[currentIndex - 1].focus();
        } else if (e.key === 'Enter' && activeElement.classList.contains('channel-card')) {
            activeElement.click();
        } else if (e.key === 'Backspace') {
            if (searchOverlay.classList.contains('active')) {
                searchOverlay.classList.remove('active');
            }
        }
    });

    // PWA installation prompt
    let deferredPrompt;
    const installPrompt = document.createElement('div');
    installPrompt.id = 'install-prompt';
    installPrompt.innerHTML = `
        <p>Install LiquidTV for a better experience?</p>
        <button id="install-btn">Install</button>
        <button class="secondary" id="dismiss-btn">Not Now</button>
    `;
    document.body.appendChild(installPrompt);
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        setTimeout(() => {
            installPrompt.classList.add('show');
        }, 3000);
    });
    
    document.getElementById('install-btn').addEventListener('click', () => {
        installPrompt.classList.remove('show');
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    });
    
    document.getElementById('dismiss-btn').addEventListener('click', () => {
        installPrompt.classList.remove('show');
    });

    // Initialize the app
    loadChannels();
});

function displayChannels(channelList, container) {
    container.innerHTML = '';
    
    channelList.forEach(channel => {
        const channelCard = document.createElement('div');
        channelCard.className = 'channel-card fade-in';
        channelCard.tabIndex = 0;
        channelCard.dataset.channelId = channel.id;
        channelCard.innerHTML = `
            <span class="channel-category">${channel.category}</span>
            <img src="${channel.logo}" alt="${channel.name}" class="channel-logo" onerror="this.onerror=null;this.src='https://via.placeholder.com/60?text=LOGO'">
            <span class="channel-name">${channel.name}</span>
        `;
        
        channelCard.addEventListener('click', () => {
            playChannel(channel);
            document.querySelectorAll('.channel-card').forEach(card => {
                card.classList.remove('active');
            });
            channelCard.classList.add('active');
        });
        
        container.appendChild(channelCard);
    });
}

function initializePlayer(videoUrl, channelLogo) {
    jwplayer("jw-player-container").setup({
        aspectratio: "16:9",
        width: "100%",
        file: videoUrl,
        image: channelLogo || "https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/8382b094-4a8d-4719-a656-3afa74e3818f/156bd909-72ac-47f9-9c65-f8f3b6553de6/1194x672/match/image.jpg",
        autostart: true,
        hlshtml: true,
        abouttext: "Ultrawebs(HM)",
        aboutlink: "https://linktr.ee/ultrawebs",
        fullscreen: {
            enabled: true,
            displayLabel: true,
            label: "Exit Fullscreen",
        },
        playbackRateControls: true,
        cast: {
            appid: "CC1AD845",
        },
        airplay: true,
        sharing: {
            sites: [
                "facebook",
                "twitter",
                "tumblr",
                {
                    icon: "https://www.gstatic.com/images/icons/material/system/2x/gmail_64dp.png",
                    label: "Gmail",
                    src: "mailto:?subject=Check%20out%20this%20video&body=Watch%20this%20video%20here:%20https://yourdomain.com/video-page"
                },
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/25/25686.png",
                    label: "Embed",
                    src: "javascript:prompt('Embed this video:', `<iframe src='https://yourdomain.com/embed-player.html' width='640' height='360' frameborder='0' allowfullscreen></iframe>`);"
                }
            ]
        }
    });
}

function playChannel(channel) {
    document.getElementById('channel-title').textContent = channel.name;
    document.getElementById('channel-description').textContent = `Now playing: ${channel.name}`;
    document.getElementById('channel-logo').src = channel.logo;
    
    // Initialize JW Player with custom configuration
    initializePlayer(channel.url, channel.logo);
}

function loadChannels() {
    displayChannels(channels, document.getElementById('channel-grid'));
    
    const categories = [...new Set(channels.map(channel => channel.category))];
    const categoryFilter = document.getElementById('category-filter');
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.toLowerCase();
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
    
    categoryFilter.addEventListener('change', (e) => {
        const selectedCategory = e.target.value;
        if (selectedCategory === 'all') {
            displayChannels(channels, document.getElementById('channel-grid'));
        } else {
            const filtered = channels.filter(channel => 
                channel.category.toLowerCase() === selectedCategory
            );
            displayChannels(filtered, document.getElementById('channel-grid'));
        }
    });
}
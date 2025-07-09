const channels = [
    // News
    {
        id: 'aajtak',
        name: 'Aaj Tak HD',
        logo: 'https://i.imgur.com/RpIdCB3.png',
        category: 'News',
        description: 'India\'s leading Hindi news channel providing 24/7 breaking news coverage',
        url: 'https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8'
    },
    {
        id: 'tv9bharatvarsh',
        name: 'TV9 Bharatvarsh',
        logo: 'https://i.imgur.com/GEqUslW.png',
        category: 'News',
        description: 'Hindi news channel covering national and international news',
        url: 'https://dyjmyiv3bp2ez.cloudfront.net/pub-iotv9hinjzgtpe/liveabr/playlist.m3u8'
    },
    {
        id: 'tv9gujarati',
        name: 'TV9 Gujarati',
        logo: 'https://imgur.com/Cvuthal.png',
        category: 'News',
        description: 'Gujarati news channel covering national and international news',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/tv9-gujarati/main.m3u8'
    },
    {
        id: 'indiatoday',
        name: 'India Today',
        logo: 'https://i.imgur.com/zLoUGiT.png',
        category: 'News',
        description: 'English news channel with in-depth reporting and analysis',
        url: 'https://indiatodaylive.akamaized.net/hls/live/2014320/indiatoday/indiatodaylive/playlist.m3u8'
    },
    {
        id: 'indiatv',
        name: 'India TV',
        logo: 'https://jiotvimages.cdn.jio.com/dare_images/images/India_TV.png',
        category: 'News',
        description: 'Popular Hindi news channel known for its debate shows',
        url: 'https://pl-indiatvnews.akamaized.net/out/v1/db79179b608641ceaa5a4d0dd0dca8da/index.m3u8'
    },
    {
        id: 'znews',
        name: 'ZNews',
        logo: 'https://english.cdn.zeenews.com/static/public/updated_logos/english.svg',
        category: 'News',
        description: 'English news channel from the Zee Media network',
        url: 'https://dxfxzhqtgt09i.cloudfront.net/index.m3u8'
    },
    {
        id: 'abpnews',
        name: 'ABP News',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/ABP_News_logo.svg/300px-ABP_News_logo.svg.png',
        category: 'News',
        description: 'Major Hindi news channel with nationwide coverage',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/abp-news/master.m3u8'
    },
    {
        id: 'ndtvindia',
        name: 'NDTV India',
        logo: 'https://cdn.pnggallery.com/wp-content/uploads/ndtv-india-logo-02.png',
        category: 'News',
        description: 'Credible Hindi news channel with expert opinions',
        url: 'https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/master.m3u8'
    },
    {
        id: 'cnnnews18',
        name: 'CNN News 18',
        logo: 'https://i.imgur.com/WrmeIco.png',
        category: 'News',
        description: 'Indian partner of CNN International for English news',
        url: 'https://n18syndication.akamaized.net/bpk-tv/CNN_News18_NW18_MOB/output01/index.m3u8'
    },
    {
        id: 'wion',
        name: 'WION',
        logo: 'https://www.wionews.com/_next/static/media/wion-logo_white.d670dbc6.svg',
        category: 'News',
        description: 'World Is One News - Global Indian perspective',
        url: 'https://d2f067kuhcp3tj.cloudfront.net/index.m3u8'
    },
    {
        id: 'ndtv24x7',
        name: 'NDTV 24x7',
        logo: 'https://i.ibb.co/845X7fY1/ndtv-24x7-in.png',
        category: 'News',
        description: 'Premier English news channel from NDTV network',
        url: 'https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8'
    },
    {
        id: 'bbcworld',
        name: 'BBC World News',
        logo: 'https://i.imgur.com/vSz2WEp.png',
        category: 'News',
        description: 'International news from the British Broadcasting Corporation',
        url: 'https://cdn4.skygo.mn/live/disk1/BBC_News/HLSv3-FTA/BBC_News.m3u8'
    },
    {
        id: 'euronews',
        name: 'Euro News',
        logo: 'https://i.imgur.com/8t9mdg9.png',
        category: 'News',
        description: 'Pan-European news in English covering global events',
        url: 'https://apollo.production-public.tubi.io/live/ac-euronews2.m3u8'
    },
    {
        id: 'dd-india',
        name: 'DD India',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/DD_India_logo.jpg',
        category: 'News',
        description: 'Government of India’s international broadcasting channel',
        url: 'https://cdn-7.pishow.tv/live/20/master.m3u8'
    },

    // Music
    {
        id: '9xm',
        name: '9XM',
        logo: 'https://jiotvimages.cdn.jio.com/dare_images/images/9XM.png',
        category: 'Music',
        description: 'Indian Hindi music television channel owned by 9X Media, specializing in Bollywood music videos',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/9xm/master.m3u8'
    },
    {
        id: 'shemaroofilmi-gaane',
        name: 'Shemaroo Filmi Gaane',
        logo: 'https://jiotvimages.cdn.jio.com/dare_images/images/shemaroofilmigaane.png',
        category: 'Music',
        description: 'Bollywood music and entertainment',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/shemaroo-filmigaane/master.m3u8'
    },
    {
        id: 'zoom',
        name: 'Zoom',
        logo: 'https://jiotvimages.cdn.jio.com/dare_images/images/Zoom.png',
        category: 'Music',
        description: 'Leading Hindi muic channel',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/zoom-tv/master.m3u8'
    },
    {
        id: 'b4u-music',
        name: 'B4U Music',
        logo: 'https://i.imgur.com/KSxPLJA.png',
        category: 'Music',
        description: 'Bollywood music and entertainment',
        url: 'https://cdnb4u.wiseplayout.com/B4U_Music/master.m3u8'
    },
    {
        id: 'music-india',
        name: 'Music India',
        logo: 'https://static.wikia.nocookie.net/logopedia/images/2/2f/Music_India.jpeg',
        category: 'Music',
        description: 'Bollywood music videos, countdowns and entertainment',
        url: 'https://cdn-2.pishow.tv/live/226/master.m3u8'
    },

    // Movie
    {
        id: 'shemaroobollywood',
        name: 'Shemaroo Bollywood',
        logo: 'https://i.ibb.co/wrdbcfZn/shemaroobollywood.png',
        category: 'Movie',
        description: 'Bollywood movies and entertainment',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/shemaroo-bollywood/master.m3u8'
    },
    {
        id: 'b4u-movies',
        name: 'B4U Movies',
        logo: 'https://jiotv.catchup.cdn.jio.com/dare_images/images/B4U_Movies.png',
        category: 'Movie',
        description: 'Bollywood music and entertainment',
        url: 'https://cdnb4u.wiseplayout.com/B4U_Movies/master.m3u8'
    },
    {
        id: 'goldmines-movies',
        name: 'Goldmines Movies',
        logo: 'https://yt3.googleusercontent.com/d66J-MMZ06-55gkF5maclPGB5f5j1L0SAs3iWnl3lhoswlWrJ67wD2a3mZGkgHgt-W3kMrIT=s160-c-k-c0x00ffffff-no-rj',
        category: 'Movie',
        description: 'Popular Hindi movies, especially dubbed South Indian blockbusters',
        url: 'https://cdn-2.pishow.tv/live/1461/master.m3u8'
    },
    {
        id: 'goldmines-2',
        name: 'Goldmines 2',
        logo: 'https://5.imimg.com/data5/SELLER/Default/2024/7/433249328/BI/AC/EM/184162459/goldmines-telefilms-advertisements-services.png',
        category: 'Movie',
        description: 'More blockbuster Hindi and dubbed South Indian movies',
        url: 'https://cdn-2.pishow.tv/live/1460/master.m3u8'
    },
    {
        id: 'bollywood-hd',
        name: 'Bollywood HD',
        logo: 'https://static.wikia.nocookie.net/logopedia/images/d/d5/Bollywood_HD_%282018%29.svg',
        category: 'Movie',
        description: 'HD Bollywood films and entertainment',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bollywood-hd/manifest.m3u8'
    },
    {
        id: 'bollywood-classic-hd',
        name: 'Bollywood Classic HD',
        logo: 'https://static.wikia.nocookie.net/logopedia/images/0/0d/Bollywood_Clasic_2024.svg',
        category: 'Movie',
        description: 'Classic Bollywood films in high definition',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bollywood-classic/manifest.m3u8'
    },

    // Entertainment
    {
        id: 'koreantv',
        name: 'Korean TV',
        logo: 'https://i.ibb.co/4ZczvFb7/Chat-GPT-Image-Apr-14-2025-03-25-19-PM-150x150.png',
        category: 'Entertainment',
        description: 'Popular korean serials, movies and reality shows',
        url: 'https://amg02537-skandhamediaser-koreantv-samsungin-ad-1s.amagi.tv/playlist/amg02537-skandhamediaser-koreantv-samsungin/playlist.m3u8'
    },
    {
        id: 'e24',
        name: 'E24',
        logo: 'https://upload.wikimedia.org/wikipedia/en/1/17/E24-TV-Channel.jpg',
        category: 'Entertainment',
        description: 'Bollywood gossip, music, movie previews, and celebrity updates',
        url: 'https://bagnetwork.digivive.com/hlslive/Admin/px09241091/live/E24LiveB/master_1.m3u8'
    },

    // Kids
    {
        id: 'babysharktv',
        name: 'Baby Shark TV',
        logo: 'https://provider-static.plex.tv/epg/cms/production/f8f7c285-f574-4037-84cd-131a22066e57/Channel_Logo_dark_1500x1000_.png',
        category: 'Kids',
        description: 'Fun and educational songs and videos featuring Baby Shark and friends for young children.',
        url: 'https://newidco-babysharktv-1-eu.rakuten.wurl.tv/playlist.m3u8'
    },
    {
        id: 'cartoonnetwork',
        name: 'Cartoon Network',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg',
        category: 'Kids',
        description: 'Popular animated shows and cartoons for kids and teens, featuring characters like Ben 10 and Gumball.',
        url: 'https://tvsen5.aynaott.com/cartoonnetwork/index.m3u8'
    },

    // Documentary
    {
        id: 'natgeo',
        name: 'National Geographic',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Natgeologo.svg',
        category: 'Documentary',
        description: 'Exploring science, nature, history, and culture through award-winning documentaries and series.',
        url: 'https://fl5.moveonjoy.com/National_Geographic/index.m3u8'
    },

    // Education
    {
        id: 'ted',
        name: 'TED',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/TED_three_letter_logo.svg',
        category: 'Education',
        description: 'Inspiring talks and ideas on technology, entertainment, design, and more',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/ted/master.m3u8'
    }
];

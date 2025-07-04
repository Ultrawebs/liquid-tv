const channels = [
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
        id: '9xm',
        name: '9XM',
        logo: 'https://jiotvimages.cdn.jio.com/dare_images/images/9XM.png',
        category: 'Music',
        description: 'Indian Hindi music television channel owned by 9X Media, specializing in Bollywood music videos',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/9xm/master.m3u8'
    },
        // New Entertainment Channels
    {
        id: 'shemaroobollywood',
        name: 'Shemaroo Bollywood',
        logo: 'https://i.ibb.co/wrdbcfZn/shemaroobollywood.png',
        category: 'Movie',
        description: 'Bollywood movies and entertainment',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/shemaroo-bollywood/master.m3u8'
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
        id: 'koreantv',
        name: 'Korean TV',
        logo: 'https://i.ibb.co/4ZczvFb7/Chat-GPT-Image-Apr-14-2025-03-25-19-PM-150x150.png',
        category: 'Entertainment',
        description: 'Popular korean serials, movies and reality shows',
        url: 'https://amg02537-skandhamediaser-koreantv-samsungin-ad-1s.amagi.tv/playlist/amg02537-skandhamediaser-koreantv-samsungin/playlist.m3u8'
    },
    {
        id: 'zoom',
        name: 'Zoom',
        logo: 'https://jiotvimages.cdn.jio.com/dare_images/images/Zoom.png',
        category: 'Music',
        description: 'Leading Hindi muic channel',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/zoom-tv/master.m3u8'
    },

    // Music Channels
    {
        id: 'mtv-india',
        name: 'MTV India',
        logo: 'https://i.ibb.co/0mXbw0Q/mtvindia.png',
        category: 'Music',
        description: 'Latest music videos and youth programs',
        url: 'https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/MTV_HD/master.m3u8'
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
        id: 'b4u-movies',
        name: 'B4U Movies',
        logo: 'https://jiotv.catchup.cdn.jio.com/dare_images/images/B4U_Movies.png',
        category: 'Movie',
        description: 'Bollywood music and entertainment',
        url: 'https://cdnb4u.wiseplayout.com/B4U_Movies/master.m3u8'
    },
    // Sports Channels
    {
        id: 'star-sports1',
        name: 'Star Sports 1',
        logo: 'https://i.ibb.co/0nL8k0z/starsports1.png',
        category: 'Sports',
        description: 'Live cricket, football and more',
        url: 'https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/Star_Sports_1_HD/master.m3u8'
    },
    {
        id: 'sony-ten1',
        name: 'Sony Ten 1',
        logo: 'https://i.ibb.co/0nL8k0z/sonyten1.png',
        category: 'Sports',
        description: 'Live sports including football, WWE',
        url: 'https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/Sony_Ten_1_HD/master.m3u8'
    },
    {
        id: 'eurosport',
        name: 'Eurosport',
        logo: 'https://i.ibb.co/0nL8k0z/eurosport.png',
        category: 'Sports',
        description: 'International sports coverage',
        url: 'https://rakuten-eurosport-2-fi.samsung.wurl.com/manifest/playlist.m3u8'
    },

    // International Entertainment
    {
        id: 'hbo',
        name: 'HBO',
        logo: 'https://i.ibb.co/0nL8k0z/hbo.png',
        category: 'Entertainment',
        description: 'Hollywood movies and series',
        url: 'https://rakuten-hbo-1-pt.samsung.wurl.com/manifest/playlist.m3u8'
    },
    {
        id: 'cnn-int',
        name: 'CNN International',
        logo: 'https://i.ibb.co/0nL8k0z/cnnint.png',
        category: 'News',
        description: 'Global news coverage',
        url: 'https://turner-cnn-international-1-eu.rakuten.wurl.tv/playlist.m3u8'
    }
];

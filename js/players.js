// players.js - JW Player specific implementation

function initializeJWPlayer(videoUrl, channelLogo) {
    jwplayer("jw-player-container").setup({
        aspectratio: "16:9",
        width: "100%",
        file: videoUrl,
        image: channelLogo || "https://img.freepik.com/free-photo/empty-home-studio-used-internet-show_482257-86924.jpg",
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
            appid: "CC1AD845", // Chromecast default app ID
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

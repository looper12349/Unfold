
const submit = document.querySelector(".submit");

let search_value;

// const url = 'https://newsapi.org/v2/top-headlines?country=india&apiKey=cc157df7bdb646f99a826a5e0ff12703';



submit.addEventListener("click", function () {
    const input = document.querySelector(".input").value;
    console.log(input);
    // alert("You have searched for " + input);
    search_value = input;
    getNews(search_value);
});

const input = document.querySelector(".input");
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const input = document.querySelector(".input").value;
        console.log(input);
        // alert("You have searched for " + input);
        search_value = input;
        getNews(search_value);
    }
    
});

const getNews = async (search_value) => {
    // url = `https://newsapi.org/v2/everything?q=${search_value}&apiKey=6a4e3f9e4c7a4e3e9c4d7d1b9c4d7d1b`;
    // const url = `https://newsapi.org/v2/everything?q=${search_value}&from=2024-01-28&sortBy=popularity&apiKey=cc157df7bdb646f99a826a5e0ff12703`;
    const url = "https://newsapi.org/v2/everything?q="+search_value+"&from=2024-01-27&to=2024-01-27&sortBy=popularity&apiKey=cc157df7bdb646f99a826a5e0ff12703";
    
    const data = await defaultNews(url);
    // console.log(data);
   
    clearNews();
    console.clear();
    if(data!=null) {
        console.log("News Loaded Successfully");
        console.log("Data: ", data);
    }
    else{
        console.log("News Not Loaded");
        console.log("Data: ", data);
    }
    loadNews(data);
}

async function defaultNews(url)
{
    console.log(url);
    const res = await fetch(url);
    return await res.json();
}


const data = {
    "status": "ok",
    "totalResults": 34,
    "articles": [
    {
    "source": {
    "id": null,
    "name": "The Athletic"
    },
    "author": "Matthew Futterman",
    "title": "Aryna Sabalenka wins Australian Open for second time, defeating Zheng Qinwen - The Athletic",
    "description": "The No 2 seed from Belarus claimed her second Grand Slam title with a blistering performance",
    "url": "https://theathletic.com/5231460/2024/01/27/aryna-sabalenka-australian-open/",
    "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/01/27050737/GettyImages-1956528333.jpg",
    "publishedAt": "2024-01-27T15:51:35Z",
    "content": "Aryna Sabalenka won the Australian Open with a decisive, straight sets win over Zheng Qinwen, a fitting end to a fortnight that established her as the class of her sport at the moment, even if thats … [+8569 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": "axios",
    "name": "Axios"
    },
    "author": "Axios",
    "title": "Canada, U.K., Australia, others join U.S. in pausing funding to UNRWA - Axios",
    "description": null,
    "url": "https://www.axios.com/2024/01/26/unrwa-gaza-hamas-israel-attack",
    "urlToImage": null,
    "publishedAt": "2024-01-27T15:33:45Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "NBCSports.com"
    },
    "author": "Mike Florio",
    "title": "Michigan hires Sherrone Moore to replace Jim Harbaugh - NBC Sports",
    "description": "Jim Harbaugh has moved on to the NFL.",
    "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/michigan-hires-sherrone-moore-to-replace-jim-harbaugh",
    "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/3428624/2147483647/strip/true/crop/5343x3005+0+407/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F64%2Fa4%2F42b800a74e8d9d92dbd7be4ec377%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D22364227",
    "publishedAt": "2024-01-27T14:42:56Z",
    "content": "Jim Harbaugh has moved on to the NFL. Sherrone Moore has moved in to Harbaughs prior job.\r\nThe Michigan assistant who replaced Harbaugh for three late-season wins (including a victory over Ohio State… [+1516 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "Prideofdetroit.com"
    },
    "author": "Erik Schlitt",
    "title": "NFC/AFC Championship: Expert picks, predictions, moneyline, spread, over/under - Pride Of Detroit",
    "description": "The POD staff make their predictions for the NFC Championship round of the 2023 NFL playoffs.",
    "url": "https://www.prideofdetroit.com/2024/1/27/24051835/nfl-nfc-afc-championship-playoffs-expert-picks-predictions-moneyline-spread-over-under-betting-line",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/AlbXfFoDVUXOZGSi1KmjillRV5g=/0x438:8192x4727/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25250240/1420219288.jpg",
    "publishedAt": "2024-01-27T14:00:00Z",
    "content": "The 2023-24 NFL playoffs have progressed to the Championship rounds, and with just four teams remaining, both games will be shown on Sunday, January 28, 2024. \r\nThe Kansas City Chiefs will face off a… [+1399 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "CBS Baltimore Staff",
    "title": "Multi-vehicle crash prompts lane closures and major delays on US-50 Bay Bridge - CBS News",
    "description": "MDTA officials are investigating a multi-vehicle crush that injured multiple people and caused major deals on US-50 Bay Bridge on Saturday morning, officials say.",
    "url": "https://www.cbsnews.com/baltimore/news/multi-vehicle-crash-prompts-lane-closures-and-major-delays-on-the-bay-bridge/",
    "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/01/27/de9638dd-b26b-414e-8821-edb27088c64d/thumbnail/1200x630/05cdcc79e9e5f947fbe5e6d23a5dcb83/bay-bridge.jpg?v=9bdba4fec5b17ee7e8ba9ef8c71cf431",
    "publishedAt": "2024-01-27T13:57:00Z",
    "content": "BALTIMORE- MDTA officials are investigating a multi-vehicle crush that injured multiple people and caused major deals on US-50 Bay Bridge on Saturday morning, officials say.\r\nMDTA Police first receiv… [+881 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Eurogamer.net"
    },
    "author": "Vikki Blake",
    "title": "Layoffs at Toys for Bob and Sledgehammer Games affect between 30% and 40% of staff, insider says - Eurogamer.net",
    "description": "Crash Bandicoot developer Toys for Bob and Call of Duty studio Sledgehammer Games have reportedly lost around 40 per ce…",
    "url": "https://www.eurogamer.net/layoffs-at-toys-for-bob-and-sledgehammer-games-affect-between-30-and-40-of-staff-insider-says",
    "urlToImage": "https://assetsio.reedpopcdn.com/crash-bandicoot-4-its-about-time-ps5-km-2841584866.jpeg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    "publishedAt": "2024-01-27T13:40:33Z",
    "content": "Crash Bandicoot developer Toys for Bob and Call of Duty studio Sledgehammer Games have reportedly lost around 40 per cent and 30 per cent of their staff, respectively.\r\nThe layoffs are part of Micros… [+1843 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": null,
    "title": "A famed NYC museum is closing 2 Native American halls, and others have taken similar steps - CBS News",
    "description": "New York City's American Museum of Natural History is closing two halls featuring Native American objects.",
    "url": "https://www.cbsnews.com/news/museum-of-natural-history-closes-native-american-halls-harvard/",
    "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/01/27/0f346df0-edab-4953-a918-5cc07b83e20c/thumbnail/1200x630/3a7cd1d6058986e1d0fd5a8e6f795ce7/bordonaro-11p-pkg-museu-wcbs93tb-hi-res-still.jpg?v=9bdba4fec5b17ee7e8ba9ef8c71cf431",
    "publishedAt": "2024-01-27T13:37:00Z",
    "content": "AMNH shutting down 2 Native American exhibition halls \r\nAMNH shutting down 2 Native American exhibition halls02:04\r\nNew York's American Museum of Natural History is closing two halls featuring Native… [+4892 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": null,
    "title": "World's largest cruise ship, Icon of the Seas, begins its maiden voyage after christening from Lionel Messi - CBS News",
    "description": "Icon of the Seas, the world's largest cruise ship, was officially christened Tuesday with help from soccer legend Lionel Messi and his Inter Miami teammates.",
    "url": "https://www.cbsnews.com/news/worlds-largest-cruise-ship-icon-of-the-seas-begins-its-maiden-voyage-after-christening-from-lionel-messi/",
    "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/01/27/11417188-cc32-4c81-95bc-d7b9bbddf3df/thumbnail/1200x630/27c40a0a7bf44c66477e73bc4083e57a/ap24024003221401.jpg?v=9bdba4fec5b17ee7e8ba9ef8c71cf431",
    "publishedAt": "2024-01-27T13:22:10Z",
    "content": "The world's largest cruise ship is set to begin its maiden voyage Saturday as it gets underway from the Port of Miami.\r\nRoyal Caribbean's Icon of the Seas, which runs nearly 1,200 feet from bow to st… [+1959 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Reuters",
    "title": "South Gaza battles rage as heavy rain hits displaced further north - Reuters",
    "description": null,
    "url": "https://www.reuters.com/world/middle-east/south-gaza-battles-rage-heavy-rain-hits-displaced-people-further-north-2024-01-27/",
    "urlToImage": null,
    "publishedAt": "2024-01-27T13:05:00Z",
    "content": null
    },
    {
    "source": {
    "id": "the-hill",
    "name": "The Hill"
    },
    "author": "Tara Suter",
    "title": "Biden vows to shut down border when it ‘becomes overwhelmed’ if Congress passes bill - The Hill",
    "description": "President Biden promised to shut down the border “when it becomes overwhelmed” if Congress passes a bipartisan border security bill. “Let’s be clear,” Biden said in a statement Friday. “What’s been negotiated would — if passed into law — be the toughest and f…",
    "url": "https://thehill.com/homenews/administration/4433114-biden-vows-shut-down-border-when-overwhelmed-should-congress-pass-bill/",
    "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/01/AP24018741589802-e1705783021602.jpg?w=1280",
    "publishedAt": "2024-01-27T12:52:00Z",
    "content": "Skip to content\r\nPresident Biden promised to shut down the border “when it becomes overwhelmed” if Congress passes a bipartisan border security bill.\r\n“Let’s be clear,” Biden said in a statement Frid… [+1924 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "Houthis attack British-linked tanker Marlin Luanda in Gulf of Aden - BBC.com",
    "description": "The Iran-backed group says it targeted the Marlin Luanda in response to \"American-British aggression\".",
    "url": "https://www.bbc.com/news/world-middle-east-68110358",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/EDB6/production/_132445806_mediaitem132445805.jpg",
    "publishedAt": "2024-01-27T12:35:00Z",
    "content": "A tanker with links to the UK was on fire for several hours in the Gulf of Aden after being hit by a missile fired by the Houthis. \r\nThe Iran-backed movement, based in Yemen, said it targeted the Mar… [+1828 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "Queen Camilla visits King Charles in hospital after prostate treatment - BBC.com",
    "description": "The King, who went into hospital on Friday morning, is said to be \"doing well\" after the procedure.",
    "url": "https://www.bbc.com/news/uk-68116062",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/89C5/production/_132396253_hi090647487.jpg",
    "publishedAt": "2024-01-27T12:29:00Z",
    "content": "By Sean Coughlan, Royal correspondent &amp; Alex SmithBBC News\r\nA palace spokesperson said the King wanted to \"thank all those who have sent their good wishes\".\r\nQueen Camilla has visited King Charle… [+1981 chars]"
    },
    {
    "source": {
    "id": "newsweek",
    "name": "Newsweek"
    },
    "author": "Brendan Cole",
    "title": "Russian Flight Il-76 Crash: What We Now Know About Ukrainian POW Disaster - Newsweek",
    "description": "Ukraine wants an international inquiry into the downed plane, which Moscow said was carrying dozens of POWs on board.",
    "url": "https://www.newsweek.com/russia-ukraine-plane-crash-ilyushin-1864525",
    "urlToImage": "https://d.newsweek.com/en/full/2341433/ilyushin-76.jpg",
    "publishedAt": "2024-01-27T12:28:38Z",
    "content": "Mystery surrounds the crash of a Russian military plane, which Moscow said had been transporting Ukrainian prisoners of war (POWs), as demands by Kyiv grow for Russia to provide proof for the claims.… [+4506 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "CBS News",
    "title": "Taylor Swift deepfakes spread online, sparking outrage - CBS News",
    "description": "Graphic artificial intelligence-generated images of superstar Taylor Swift, known as \"deepfakes,\" have been circulating on social media. The manipulated images, videos and audio recordings seem eerily legitimate, and mark the latest example of how artificial …",
    "url": "https://www.cbsnews.com/video/taylor-swift-deepfakes-spread-online-sparking-outrage/",
    "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/01/27/dd07e9e1-9940-479a-a2c9-52c2ac26c886/thumbnail/1200x630/132f064c728312111acb55a66b070c67/kent.jpg?v=9bdba4fec5b17ee7e8ba9ef8c71cf431",
    "publishedAt": "2024-01-27T12:22:32Z",
    "content": "Watch CBS News\r\nCopyright ©2024 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Janhoi McGregor",
    "title": "Samsung Makes Surprise New Offer To Galaxy S24 Buyers - Forbes",
    "description": "Samsung is handing out freebies and discounts to Galaxy S24 buyers.",
    "url": "https://www.forbes.com/sites/jaymcgregor/2024/01/27/samsung-galaxy-s24-ultra-preorder-deal-free-galaxy-watch-6/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65b131ebe7ad502dbf6805b7/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    "publishedAt": "2024-01-27T11:57:37Z",
    "content": "A Samsung S24 Ultra smartphone during a Samsung Unveiled event in Las Vegas, Nevada, US, on ... [+] Thursday, Jan. 11, 2024. Samsung Electronics Co. is turning to artificial intelligence features to … [+5808 chars]"
    },
    {
    "source": {
    "id": "mashable",
    "name": "Mashable"
    },
    "author": "Mark Kaufman",
    "title": "Before its demise, NASA's Mars helicopter captured a glorious aerial view - Mashable",
    "description": "A vista of the Red Planet.",
    "url": "https://mashable.com/article/nasa-ingenuity-helicopter-last-mars-image",
    "urlToImage": "https://helios-i.mashable.com/imagery/articles/04RcVLCElKMjUq0GM0z9wpM/hero-image.fill.size_1200x675.v1706298255.png",
    "publishedAt": "2024-01-27T11:30:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Space.com"
    },
    "author": "Brett Tingley",
    "title": "SpaceX Falcon 9 rocket modified for Northrop Grumman Cygnus cargo launch on Jan. 30 - Space.com",
    "description": "\"It's taken a lot of modifications on our part to get this hardware ready to go fly.\"",
    "url": "https://www.space.com/spacex-1st-launch-northrop-grumman-cygnus-cargo-ship",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/YKYg8DkjSeGScoRYDjYMSQ-1200-80.jpg",
    "publishedAt": "2024-01-27T11:00:46Z",
    "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
    }
    ]
    };



// console.log("Title: ",articles);

const container = document.querySelector(".container");

const loadNews = (data) => {

    const articles = data.articles;

    for (const article of articles) {
        if(article.title != "[Removed]" && article.description != "[Removed]" && article.urlToImage != null && article.url!=null) {
        console.log("Title: ", article.title);
        console.log("Description: ", article.description);
        console.log("Image URL: ", article.urlToImage);
        console.log("URL: ", article.url);
        console.log("----------x-----------");
        const section = document.createElement("section");
        section.classList.add("image");
        const heading = document.createElement("h1");
        heading.textContent = article.title;
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        section.appendChild(heading);
        section.appendChild(img);
        const para = document.createElement("p");
        para.textContent = article.description;
        const readMore = document.createElement("a");
        readMore.textContent = "Read More       ";
        const readMoreIcon = document.createElement("i");
        readMoreIcon.classList.add("fa-solid");
        readMoreIcon.classList.add("fa-arrow-right");
        readMore.appendChild(readMoreIcon);
        readMore.classList.add("readMore");
        
        readMore.setAttribute("href", article.url);
        readMore.setAttribute("target", "_blank");
        section.appendChild(para);
        section.appendChild(readMore);
        
        container.appendChild(section);
        }
    }
}

function clearNews() {
    const sections = document.querySelectorAll(".image");
    for (const section of sections) {
        section.remove();
    }
}
// loadNews();

// const d = defaultNews(url);
// console.log(d);
// loadNews(d);



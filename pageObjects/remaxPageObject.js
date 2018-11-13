module.exports = {
    url: "https://amiehrealtor.com",
    elements : {
        remaxBanner: 'div[class="site-branding"]',
        realtorName: 'h1[class="site-title"]',
        homeButton: 'li[id="menu-item-2392"]',
        currentListings: 'li[id="menu-item-2398"]',
        buying: 'li[id="menu-item-2393"]',
        selling: 'li[id="menu-item-2394"]',
        relocating: 'li[id="menu-item-2402"]',
        marketNews: 'li[id="menu-item-2396"]',
        aboutMe: 'li[id="menu-item-2395"]',
        buySellNow: 'li[id="menu-item-2397"]',
        ad: 'div[class="adtags-stiky-ad adtags-stiky-ad_opened"]',
        adClose: 'div[class="adtags-stiky-ad__control"]',
        // All Pages
        pageTitle: 'h1[class="page-title"]',
        contactMe: 'a[href="https://amiehrealtor.wordpress.com/contact/',
        // Home
        homesForSale: 'h2[class="section-title"]',
        firstHome: {selector: '(//article)[1]', locateStrategy: 'xpath'},
        // Home View
        homeTitle: 'h1[class="entry-title"]',
        photoCarousel: 'div[class="slick',
        secondPhoto: 'div[data-slick-index="1"]',
        firstPhoto: 'div[class="slick-slide slick-active slick-center"]',
        content: 'div[class="entry-content"]',
        // Buying
        buyingFindMyNewHome: 'li[id="menu-item-2406"]',
        buyingSearchAllProperties: 'li[id="menu-item-2405"]',
        buyingMortgageInfo: 'li[id="menu-item-2403"]',
        // // Find My New Home
        firstName: 'input[name="g215-firstname"]',
        submit: 'input[class="pushbutton-wide"]',
        // // Mortgage Information
        mortgageAppCheck: 'a[href="https://amiehrealtor.files.wordpress.com/2013/12/mortgage_application_checklist.pdf"]',
        // Selling
        preparingForSale: 'a[title="Ready to Sell"]',
        isYourHomeReady: 'a[href="https://amiehrealtor.com/selling/ready-to-sell/"]',
        // Market News
        articleTitle: 'h1[class="entry-title"]',
        articlePhoto: 'a[class="post-thumbnail"]',
        articleDate: 'time[class="entry-date published"]',
        articleContent: 'div[class="entry-content"]',
        readMore: 'a[class="read-more"]',
        // porchDecoratingArticle: 'a[href="https://amiehrealtor.com/2018/11/09/porch-decorating-ideas/"]',
        porchDecoratingArticle: {selector: '//a[text()="Porch Decorating Ideas"]', locateStrategy: 'xpath'},
        // Article View
        porchArticleImage: 'img[data-image-title="porch decorating web 11 9 2018"]',
        articleAuthor: '.byline',
        articleTags: 'span[class="tags-links"]',
        // // Homeowners Tips & Tricks
        homeownersTips: 'li[id="menu-item-2400"]',
        // About Me
        realtorImage: 'img[data-attachment-id="10"]',
        testimonials: 'li[id="menu-item-2399"]',
        // Contact Me / Buy and Sell Now
        nameField: 'input[name="g14-yourname"]',
    }
}
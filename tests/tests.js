var clickDropDown = require('../testAssets/clickDropDown')

module.exports = {
    beforeEach: browser => {
        remax = browser.page.remaxPageObject()
        remax.api.url("https://amiehrealtor.com")
    },
    after: browser => {
        browser.end()
    },
    'Check Home Page': () => {
        remax
            .verify.visible('@remaxBanner')
            .verify.visible('@realtorName')
            .verify.visible('@homesForSale')
            .verify.visible('@firstHome')
    },
    'Click on Listing from Home Page': () => {
        remax
            .click('@firstHome')
            .waitForElementVisible('@homeTitle', 5000)
    },
    'Click on Current Listings': () => {
        remax
            .click('@currentListings')
            .expect.element('@pageTitle').text.to.equal('Current Listings')
    },
    'Click on Re/Max Logo from Current Listings': () => {
        remax
            .click('@currentListings')
            .waitForElementVisible('@remaxBanner', 5000)
            .click('@remaxBanner')
            .verify.urlContains('https://amiehrealtor.com/')
    },
    'Click on First Listing from Current Listings': () => {
        remax
            .click('@currentListings')
            .click('@firstHome')
            .verify.visible('@homeTitle')
    },
    'Home for Sale View': () => {
        remax
            .click('@currentListings')
            .click('@firstHome')
            .verify.visible('@homeTitle')
            .verify.visible('@photoCarousel')
            .verify.visible('@content')
            .click('@secondPhoto')
            .click('@firstPhoto')
    },
    'Buying Page': () => {
        remax
            .moveToElement('@buying', undefined, undefined)
        remax
            .click('@buying')
            .expect.element('@pageTitle').text.to.equal('Buying')
    },
    'Find My New Home! Page': () => {
        clickDropDown('@buying', '@buyingFindMyNewHome', remax)
        remax
            .expect.element('@pageTitle').text.to.equal('Find My New Home!')
        remax
            .verify.visible('@firstName')
            .verify.visible('@submit')
    },
    'Search All Properties Page': () => {
        clickDropDown('@buying', '@buyingSearchAllProperties', remax)
        remax
            .expect.element('@pageTitle').text.to.equal('Search All Properties')
    },
    'Mortgage Information Page': () => {
        clickDropDown('@buying', '@buyingMortgageInfo', remax)
        remax
            .expect.element('@pageTitle').text.to.equal('Mortgage Information')
    },
    'Click Contact Me from Mortgage Information': () => {
        clickDropDown('@buying', '@buyingMortgageInfo', remax)
        remax
            .click('@contactMe')
            .verify.urlContains('/contact/')
    },
    'Click Mortgage Application Checklist from Mortgage Information': () => {
        clickDropDown('@buying', '@buyingMortgageInfo', remax)
        remax
            .click('@mortgageAppCheck')
            .verify.urlContains('/2013/12/mortgage_application_checklist.pdf')
    },
    'Selling Page': () => {
        remax
            .click('@selling')
            .expect.element('@pageTitle').text.to.equal('Selling')
    },
    'Selling: Contact Me': () => {
        remax
            .click('@selling')
            .click('@contactMe')
            .verify.urlContains('/contact/')
    },
    'Selling: Preparing Your Home For Sale': () => {
        remax
            .click('@selling')
            .click('@preparingForSale')
            .verify.urlContains('/selling/ready-to-sell/')
    },
    'Is Your Home Ready to Sell? Page': () => {
        clickDropDown('@selling', '@isYourHomeReady', remax)
        remax
            .verify.urlContains('/selling/ready-to-sell/')
            .expect.element('@pageTitle').text.to.equal('Is Your Home Ready to Sell?')
    },
    // 'Is Your Home Ready to Sell? Links': () => {

    // }
    'Relocating Page': () => {
        remax
            .click('@relocating')
            .verify.urlContains('/relocation/')
            .expect.element('@pageTitle').text.to.equal('Relocating')
    },
    'Relocating: Contact Me': () => {
        remax
            .click('@relocating')
            .click('@contactMe')
            .verify.urlContains('/contact/')
    },
    'Market News Page': () => {
        remax
            .click('@marketNews')
            .verify.urlContains('/pages/')
            .verify.visible('@articleTitle')
            .verify.visible('@articlePhoto')
            .verify.visible('@articleDate')
            .verify.visible('@articleContent')
            .verify.visible('@readMore')
    },
    'Click on Market News Article': () => {
        remax
            .click('@marketNews')
            .click('@porchDecoratingArticle')
            .expect.element('@articleTitle').text.to.equal('Porch Decorating Ideas')
    },
    'Article View Page': () => {
        remax
            .click('@marketNews')
            .waitForElementVisible('@porchDecoratingArticle', 500)
        remax.api.url('https://amiehrealtor.com/2018/11/09/porch-decorating-ideas/')
            // .click('@porchDecoratingArticle')
        remax    
            .verify.urlContains('/porch-decorating-ideas/')
            .verify.visible('@articleTitle')
            .verify.visible('@porchArticleImage')
            .moveToElement('@articleAuthor', 0, 0)
            .verify.visible('@articleAuthor')
            .verify.visible('@articleTags')
            .verify.visible('@articleContent')
    },
    'Homeowners Tips & Tricks Page': () => {
        clickDropDown('@marketNews', '@homeownersTips', remax)
        remax
            .verify.urlContains('/pages/home-tips-and-tricks/')
            .expect.element('@pageTitle').text.to.equal('Home Owners Tips & Tricks')
    },
    // 'Homeowners Tips & Tricks Links': () => {

    // }
    'About Me Page': () => {
        remax
            .click('@aboutMe')
            .verify.urlContains('/about/')
            .verify.visible('@realtorImage')
            .expect.element('@pageTitle').text.to.equal('About Me')
    },
    'Testimonials Page': () => {
        clickDropDown('@aboutMe', '@testimonials', remax)
        remax
            .verify.urlContains('/about/testimonials/')
            .expect.element('@pageTitle').text.to.equal('Testimonials')
    },
    'Buy and Sell Now Page': () => {
        remax
            .click('@buySellNow')
            .verify.urlContains('/contact/')
            .verify.visible('@realtorImage')
            .verify.visible('@nameField')
            .verify.visible('@submit')
            .expect.element('@pageTitle').text.to.equal('Buy and Sell NOW')
    },
}
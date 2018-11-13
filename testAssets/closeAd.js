module.exports = (pageObject, browser) => {
    // browser.element('css selector', '@ad', function (res) {
    //     if (res != null) {
    //     pageObject    
    //         .click('@closeAd')
    //     }
    // })
    browser
        .element('@ad', function(visible) {
            if(visible.status === 1){
                pageObject.click('@closeAd')
            }
        })
}
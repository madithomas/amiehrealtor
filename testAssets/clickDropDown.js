module.exports = (menuItem, option, pageObject) => {
    pageObject
        .moveToElement(menuItem, undefined, undefined)
    pageObject
        .click(option)
}
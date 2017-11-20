export function acceptAlert(){
    browser.waitUntil( function(){
        if(browser.alertText()){
            return true;
        }
    }, 5000)
    browser.alertAccept();
}
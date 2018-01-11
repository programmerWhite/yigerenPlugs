/**
 * Created by Raintree on 2018/1/11.
 */
//chrome.tabs.executeScript(tabId, {code: 'document.body.style.backgroundColor="red"'});
function getDomainFromUrl(url){
    var host = "null";
    if(typeof url == "undefined" || null == url)
        url = window.location.href;
    var regex = /.*\:\/\/([^\/]*).*/;
    var match = url.match(regex);
    if(typeof match != "undefined" && null != match)
        host = match[1];
    return host;
}

function checkForValidUrl(tabId, changeInfo, tab) {
    alert(tab.url)
    if(getDomainFromUrl(tab.url).toLowerCase()=="www.baidu.com"){
        chrome.pageAction.show(tabId);
    }
};
chrome.tabs.executeScript(tabId, {code: 'document.body.style.backgroundColor="red"'});

chrome.tabs.onUpdated.addListener(checkForValidUrl);
/**
 * Created by Raintree on 2018/1/11.
 */


/*获取数据方法*/
function dataTool(type,url,callback){
    var xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // 警告! 这样处理有可能被注入恶意脚本!
            if(!!callback){
                callback();
            }
        }
    }
    xhr.send();
}

chrome.tabs.executeScript(tabId, {file: 'some-script.js'});
function QueryString(key) {
    var value = null;
    for (var i = 0; i < QueryString.keys.length; i++) {
        if (QueryString.keys[i] == key) {
            value = QueryString.values[i];
            break;
        }
    }
    return value;
}
QueryString.keys = new Array();
QueryString.values = new Array();
function QueryString_Parse() {
    var query = window.location.search.substring(1);
    var pairs = query.split("&");
    for (var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf("=");
        if (pos >= 0) {
            var argname = pairs[i].substring(0, pos);
            var value = unescape(pairs[i].substring(pos + 1));
            QueryString.keys[QueryString.keys.length] = argname;
            QueryString.values[QueryString.values.length] = value;
        }
    }
}
QueryString_Parse();
try {
    var sDirHttp = QueryString("dir");
} catch (e) {
    var sDirHttp = "";
}
function f_click(obj) {
    var url = sDirHttp ? sDirHttp : obj.getAttribute("href");
    //window.document.location.href= url;
    window.document.location.href = url + "?SUBC=" + QueryString("SUBC");
}

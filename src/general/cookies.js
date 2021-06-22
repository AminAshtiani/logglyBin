function readCookie(names) {
    const result = {}
    for(let name of names) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) result[name] = c.substring(nameEQ.length,c.length);
        }
    }
    return result;
}

export default readCookie;
// this is the code which will be injected into a given page...

function embed(choice, code) {
    if(choice.toLowerCase() == "js") {
        const script = document.createElement("script");
        script.text = `${code}`;
        document.documentElement.appendChild(script);
    }
    else if(choice.toLowerCase() == "html") {
        const html = document.createElement("div");
        html.innerHTML = `${code}`;
        document.documentElement.appendChild(html);
    }
    else if(choice.toLowerCase() == "css") {
        const css = document.createElement("style");
        css.type = 'text/css';
        if (css.styleSheet)
                css.styleSheet.cssText = `${code}`;
        else
            css.appendChild(document.createTextNode(`${code}`));
        document.getElementsByTagName("head")[0].appendChild(css);
    }
}

(function() {
    var choice = prompt("Please enter type of code to inject at bottom of webpage CSS, HTML, or JS", "");
    var code = prompt("Enter code", "");
    embed(choice, code);
})();

// this is the code which will be injected into a given page...
function codeToInject() {
    window.__popcorn__test__ = true;
}

function embed(fn) {
    const script = document.createElement("script");
    script.text = `(${fn.toString()})();`;
    document.documentElement.appendChild(script);
}

embed(codeToInject);

(function() {
    embed(codeToInject);
})();

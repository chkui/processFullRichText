import $ from "jquery";

function Process(text) {
    this.selector = $(text)
}

Process.prototype.getHtml = function () {
    return this.selector.html();
}

Process.prototype.removeNoDataSpan = function () {
    this.selector.find("span[id^='OSC_h']").remove();
}

Process.prototype.removeUnUserNbsp = function () {
    const els = this.selector.find('p');
    function replace(string) {
        string = string.replace(' ', '');
        if(0 === string.indexOf('&nbsp;')){
            string = string.replace('\&nbsp;', '')
        }else{
            return string
        }
        return replace(string)
    }
    for(let le of els){
        le.innerHTML = replace(le.innerHTML);
    }
}

export default Process

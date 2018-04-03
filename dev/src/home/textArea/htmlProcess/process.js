import $ from "jquery";
import {naming} from './classReplaceNaming'

function Process(text, name, preUrl) {
    this.selector = $(text);
    this.name = name;
    this.preUrl = preUrl;
    this.imgList = [];
}

Process.prototype.getHtml = function () {
    return this.selector.html();
}

Process.prototype.removeNoDataSpan = function () {
    this.selector.find("span[id^='OSC_h']").remove();
}

Process.prototype.removeUnUserNbsp = function () {
    const els = this.selector.find('p,h1,h2,h3,h4');
    for (let le of els) {
        le.innerHTML = replaceStartNbsp(le.innerHTML);
    }
}

function replaceStartNbsp(string) {
    let pos = -1;
    pos = string.indexOf(' ');
    0 === pos && (string = string.substr(pos + 1));//处理头部的空格
    if (0 === (pos = string.indexOf('&nbsp;'))) {
        return replaceStartNbsp(string.substr(6));
    } else {
        return string;
    }
}

Process.prototype.modifyClassNaming = function () {
    const _this = this;
    naming.forEach(i => {
        _this.selector.find(`.${i.resource}`).removeClass(i.resource).addClass(i.target)
    })
}

Process.prototype.modifyImgAlt = function () {
    const elList = this.selector.find('img');
    for (let el of elList) {
        el.alt = this.name;
        this.imgList.push(el);
    }
}


export default Process

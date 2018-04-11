import $ from "jquery";
import {naming} from './classReplaceNaming'
import {indexLevel} from './indexLevel'
//TODO 自动上传图片的功能未实现
/**
 *
 * @param text
 * @param name
 * @param preUrl
 * @constructor
 */
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
};

Process.prototype.modifyImgAlt = function () {
    const elList = this.selector.find('img');
    for (let el of elList) {
        el.alt = this.name;
        this.imgList.push(el);
    }
};

Process.prototype.updateImg = function () {
    //TODO
}

Process.prototype.generateIndex = function () {
    const tree = generateIndexMapTag(this.selector), indexObj = {}, indexList = [];
    generateIndex(this.selector, indexObj, tree, 0);
    mapToList(this.selector, indexObj, indexList);
    return indexList;
}

/**
 * 将对象映射成列表
 * @param obj
 * @param list
 */
function mapToList(selector, obj, list) {
    for(let i in obj){
        const item = {id:i, name: selector.find(`#${i}`).text().replace(/^\s+|\s+$/g, '')}, child = obj[i]
        if(child){
            item.children = [];
            mapToList(selector, child, item.children)
        }
        list.push(item)
    }
}

/**
 * 生成标记
 * @param selector
 */
function generateIndexMapTag(selector) {
    const tree = {};
    for (let tag of indexLevel) {
        const elList = selector.find(tag), list = tree[tag] = [];
        let count = 0;
        for (let el of elList) {
            const id = `${tag}-${++count}`;
            list.push(id);
            el.id = id;
        }
    }
    return tree;
}

/**
 * 迭代生成索引
 * @param rootSelector
 * @param indexObj
 * @param tree
 * @param levelIndex
 * @returns {*}
 */
function generateIndex(rootSelector, indexObj, tree, levelIndex) {
    let tagName, tagIdList;

    if ({tagName, tagIdList} = checkTagExistsAndGetValue(tree, levelIndex)) {
        const childLeaf = generateIndex(rootSelector, indexObj, tree, levelIndex + 1);
        //处理自身的上下级关系
        const curLeaf = {};
        for (let id of tagIdList) {
            const selector = rootSelector.find('#' + id),
                parentId = prev(selector, levelIndex);
            if (parentId) {
                !curLeaf[parentId] && (curLeaf[parentId] = {});
                curLeaf[parentId][id] = childLeaf[id];
            } else {
                indexObj[id] = childLeaf[id];
            }
        }
        return curLeaf;
    } else {
        return false;
    }
}

/**
 * 检查value父ID是否存在
 * @param tree
 * @param index
 * @returns {boolean}
 */
function checkTagExistsAndGetValue(tree, index) {
    let ret = false;
    if (index < indexLevel.length) {
        const tagName = indexLevel[index];
        const tagIdList = tree[tagName];
        ret = {tagName, tagIdList};
    }
    return ret;
}

/**
 * 检查索引的前序节点是否存在
 * @param selector
 * @param index
 * @returns {*}
 */
function prev(selector, index) {
    const tagName = 0 !== index && indexLevel[index - 1];
    if (tagName) {
        const preSelector = selector.prev();
        if (!preSelector.get(0)) {
            return prev(selector, index - 1);
        }
        if (tagName === preSelector.get(0).tagName.toLowerCase()) {
            return preSelector.attr('id');
        } else {
            return prev(preSelector, index)
        }
    } else {
        return false;
    }
}

export default Process

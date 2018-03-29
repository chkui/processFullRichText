import React from 'react'
import TextEdit from './textEdit'

const cn = require('classnames/bind').bind(require('./textArea.scss'))

/**
 * 纯文本组件
 * @param {object} props {
 *      time:发布时间
 *      categoryCode:所属栏目名称
 *      categoryName:所属栏目编码名称
 *      title:标题
 *      des:摘要描述
 *      url:内容链接
 * }
 * @returns {*}
 * @constructor
 */
const Text = props =>
    <article className={cn('text')}>
        <TextEdit />
        <button className={cn('btn')}>执行处理</button>
    </article>

export default Text
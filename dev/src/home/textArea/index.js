import React from 'react'
import TextEdit from './textEdit'
import ProcessInfo from './processInfo'
import {htmlProcess} from './htmlProcess'
import Result from './result'
import html from './text.html'

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
class Text extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {processInfo: '', showResult: false, html: html};
        this.handleShowClose = this.handleShowClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleProcessResult = this.handleProcessResult.bind(this);
        this.handleProcessInfo = this.handleProcessInfo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleShowClose(){
        this.setState({
            showResult: false
        })
    }

    handleClick() {
        htmlProcess(this.state.html, this.handleProcessInfo, this.handleProcessResult);
    }

    handleProcessInfo(text) {
        /*this.setState((preState, props) => {
            this.setState({
                processInfo: preState.processInfo + text
            })
        })*/
    }

    handleChange(event) {
        this.setState({
            html: event.target.value
        })
    }

    handleProcessResult(html) {
        this.setState({
            html:html,
            showResult:true
        })
    }

    render() {
        const state = this.state;
        return (
            <article className={cn('text')}>
                <ProcessInfo value={state.processInfo}/>
                <div className={cn('edit-box')}>
                    <TextEdit onChange={this.handleChange} value={state.html}/>
                    <button onClick={this.handleClick} className={cn('btn')}>执行处理</button>
                    <Result show={state.showResult} html={state.html} onClose={this.handleShowClose}/>
                </div>
            </article>
        )
    }
}

export default Text
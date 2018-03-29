import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/fontawesome-free-solid'

const cn = require('classnames/bind').bind(require('./footer.scss'))

const Footer = props =>
    <div className={cn('footer-wrapper')}>
        <footer className={cn('footer')}>
            <Item>© 2018 - 随风溜达的向日葵</Item>
            <Item className={cn('mail')}>
                <a className={cn('mail-link')} href="mailto:chenkui@chkui.com?subject=邮件标题&body=输入邮件内容">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>
            </Item>
            <Item>
                <a className={cn('link')} to="http://www.miitbeian.gov.cn">粤ICP备15086789号-2</a>
            </Item>
        </footer>
    </div>

const Item = props =>
    <span className={cn(props.className, 'item')}>{props.children}</span>

module.exports = Footer
module.exports.default = module.exports
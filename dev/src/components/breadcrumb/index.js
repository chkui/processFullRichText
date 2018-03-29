import React from 'react'
const cn = require('classnames/bind').bind(require('./breadcrumb.scss'))

const Breadcrumb = props =>
    <div className={cn('wrapper')}>
        <div className={cn('breadcrumb')}>
            <h2 className={cn('title')}>React新特性——Protals与Error Boundaries</h2>
            <div className={cn('ul-box')}>
                <ul className={cn('ul')}>
                    <li className={cn('li')}><a>home</a></li>
                    <li className={cn('li')}>/</li>
                    <li className={cn('li')}><a>article</a></li>
                </ul>
            </div>
        </div>
    </div>

export default Breadcrumb
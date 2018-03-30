import React from 'react'
const cn = require('classnames/bind').bind(require('./processInfo.scss'))

const textEdit = props =>
    <textarea className={cn('processInfo')} readOnly placeholder="Process Info......"/>

export default textEdit
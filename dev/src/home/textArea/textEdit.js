import React from 'react'
const cn = require('classnames/bind').bind(require('./textEdit.scss'))

const textEdit = props =>
    <textarea className={cn('textEdit')} placeholder="Copy Your Code Hear......"/>

export default textEdit
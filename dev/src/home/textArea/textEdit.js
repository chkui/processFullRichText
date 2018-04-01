import React from 'react'
const cn = require('classnames/bind').bind(require('./textEdit.scss'))

const TextEdit = props =>
    (<textarea className={cn('textEdit')}
               placeholder="Paste Your Code Hear......"
               onChange={props.onChange}
               value={props.value}
    />)
export default TextEdit
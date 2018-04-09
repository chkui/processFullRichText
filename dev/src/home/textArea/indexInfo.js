import React from 'react'

const cn = require('classnames/bind').bind(require('./indexInfo.scss'))

const IndexInfo = props =>
    <div className={cn('index-info')}>
        <p className={cn('info')}>{list(props.list)}</p>
    </div>

const list = list => {
    const str = list.map(i => `${obj(i)}`);
    return `[${str}]`
}

const obj = obj => {
    let str;
    if (obj.children) {
        str = `{id:'${obj.id}',children:${list(obj.children)}}`;
    } else {
        str = `{id:'${obj.id}'}`;
    }
    return str;
}

export default IndexInfo
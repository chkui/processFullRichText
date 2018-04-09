import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/fontawesome-free-solid'
const cn = require('classnames/bind').bind(require('./result.scss'))
import '../../../../style.css'

const Result = props =>
    <div className={cn('result', !props.show && 'hide')}>
        <div className={cn('title')}>
            <span className={cn('close')} onClick={props.onClose}>
                <FontAwesomeIcon icon={faTimes}/>
            </span>
        </div>
        <div className={cn('contain')}>
            <div className="chk-content-body">
                <div className="index-menu">

                </div>
                <div className="chk-content-inner" dangerouslySetInnerHTML={{__html:props.html}} />
            </div>
        </div>
    </div>

export default Result
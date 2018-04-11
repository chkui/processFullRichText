import React from 'react'
import Page from '../components/page'
import Text from './textArea/index'
const cn = require('classnames/bind').bind(require('./home.scss'))

const Home = props =>
    <Page>
        <div className={cn('home')}>
            <Text/>
        </div>
    </Page>

module.exports = Home
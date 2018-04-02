import React from 'react'
const cn = require('classnames/bind').bind(require('./processInfo.scss'))

class textEdit extends React.Component{
    constructor(...props){
        super(...props)
        this.list = []
    }

    add(text){
        this.list.push(text)
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(prevProps);
    }

    render(){
        return(
            <div className={cn('processInfo')}>
               <ul className={cn('ul')}>
                   {this.list.map((i, p)=><Item key={p} name={i}/>)}
               </ul>
            </div>)
    }
}

const Item = props =>
    <li>{props.name}</li>
export default textEdit
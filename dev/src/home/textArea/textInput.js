import React from 'react'
const cn = require('classnames/bind').bind(require('./textInput.scss'))

class TextInput extends React.Component{
    constructor(...props){
        super(...props);
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
    }

    getValue(){
        return this.state.value;
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }

    render(){
        return(
            <div className={cn('text-input')}>
                <input className={cn('input')} type="text" onChange={this.handleChange} value={this.state.value} placeholder={this.props.placeholder}/>
            </div>);
    }
}

export default TextInput
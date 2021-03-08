import React,{Component} from 'react'

class Toggler extends Component {
    state = {
        on : this.props.defaultValueOption
    }
    
    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }
    
    
    render(){
        const Component = this.props.comp
        return (
            <Component on = {this.state.on} toggle={this.toggle} {...this.props}/>
        )
    }
}

export function withToggler(component,defaultValueObject){
    return function(props){
        return(
            <Toggler comp={component} defaultValueOption = {defaultValueObject.value} {...props}/>
        )
    }
}
import React, { Component } from 'react';

class BindingForm extends Component {
    constructor(props) {
        super(props)
        this.state={ hasError: false}
        this.state = {

        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    render() {
        return ( 
            <div>
                <header><span className="title">Binding Form</span></header>
                <form onSubmit={(event)=>{
                    event.preventDefault()
                    this.props.onSubmit(this.state)}}>
                    {React.Children.map(this.props.children, (child) => {
                        if(child.type === 'input') {
                            return React.cloneElement(child, {onChange: this.handleChange, ...child.props})
                        }
                        return child;
                    })}
                </form>
            </div>
        );
    }
}

export default BindingForm;
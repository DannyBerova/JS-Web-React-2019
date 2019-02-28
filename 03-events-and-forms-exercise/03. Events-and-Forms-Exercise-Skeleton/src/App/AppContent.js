import React, {Component} from 'react';
import DynamicForm from "../DynamicForm/DynamicForm";
import NestedGrid from "../Games/NestedGrid";
import Snackbar from "./SnackbarForm";

const divStyle = {
    marginTop: '70px'
};

class AppContent extends Component {

    render() {
        //alternative info message block
        // let snacky = this.props.message ? (<h4 
        // background='red'
        // message={this.props.message}
        // refreshMessage={this.refreshMessage}
        // > {this.props.message}</h4>) : null

        let snacky2 = this.props.message ? ( <Snackbar 
            autoHideDuration={3000}
            message={this.props.message}
            refreshMessage={this.refreshMessage}
            />) : null
        return (
            <div style={divStyle}>
                
                {snacky2}
                {/* <hr color="rgb(165, 165, 165)"></hr>
                    {snacky}
                <hr color="rgb(165, 165, 165)"></hr> */}
                <DynamicForm
                    registerUser={this.props.registerUser}
                    loginUser={this.props.loginUser}
                    loginForm={this.props.loginForm}
                    regForm={this.props.regForm}
                    user={this.props.user}
                    createGame={this.props.createGame}
                    refreshMessage={this.props.refreshMessage}
                    />
                <NestedGrid games={this.props.games}/>
            </div>
        )
    }
}

export default AppContent;
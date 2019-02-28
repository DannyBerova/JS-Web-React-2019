import React from "react";
import RegisterForm from "./RegisterForm";
import LogInForm from "./LoginForm";
import CreateForm from "../Games/CreateForm";

class DynamicForm extends React.Component {

    render() {
        return (
            <div>
                <div>
                    {/*TODO: render a form depending on wheather the loginForm property is true*/
                    this.props.user !== null ? (
                        (<CreateForm createGame={this.props.createGame}
                            refreshMessage={this.props.refreshMessage}/>)

                        ) : (
                        this.props.loginForm ? 
                        (<LogInForm loginUser={this.props.loginUser}/>) :
                        (<RegisterForm registerUser={this.props.registerUser}/>)
                        )
                    }
                </div>
            </div>
        )
    }
}

export default DynamicForm
import React from 'react';
class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            description: null,
            imageUrl: null,
            new: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.createGameHere = this.createGameHere.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createGameHere(event) {
        // TODO: prevent the default behaviour of the click event, call the createGame function and pass it the data from the form
        event.preventDefault();
        if((this.state.title && this.state.title.trim().length > 2) &&
            (this.state.description && this.state.description.trim().length > 2) &&
            (this.state.imageUrl && this.state.imageUrl.trim().startsWith('http'))) {
                this.props.createGame(this.state);
                event.target.title.value = '';
                event.target.description.value = '';
                event.target.imageUrl.value = '';
                this.setState({
                    title: null,
                    description: null,
                    imageUrl: null,
                    new: true
                })
            } else {
                this.props.refreshMessage('Title and description must be at least 3 symbols! ImageUrl must be valid URL!');
                //event.preventDefault();
                console.log('not valid data input')
            }
    }

   
    render() {
        return (
            <div className="create-form">
                <h1>Create game</h1>
            <form onSubmit={this.createGameHere}>
                <label>Title</label>
                <input type="text" onChange={this.handleChange} name="title" id="title"/>
                <label>Description</label>
                <textarea type="text" onChange={this.handleChange} name="description" id="description"/>
                <label>ImageUrl</label>
                <input type="url" onChange={this.handleChange} name="imageUrl" id="imageUrl"/>
                <input type="submit" value="Create"/>
            </form>
            </div>
        )
    }
}

export default CreateForm;

// const CreateForm = (props) => {
//     let state={ 
//         title: null,
//         description: null,
//         imageUrl: null
//     }

//     function handleChange(event) {
//         let name = event.target.name;
//         let value = event.target.value;
//         state[name] = value;
//         console.log(state)

//     } 

//     return (
//         <div className="create-form">
//             <h1>Create game</h1>
//             <form onSubmit={(event) => {
//                 // TODO: prevent the default behaviour of the click event, call the createGame function and pass it the data from the form
//                 event.preventDefault();
//                 props.createGame(state);
//                 state.title = null;
//                 state.description = null;
//                 state.imageUrl = null;

//             }}>
//                 <label>Title</label>
//                 <input type="text" onChange={handleChange} name="title" id="title"/>
//                 <label>Description</label>
//                 <textarea type="text" onChange={handleChange} name="description" id="description"/>
//                 <label>ImageUrl</label>
//                 <input type="text" onChange={handleChange} name="imageUrl" id="imageUrl"/>
//                 <input type="submit" value="Create"/>
//             </form>
//         </div>
//     )
// };

// export default CreateForm;


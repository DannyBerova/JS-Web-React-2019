import React, {Component } from 'react';

class Article extends Component {
   constructor(props) {
    super(props);
    this.state={ hasError: false}

        this.handleClickFunc = this.handleClickFunc.bind(this);
    }

    handleClickFunc() {
        this.setState(({hasError}) => ({
            hasError: true
          }));
    }
    render() {
        if (this.state.hasError) {
            // Simulate a JS error
            throw new Error('I crashed!');
          }
        return ( 
        <article>
            <header>
                <span className = "title" > Article Title </span>
            </header>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet magni labore voluptatibus.Vel sunt voluptate fugiat et ducimus voluptates doloremque, eum illo exercitationem dignissimos sequi cum, id molestiae debitis atque. </p> 
            <button style={{background: "yellow"}} onClick={this.handleClickFunc}>Test error</button>
        </article>
        );
    }
}

export default Article;
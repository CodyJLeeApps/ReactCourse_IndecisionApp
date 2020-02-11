import React from 'react';

export default class AddOptions extends React.Component {
    
    state = {
        error: undefined
    };
    
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }

    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({error: error}));

        if(!error) {
            e.target.elements.option.value = '';
        }
    };
}
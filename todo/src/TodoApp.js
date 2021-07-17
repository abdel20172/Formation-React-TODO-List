
import React,{Component} from 'react';

export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[
                {text:"Item #1",done:false,key:new Date().getMilliseconds() + " " + "Item #1"},
                {text:"Item #2",done:false,key:new Date().getMilliseconds() + " " + "Item #2"},
                {text:"Item #3",done:false,key:new Date().getMilliseconds() + " " + "Item #3"},
                {text:"Item #4",done:false,key:new Date().getMilliseconds() + " " + "Item #4"}
            ],
            input:""
        };
    }
    // les evenements
    move = (key) => {
        let filtred = this.state.items.map(item => {
            if(item.key == key){
                item.done = !item.done;
            }
            return item;
            
        });
        this.setState({items : filtred});
    };

    add = () => {
        console.log(this.state.input);
    };

    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({input: e.target.value});
    };
    render(){
        return(
        <div className="container">
            <br/>
            <div className="row">
                <div className="col-md-6">
                    List Undone
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.add()}} >
                        <input placeholder="add todo" value={this.state.input} onChange={(e) => this.handleChange(e)}/>
                    </form>
                    <ul>
                        {this.state.items.map(item => {
                            if (!item.done) {
                                return <li key={item.key} onClick={() => this.move(item.key)}>{item.text}</li>
                            }
                        })}
                    </ul>
                </div>
                <div className="col-md-6">
                    List Done
                    <ul>
                        {this.state.items.map(item => {
                            if (item.done) {
                                return <li key={item.key} onClick={() => this.move(item.key)}>{item.text}</li>
                            }
                        })}
                    </ul>
                        
                </div>
            </div>
        </div>);
    }
}
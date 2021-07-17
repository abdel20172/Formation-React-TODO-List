
import React,{Component} from 'react';
import './Todo.css';

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
        let newItem = {text:this.state.input,done:false,key:new Date().getMilliseconds() + " " + this.state.input};
         this.setState((state) => ({
            //  items : state.items.concat(newItem)
             //et si on veut inverser la syntaxe est la suivante
             items: [newItem].concat(this.state.items)
         }));

        // console.log("ligne 36 "+ this.state.items)
        // this.state.items.unshift(newItem);
        // console.log("ligne 38 "+ this.state.items)
    };

    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({input: e.target.value});
    };

    getUndone = () => {
        let undone = this.state.items.filter(item => {
            return !item.done;
        });
        if(!undone.length)
            return;
        
        return undone.length;
    };
    render(){
        return(
        <div className="container">
            <br/>
            <div className="row">
                <div className="col-md-6">
                    <div className="todolist">
                    List Undone
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.add()}} >
                        <input placeholder="add todo" 
                        className="form-control form-control-lg"
                        value={this.state.input} onChange={(e) => this.handleChange(e)}/>
                    </form>
                    <ul>
                        {this.state.items.map(item => {
                            if (!item.done) {
                                return <li key={item.key} onClick={() => this.move(item.key)}>{item.text}</li>
                            }
                        })}
                    </ul>
                    <div className="todo-footer">
                        <span>{this.getUndone()}</span> Items Left
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="todolist">
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
            </div>
        </div>);
    }
}
import React, { Component } from 'react';
import reactDom from 'react-dom';
import "./style.scss";
import 'bootstrap/dist/css/bootstrap.css';


class JudgesMain extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentNumber: 0,
        };
    }

    increment(){
        if(this.state.currentNumber !== 10){
            this.setState((prevState) => ({
                currentNumber: prevState.currentNumber + 1,
            }));
        }
    }

    decrement(){
        if(this.state.currentNumber !== 0)
        {
            this.setState((prevState) => ({
                currentNumber: prevState.currentNumber - 1,
            }));
        }
    }

    render() {
        const { match } = this.props;
        debugger;
        return (
            <div className="main">
                <div className="container">
                    <h1>Hello World!!</h1>

                    <div className="tabs">
                        <button className="btn btn-tabs">Production</button>
                        <button className="btn btn-tabs">First Round Interview</button>
                        <button className="btn btn-tabs">Talent</button>
                        <button className="btn btn-tabs">Gown</button>
                        <button className="btn btn-tabs">TOP 3</button>
                    </div>

                    <div className="col-md-12 padding-zero">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="profile-pic"></div>
                            </div>
                            <div className="col-md-6 margin-top-30">
                                <div className="can-info">
                                    <div className="can-no">1</div>
                                    <div className="can-name text-uppercase">Aling Dyonisya Santisima</div>
                                    <div className="can-faction text-uppercase">Faction 1</div>

                                    <div className="score-holder col-md-12">
                                        <div className="row">
                                            <div className="col-md-9 padding-zero">
                                                <input type="text" placeholder="SCORE" className="form-control score" value={this.state.currentNumber}/>
                                            </div>
                                            <div className="col-md-3 padding-left-15">
                                                <button className="btn-increment" onClick={() => this.increment()}>+</button>
                                                <button className="btn-decrement" onClick={() => this.decrement()}>-</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-cancel">Cancel</button>
                                    <button type="button" className="btn btn-save">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JudgesMain;
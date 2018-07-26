import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../actions';


class Questions extends Component {
     componentDidMount = props => {
        const questionId = this.props.match.params.id
        this.props.getQuestions(questionId)
    } 
  

    render(){
        let questions = this.props.storedQuestions.map((q, i)=> {
        return( <h1> 
            {q[i].question}<br />
            {q[i].correct_answer}
            </h1> )
        })
        let incorrect = this.props.storedQuestions.map((ic, i)=> {
            return( <h1> 
                {ic[i].incorrect_answers}<br/>
                
                </h1> )
            })
     

    return (
        <div>
             
             <h1>Questions page!!</h1><br />
            {questions}<br/>
            {incorrect}
            
            {console.log("ques", this.props.questions)}
            {console.log("stored questions",this.props.storedQuestions)}
        </div>
    )
    }
}

function mapStateToProps(state) {
    return { 
        storedQuestions: state.round.storedQuestions,
        erorrMessage: state.auth.erorrMessage 
    };
  }
  
  export default connect(mapStateToProps, { getQuestions })(Questions);
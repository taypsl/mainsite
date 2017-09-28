import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ChatBubble from './ChatBubble.jsx';

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: 'instant' });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    return (
      <div className="grey-C chatbox-F">
        {// map to iterate over the newState Array and apply function for each element
        this.props.chatlog.map((value, key) => {
          console.log(value);
          return (
            <ChatBubble
              {...value} // spread operator
              key={key}
              sessionId={this.props.sessionId}
              /* onClick={e =>
                this.props.onClick.bind(
                  this,
                  e,
                  value
                )()}*/
              /* this is basically replacing the function (event) => {} with (event, value){}; value here is an element in the defaultState array*/
            />
          );
        })}
        <div
          style={{ float: 'left', clear: 'both', margin: '0px 10px' }}
          ref={(el) => {
            this.messagesEnd = el;
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chatlog: state.chat.log,
});

/*
const mapDispatchToProps = dispatch => {
  return {
	  //controls buttons onclick function in bot response
    onClick (event, data) {
      if (data.type === 'button'){

      console.log("SESSIONID: ", this.props.sessionId);
      axios.post('/message', {payload:data, id:this.props.sessionId}) //redux way of saying once we send a POST request to server, then if we receive a response(Promise) from server
      .then((response) => {
        console.log('Response:', response);
		// response = JSON.parse(response);


        if (response.status === 200) {
			//axios.response.data, get speech from api.ai
			const msg = response.data.result.fulfillment.speech;

		  dispatch({
			type: 'CHAT_ADD_MESSAGE',
			payload: {
			  message: msg,
			  type: 'text',
			  isBot: true,
			}
		  });
		  //if there's a custom payload attached to api.ai response
		  let customPayload;
		  if (!response.data.result.fulfillment.data){
			  let messages = response.data.result.fulfillment.messages;
			  console.log("Messages:", messages);
			  if (messages.length>1 && messages[1].type==4){
				 //buttons in payload
				 if (messages[1].payload.buttons){
					//get custom payload from api.ai
					// console.log("buttons:", response.data.messages[1].payload.buttons);
					customPayload = messages[1].payload.buttons;
					customPayload.forEach(btn=>{
						dispatch({
						type: 'CHAT_ADD_MESSAGE',
						payload: {
						  message: btn,
						  type: 'button',
						  isBot: true,
						}
						});
					});
				}
				//if image in payload
				if (messages[1].payload.image){
					customPayload = messages[1].payload.image;
					dispatch({
						type: 'CHAT_ADD_MESSAGE',
						payload: {
						  message: customPayload,
						  type: 'image',
						  isBot: true,
						}
					});
				}
				//if map in payload
				if (messages[1].payload.map){
					customPayload = messages[1].payload.map;
					dispatch({
						type: 'CHAT_ADD_MESSAGE',
						payload: {
						  message: customPayload,
						  type: 'map',
						  isBot: true,
						}
					});
				}


			}

		 }else{
		    let data = response.data.result.fulfillment.data;
		    if (data.buttons){
				customPayload= data.buttons;
				customPayload.forEach(btn=>{
						dispatch({
						type: 'CHAT_ADD_MESSAGE',
						payload: {
						  message: btn,
						  type: 'button',
						  isBot: true,
						}
						});
					});
			}
			if (data.image){
				customPayload =data.image;
				dispatch({
						type: 'CHAT_ADD_MESSAGE',
						payload: {
						  message: customPayload,
						  type: 'image',
						  isBot: true,
						}
				});

			}
			if (data.map){
				customPayload=data.map;
				dispatch({
						type: 'CHAT_ADD_MESSAGE',
						payload: {
						  message: customPayload,
						  type: 'map',
						  isBot: true,
						}
				});

			}


		 }

        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
	}else{
		return;
	}
	}
  };
};
*/

// export default connect(mapStateToProps, mapDispatchToProps)(Chatbox);

export default connect(mapStateToProps)(Chatbox);

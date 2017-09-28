import React, { Component } from 'react';
import Squarebox from '../../template/square-box';
import Bannerbox from '../../template/banner-box';
import Infobox from '../../template/info-box';

export default class Guardianship extends Component {
	constructor(){
    super(); 
    this.state={
      topics:[]
    }
  }

  // static defaultProps() {
  //   return {
  //     limit: 4
  //   }
  // }
 
  componentDidMount() {
    return fetch('https://case-data.glitch.me/courtdata')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({topics: responseJson});
      // console.log(this.state.topics)
    })
    .catch((error) => {
      console.error(error);
    });
  }

	render() {
		//guardianship id = '1'
		var faqTitle = []
    var self = this;
    // const topicArray = [];
    const guardianshipFAQs = this.state.topics
   	.filter(function(topic) {
   		return topic.id === '1'
   	})
   	.map(function(list) {
   		const faqList = list.faqs;
      
      // console.log(faqList)
      for (const key of Object.keys(faqList)) {
          // console.log(faqList[key].title);
          faqTitle.push(faqList[key].title)
      }
      return (faqTitle)
   	})
    // .map(function(faqTitleAry) {
    //    <div>{title}</div>
    // }) 
    const renderFaqTitles = faqTitle
    .filter(function(title, index){
      // console.log(self)
      // console.log(self.props.limit)
      if(self.props.limit) {
        return (index < self.props.limit)
      }
      return true
    })
    .map((title) =>
      <div className='topic-title'>{title}</div>
    );


		return (
			<div className='Topic'>
		      <h1>Guardianship</h1>
		      <Bannerbox boxTitle='Reasons to Choose a Guardianship'
		           boxContent='Learn about guardianship situations, who may be a legal guardian, what is required of a legal guardian, and more.'
		           buttonText='FAQs'
               buttonLink='faqs/guardianship'
		      />
		      <div className='grid grid-pad'>
		        <Squarebox 
		        	boxTitle='Potential Guardian'
	            iconClass='fa fa-home' /> 
		        <Squarebox 
		        	boxTitle='Parent'
	            iconClass='fa fa-user' />
	           <Squarebox 
		        	boxTitle='Child'
	            iconClass='fa fa-child' />  
		      </div>
		      <Infobox 
		      	boxTitle='FAQs'
	          boxContent={renderFaqTitles}
	          buttonText='View More'
            buttonLink='faqs/guardianship' />
		    </div>
		)
	}
}

Guardianship.propTypes = { limit: React.PropTypes.number };
Guardianship.defaultProps = { limit: 4 };

/* 
   		console.log(JSON.stringify(list.faqs, null, 4));

    .map(function(faqs) {
      return (
        <div>{faqs.title}</div>
      )
    })

*/
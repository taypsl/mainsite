import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MyCaseData extends Component {
  componentWillMount() {
    // Fetch user data prior to component mounting
  }

  render() {
    return (
      <div>
      	<div className='Box Case-data-box col-2-3 '>
      		<div className='Portal-box-content Grey-background'>
	      		<h3 className='Case-data-title'>Small Claims Case - A8271HKS2</h3>
	      		<hr />	      		
	      		<div className='Box-row'>
	      			<div className='Parties'>
	      				<p>Plaintiff(s)</p>
	      				<p className='p2'>Monica Geller Bing,</p>
	      				<p> Chandler Bing</p>
	      			</div>
	      			<div className='Parties'>
	      				<p>Defendant(s)</p>
	      				<p className='p2'>Ross Geller,</p>
	      				<p> Rachel Greene Geller</p>
	      			</div>
	      		</div>
	      		<br />
	      		<div className='Actions'>
	      			<h3>Court Updates</h3>
      				<hr />
	      			<div className='Box-row'>
	      				<p className='Date'>6/24/2017</p>
	      				<p className='Update p2'>Proof of service on claim of plaintiff filed.</p>
	      				<hr />
	      			</div>
	      			<div className='Box-row'>
	      				<p className='Date'>7/13/2017</p>
	      				<p className='Update p2'>Case entry data completed</p>
	      				<hr />
	      			</div>
	      			<div className='Box-row'>
	      				<p className='Date'>7/13/2017</p>
	      				<p className='Update p2'>Small claims trial set for 9/28/2017 at 13:00 in Dept. SCT</p>
	      				<hr />
	      			</div>
	      		</div>
      		</div>

       	</div>
      	
      </div>
    );
  }
}
 
// function mapStateToProps(state) {
// 	console.log(state.user)
//   return {
//     profile: state.user.profile,
//   };
// }

export default MyCaseData
// export default connect(mapStateToProps, { fetchUser })(ViewProfile);


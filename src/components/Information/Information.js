import React from 'react';
import {connect} from 'react-redux';


const Information = (props) =>{
	const {names,information,professions} = props;
	const info = {names,information,professions};
	return(
		<div className="infoWrapper">
			Information Wrapper
			<button onClick={e => console.log(info)}>Console Log The Redux fetched props</button>
		</div>
	)
};


const mapStateToProps = state =>{
	return{
		names:state.Names.names,
		information:state.Information.information,
		professions:state.Professions.professions
	}	
}

export default connect(mapStateToProps)(Information);
import React from 'react';
import appcss from '../../App.scss';
import css from './CusCascader.scss';

class CusCascader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			info: "",

		}
	}


	render() {

		return <div>
			<p></p>
			<div>
				{this.props.options.lenght>0?this.props.options.map(item=>{
					return <div>
						
					</div>
				}):""}
			</div>
		</div>
	}

}
export default CusCascader;
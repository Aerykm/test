import React,{Component} from 'react';
import './signup.css';

class SignUp extends Component{
	constructor(props){
		super(props);
		this.state = {
			languages : [
				{name: "Megumin: Konosuba", votes: 0},
				{name: "Rem: Re-zero", votes: 0},
				{name: "Zero Two: Darling in the franxx", votes: 0},
				{name: "Mikasa: Attack on Titan", votes: 0}
			]
		}
	}

	vote (i) {
		let newLanguages = [...this.state.languages];
		newLanguages[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		this.setState({languages: newLanguages});
		
	}

	render(){
		return(
			<>
				<h1>Waifu of the week</h1>
				<div className="languages">
					{
						this.state.languages.map((lang, i) => 
							<div key={i} className="language">
								<div className="voteCount">
									{lang.votes}
								</div>
								<div className="languageName">
									{lang.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Vote</button>
							</div>
						)
					}
				</div>
			</>
		);
	}
}
export default SignUp;
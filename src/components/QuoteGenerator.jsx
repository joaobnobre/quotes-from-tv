import React from 'react';

class QuoteGenerator extends React.Component {

	constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

	componentDidMount() {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title: 'React POST Request Example' })
		};

		fetch('https://movie-quote-api.herokuapp.com/v1/quote', requestOptions)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}

	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Carregando.... </h1> </div>;

		return (
			<div>
				<h2>
					Frase: {items.quote}
				</h2>
				<h3>
					Autor: {items.role}
				</h3>
			</div>
		);
	}
}

export default QuoteGenerator;
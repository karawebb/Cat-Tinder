import React, { Component } from 'react'
import Header from './components/Header'
import Cats from './components/Cats'
import NewCat from './components/NewCat'
import { getCats } from './api'
import { createCat } from './api'
import { destroyCats } from './api'
import { editCats} from './api'
import './App.css'


class App extends Component {
    constructor(props){
		super(props)
		this.state = {
			cats: []
		}
	}

	componentWillMount() {
		getCats()
		.then(APIcats => {
			this.setState({
				cats: APIcats
			})
		})
	}


    handleNewCat = (newCatInfo) => {
        console.log(newCatInfo)
	createCat(newCatInfo)
    .then(successCat => {
        console.log("SUCCESS! New cat: ", successCat);
        const {cats} = this.state
        cats.push(successCat)
        this.setState({cats: cats})
    })
}

    handleEdit = (id, cat) => {
        editCats(id, cat)
        .then(successCat => {
            console.log("you edited the cat!", successCat);
            const {cats} = this.state
            this.setState({cats:cats})
        })

    }

    byeByeKitty = (id) => {
        destroyCats(id)
        .then(APIcats => {
			this.setState({
				cats: APIcats
			})
		})

    }


  render() {
    return (
		<div>
			<Header /> <br/>
			<Cats cats={this.state.cats} deleteCat={this.byeByeKitty} editCat = {this.handleEdit} />
			<NewCat submitNew= {this.handleNewCat}/>
		</div>
    );
  }
}

export default App;

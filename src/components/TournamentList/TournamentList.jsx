import React from 'react';
import TournamentItem from '../TournamentItem/Tournament-item.component.jsx'
import 'rsuite/dist/styles/rsuite-dark.css';

class TournamentList extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            isLoaded: false,
            error: null,
            tournamentsList: []
        }
    }

    componentDidMount() {
        fetch('https://api.pandascore.co/csgo/tournaments?page[size]=15&token=JA7Ng39D7acv1y9kU26iBrtVx_P72XlN8UZm67ICanRnauPvIDM')
        .then(res => res.json())
        .then (
            (data) => {
                this.state.tournamentsList.push(data)
                //Format Tournaments DATA
                // Push data to Array
                this.setState({
                    isLoaded: true,
                });
                console.log(this.state.tournamentsList);
            },
            //error handler
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }


    render() {
        const { error, isLoaded, tournamentsList  } = this.state

        if (error) {
            return (
                <div> 
                    Error: {error.message}
                </div>
            )
        } else if (!isLoaded) {
            return(
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <div>
                    <TournamentItem tournamentsList={tournamentsList}/>
                </div>

            )
        }
    }    
    
}

export default TournamentList 
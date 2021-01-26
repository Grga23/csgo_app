import React from 'react';
import { Panel, PanelGroup, Button } from 'rsuite';


import './Tournament-Item.styles.css';

// Parent component of this FormInput is SingIn component which has the handleChange defined, we are passing this to the form itself. 
// 
const TournamentItem  = ({ tournamentsList, ...otherProps }) => {
    
    return (
        <div className="tour-item">

            {tournamentsList[0].map(tournament => 
                <Panel header={tournament.league.name} collapsible bordered>
                    <p> Stage: {tournament.name}</p>
                    <p> Date: {tournament.begin_at}</p>
                    <p> TIER: {tournament.serie.tier}</p>
                    <p> Teams {tournament.teams.map(team => <p>{team.name}</p>)}</p>
                </Panel>)
            }          
        </div>
    );
}


export default TournamentItem;


/* OLD REFERENCE 

            <PanelGroup accordion bordered>
                <Panel header="Tournaments">
                   <p>{tournamentsList[0].map(tournament => 
                     // Tle renderi TournamentItem componento k jo bos enkrat naredu. pac poslji ji prope, ki jih rabi i caoo 
                     // TournamentItem pa naj bo smo prikaz enega Tournamenta
                      <div>
                         <p>ID: { tournament.id }  { tournament.league.name}</p>
                      </div>)}
                        </p>
                </Panel>
            </PanelGroup> 

*/ 
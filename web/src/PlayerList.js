import './App.css'

function PlayerList(props){
const players = props.players;
return(
    <div>
        {
            players.map(player => {
                return(
                <div>
                    <img width={75} src={player.HeadShotUrl} alt={`${player.FirstName} ${player.LastName} headshot`}></img>

                    <div>{`Name: ${player.FirstName} ${player.LastName}`}</div>

                    <div>{`Player Number: ${player.PlayerNumber}`}</div>

                    <div>{`Position: ${player.Position}`}</div>

                    <div>{`Height: ${Math.floor(player.Height/12)} ft. ${player.Height%12} in.`}</div>

                    <div>{`College: ${player.College}`}</div>
                </div>
                )
            } )
        }
    </div>
)

}

export default PlayerList
function Players() {
    const player = {
        HeadShotUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630173.png",
        FirstName : "JimBob",
        LastName : "James",
        PlayerNumber : 23,
        Position : "Point Guard",
        Height : 78,
        College : "Duke"

    }
    return (
        <div>
            <img width={75} src={player.HeadShotUrl} alt={`${player.FirstName} ${player.LastName} headshot`}></img>
            <div>{`Name: ${player.FirstName} ${player.LastName}`}</div>
            <div>{`Player Number: ${player.PlayerNumber}`}</div>
            <div>{`Position: ${player.Position}`}</div>
            <div>{`Height: ${Math.floor(player.Height/12)} ft. ${player.Height%12} in.`}</div>
            <div>{`College: ${player.College}`}</div>
        </div>
    )
}

export default Players
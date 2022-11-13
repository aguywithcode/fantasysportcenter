import fetch from 'node-fetch';
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);


const fetchTeams = async () => {
    try {
        //grab the teams
        const result = await fetch('https://api.sportsdata.io/v3/nba/scores/json/teams?key=fabdf203fca64e189c59ee79e632018b');
        const data = await result.json();
        //map to our data format
        const teams = data.map(team=>{
            return {
                "SportsDataTeamID": team.TeamID,
                "NbaDotComTeamID": team.NbaDotComTeamID,
                "Conference": team.Conference,
                "Division": team.Division,
                "Key": team.Key,
                //Map to wikipedial logo url
                "LogoUrl": team.WikipediaLogoUrl,
                "City": team.City,
                "Name": team.Name,
                "PrimaryColor": team.PrimaryColor,
                "SecondaryColor": team.SecondaryColor,
                "TertiaryColor": team.TertiaryColor,
                "QuaternaryColor": team.QuaternaryColor,

            }
        });
        return teams;

    }
    catch (error) {
        console.error(error)
    }
}

async function run() {
  try {
      var connection = await client.connect();
      var collection = connection.db("FSC-Dev").collection("Teams");
    // create an array of documents to insert
    const teams = await fetchTeams();
    const options = { ordered: true };
    const result = await collection.insertMany(teams, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}

run();
import React, { useEffect, useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card';
import axios from '../axios';

//We download a package called React Tinder Card from npm for this

function TinderCards() {
  
  /* WE need some state to keep track of which person's card is currently on screen */
  const [people,setPeople] = useState([]);

  useEffect(() => {
    async function fetchData(){
      //inside here we create a request -> as the baseURL is already set in axios.js, we pass /tinder/..
      const req = await axios.get('/tinder/card');  

      //now just set people to whatever data comes back from req
      setPeople(req.data);
    }

    fetchData();
  },[]);

  //**debugging as we could just see card, no data .. person.url -> person.imgUrl
  console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log("Removing : " + nameToDelete);
    //setLastDirection(direction);
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen !");
  }
  
  return (
    <div className='tinderCards'>
      <div className="tinderCards__cardContainer">
        {people.map(person => (
          /* For each person, render out a tinder card */
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir) => swiped(dir,person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}  
          >

          <div className="cardContent">
            <div className="card" style={{backgroundImage: `url(${person.imgUrl})`}}>
              <h3>{person.name}</h3> 
            </div>
          </div>

          </TinderCard>
        ))}  
      </div>
    </div>
  )
}

export default TinderCards

/*

key for each card is the name of person
preventSwipe - prevents swiping in up and down direction
onSwipe - fires up a function called swipe
onCardLeftScreen - when card leaves the screen, fire up a function called outOfFrame


**
Initially, cards data was hardcoded in the useState hook
Now, we build a backend and pull this data from backend
  1. We'll create a Node.js application and create an Express server
  2. This server of ours will be connected to MongoDB and grab all data that is currently hardcoded
  3. We'll store data in MongoDB database and pull it back to show it here in our app.

For this, we need a completely different folder for backend
Created tinder-backend folder and continue.
This is the actual folder we'll be uploading.

Initial state variable we used for designing :
  const [people,setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-700x467.jpg"
    },
    {
      name: 'Jeff Bezos',
      url: 'https://img.jakpost.net/c/2020/02/18/2020_02_18_86871_1581998411._large.jpg'
    }
  ])

After connecting with backend, 
  const [people,setPeople] = useState([]);

  Initially why app did not load as here we need to set .imgUrl
<div className="card" style={{backgroundImage: `url(${person.url})`}}>
*/
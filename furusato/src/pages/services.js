import React, { useReducer } from 'react';
import "../pages/services.css";

function Count() {
  const manga = [
    {
      name: "Kaiju no.8",
      image: "https://i.redd.it/knvstsd1hbi51.png"
    },
    {
      name: "ChainsawMan",
      image: "https://i.redd.it/bp59xcp3l7l51.png"
    },
    {
      name: "OnePunchMan: Monster Association Arc",
      image: "https://wallpapercave.com/wp/wp4380087.jpg"
    }
  ];

  const [state, dispatch] = useReducer(
    (state, action) => {
      if(action === "voteKaiju") {
        return { ...state, KaijuVotes: state.KaijuVotes + 1};
      } else if (action === "voteChainsawMan") {
        return { ...state, ChainsawManVotes: state.ChainsawManVotes + 1};
      } else if (action === "voteOnePunchMan") {
        return { ...state, OnePunchManVotes: state.OnePunchManVotes + 1};
      } else {
        return state;
      }
    },
    { KaijuVotes: 0, ChainsawManVotes: 0, OnePunchManVotes: 0 }
  );

    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <h2>Which manga adaptation are you most excited to see??</h2>
          <h4>Click on a hero below to vote!</h4>
          <br />
          {manga.map(item => (
          <div key={item.name} className="card mx-auto col-4">
            <img className="card-img-top" src={item.image} alt={item.name} />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">
                {item.name} has been voted for {state[item.name + "Votes"]} times!
              </p>
              <button className="btn btn-primary" onClick={() => dispatch("vote" + item.name)}>
                Vote
              </button>
            </div>
          </div>
        ))}
        </div>
        <div className="label">Kaiju no.8: 0.00%</div>
        <div className="label">ChainsawMan: 0.00%</div>
        <div className="label">One Punch Man(Monster Association Arc): 0.00%</div>

      </div>
    );
  }


export default Count;



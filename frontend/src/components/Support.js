import React from 'react';
import BackgroundImage from '../images/halloween.jpg';
import { makeStyles } from '@material-ui/core/styles';
/*const useStyles = makeStyles((theme) => ({
    root: {
    //   backgroundImage: `url(${BackgroundImage})`,
      background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),' + `url(${BackgroundImage})`,
    //   height: '72vh',
      textAlign: 'center',
      padding: '450px 0',
    },
  }));
  
*/
export default function Support() {
    //const classes = useStyles();

    //function test(res) {
      //  console.log(res);
    //}

    return (
        <div className="App">
       
       <p style={{
        'white-space': 'pre-wrap'
      }}>{"\n"}</p>
    <p style={{
        'white-space': 'pre-wrap'
      }}>{"\n"}</p>
        Q&A:
       
        
        <p style={{
        'white-space': 'pre-wrap'
      }}>{" Q1- Who can join ConnectBU? \n Answer: Any one with a valid BU email can join ConnectBU."}</p>
        <p style={{
        'white-space': 'pre-wrap'
      }}>{" Q2- How can I join ConnectBU? \n Answer: Use your BU email to sign up through the Home Page."}</p>

       <p style={{
        'white-space': 'pre-wrap'
      }}>{" Q3- How much will it cost me to join ConnectBU? \n Answer: BU students are allowed to join the ConnectBU website for free."}
      color:red</p>
      
      <p style={{
        'white-space': 'pre-wrap'
      }}>{" For any more questions, feel free to contact us through: "}</p>
       <h1 style={{ color: 'red' }}>connectbu2021@gmail.com</h1>

        </div>

    )
}
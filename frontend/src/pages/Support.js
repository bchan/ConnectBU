import React from 'react';
import { useStyles } from '../styles/Support.styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function Support() {
  const classes = useStyles();
  const questionAnswers = [
    {
      question: 'Who can join ConnectBU?',
      answer: 'Anyone with a valid BU email can join ConnectBU.',
    },
    {
      question: 'How can I join ConnectBU?',
      answer: 'Use your BU email to sign up through the Home Page.',
    },
    {
      question: 'How much will it cost me to join ConnectBU?',
      answer: 'BU students are allowed to join the ConnectBU website for free.',
    },
    {
      question: 'Would ConnectBU require a student to upload a transcript to join?',
      answer: 'ConnectBU would not require any inforamtion to sign up other than a valid BU email.',
    },
    {
      question: 'Can international stusents sign up as well?',
      answer: 'Any one can sign up as long as you use a valid BU email.',
    },
    {
      question: 'How can I build my profile on ConnectBU if I am a freshman and do not have so many things to put in my profile?',
      answer: 'No need to worry, you can update your profile whenever you want over and over. ',
    }
  ]
  

  return (
    <div className={classes.container}>
      <Container maxWidth="xl">
        <Typography className={classes.header}>
          Frequently Asked Questions (FAQ)
        </Typography>
        <br />

        {
          questionAnswers.map((element) => {
            return (
              <Paper variant="outlined" className={classes.qaElement}>
                <Typography>
                  <b>{"Q: "}</b>
                  {element.question}
                </Typography>
                <Typography>
                  <b>{"A: "}</b>
                  {element.answer}
                </Typography>
              </Paper>
            )
          })
        }

        <p style={{
          'white-space': 'pre-wrap'
        }}>{"For any more questions, feel free to contact us through: "}</p>
          <h1 style={{ color: 'red', wordWrap: 'break-word'}}>connectbu2021@gmail.com</h1>

      </Container>
    </div>
  )
}

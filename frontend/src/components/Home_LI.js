import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export default function Home_LI() {
    
  const classes = useStyles();
  return(
  <div className='HPLI'>
    <br /><br /><br /><br /><br /><br /><br />
    <div>
            <h1>
        Classes that Might Interest you!
    </h1>
    </div>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    }}>

        <List className={classes.root} subheader={<li />}>
        {[447, 503, 307, 444, 500].map((sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
                <ListSubheader>{`EC ${sectionId}`}</ListSubheader>
                {['Hussain', 'Damani', 'Ben'].map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={`${item}`} />
                </ListItem>
                ))}
            </ul>
            </li>
        ))}
        </List>
    </div>
    <br /><br />
    <div>
    <h2>
        Clubs that Might Interest you!
    </h2>
    </div>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    }}>
        <List className={classes.root} subheader={<li />}>
        {['Bee Keeping', 'Feminist Collective', 'Fighting Against Multiple Sclerosis'].map((sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
                <ListSubheader>{`${sectionId}`}</ListSubheader>
                {['Hussain', 'Damani', 'Ben'].map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={`${item}`} />
                </ListItem>
                ))}
            </ul>
            </li>
        ))}
        </List>
    </div>
    <div>
    <h3>
        Labs that Might Interest you!
    </h3>
    </div>
    <br /><br />
    <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    }}>               
        <List className={classes.root} subheader={<li />}>
        {['Kinsey Group', 'CSM', 'Robotics Lab (Belta)'].map((sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
                <ListSubheader>{`${sectionId}`}</ListSubheader>
                {['Hussain', 'Damani', 'Ben'].map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={`${item}`} />
                </ListItem>
                ))}
            </ul>
            </li>
        ))}
        </List>
    </div>

</div>
    )
}



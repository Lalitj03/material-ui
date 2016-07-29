/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import AppBar from 'material-ui/AppBar';
import ActionZoomOut from 'material-ui/svg-icons/action/zoom-out';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const CardExampleWithAvatar = () => (
  <Card style={styles.cards}>
    <CardHeader
      style={styles.left}
      title="Praveen Jharbade"
      subtitle="Analyst at Goldman Sachs"
      avatar="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAK1AAAAJDZhMDAxM2Y2LWFhN2ItNDAxYy1hMWFhLTQ4MGZmMWI5NWRlMA.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="David Villa" subtitle="Stricker" />}
    >
      <img src="https://heavyeditorial.files.wordpress.com/2015/03/david-villa1.jpg?quality=65&strip=all&w=780&strip=all" />
    </CardMedia>
    <CardTitle title="David Villa a legend" subtitle="Former Spain International and Top Scorer for Spain National Team" />
    <CardText>
      David Villa Sánchez is a Spanish professional footballer who plays as a striker and is the captain for New York City FC. He is nicknamed El Guaje because as a youngster he frequently played football with children much older than him.<a href="https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=23&cad=rja&uact=8&ved=0ahUKEwi9u83rg5LOAhUBto8KHXv3AaYQmhMIpgEwFg&url=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDavid_Villa&usg=AFQjCNHk_Zp376mHkJB16S5bpOf2MvK9CA&sig2=a845p9rqKVMiNpjcVJ5Q4A">Wikipedia</a>
    </CardText>
    <CardActions>
      <IconButton tooltip="Like">
        <ActionThumbUp />
      </IconButton>
      <IconButton tooltip="Zoom Out">
        <ActionZoomOut />
      </IconButton>
    </CardActions>
  </Card>
);

const AppBarExampleIcon = () => (
  <AppBar
    title="David Villa"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 0,
    paddingRight:0,
  },
  cards: {
    textAlign: 'center',
    marginLeft: '20%',
    width: '60%',
  },
  left: {
    textAlign: 'left',
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

export class Hello extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    console.log("11111");
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <AppBarExampleIcon />
          <CardExampleWithAvatar />
          <Dialog
            open={this.state.open}
            title="Wanna see Something Awesome"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            <iframe class="video w100" width="640" height="360" src="https://www.youtube.com/embed/NNWS15pCguE" frameborder="0" allowfullscreen></iframe>
          </Dialog>
          <IconButton tooltip="Home">
            <ActionHome />
          </IconButton>

          <h2>W✪rld Cup G✪als</h2>
          <RaisedButton
            label="Click Here"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

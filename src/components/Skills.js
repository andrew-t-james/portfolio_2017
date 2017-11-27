import React from 'react';
// import FontAwesome from 'react-fontawesome';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardTitle, CardMedia } from 'material-ui/Card';
import calculatorImage from '../img/calculator.jpg';
import ticTacToeImg from '../img/tictactoe.jpg';
import weatherTwoImg from '../img/weather2.jpg';
import mapImg from '../img/map.jpg';
import githubBattle from '../img/githubBattle.jpg';
import yelpCamp from '../img/yelpCamp.jpg';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      cardData: [
        {
          key: 0,
          bgImage: mapImg,
          title: 'Neighborhood Hiking Map',
          subTitle: 'JavaScript Google Maps API',
          link: 'https://ajames20.github.io/fend-map/',
          repoLink: 'https://github.com/ajames20/fend-map',
          chipData: [
            { label: 'Google Maps API' },
            { label: 'HTML5' },
            { label: 'CSS3' },
            { label: 'Knockout.js' },
            { label: 'Foursquare API' },
            { label: 'ES6' },
          ],
        },
        {
          key: 1,
          bgImage: yelpCamp,
          title: 'Yelp Camp',
          subTitle: 'JavaScript/React',
          link: 'https://thawing-oasis-42927.herokuapp.com/',
          repoLink: 'https://github.com/ajames20/web-dev-bootcamp/tree/master/Node/yelp_camp',
          chipData: [
            { label: 'HTML5' },
            { label: 'CSS3' },
            { label: 'NODE' },
            { label: 'Express' },
            { label: 'Heroku' },
            { label: 'ES6' },
            { label: 'Bootstrap' },
            { label: 'MongoDB' },
          ],
        },
        {
          key: 2,
          bgImage: weatherTwoImg,
          title: 'Weather App',
          subTitle: 'JavaScript Fundamentals',
          link: 'https://tired-frogs.surge.sh',
          repoLink: 'https://github.com/ajames20/freecodecamp/tree/master/weather',
          chipData: [
            { label: 'HTML5' },
            { label: 'CSS3' },
            { label: 'JavaScript' },
            { label: 'Weather Underground API' },
            { label: 'Fetch API' },
          ],
        },
        {
          key: 3,
          bgImage: calculatorImage,
          title: 'iOS Calculator',
          subTitle: 'JavaScript/React Fundamentals',
          link: 'https://hellish-land.surge.sh',
          repoLink: 'https://github.com/ajames20/react-calculator',
          chipData: [
            { label: 'React' },
            { label: 'HTML5' },
            { label: 'CSS3' },
            { label: 'SCSS' },
            { label: 'ES6' },
            { label: 'Surge' },
            { label: 'Webpack' },
            { label: 'Create-a-React-App' },
          ],
        },
        {
          key: 4,
          bgImage: ticTacToeImg,
          title: 'Tic Tac Toe',
          subTitle: 'JavaScript/React Game',
          link: 'https://far-zinc.surge.sh',
          repoLink: 'https://github.com/ajames20/tic-tac-toe',
          chipData: [
            { label: 'React' },
            { label: 'HTML5' },
            { label: 'CSS3' },
            { label: 'SCSS' },
            { label: 'ES6' },
            { label: 'Webpack' },
            { label: 'Create-A-React-App' },
          ],
        },
        {
          key: 5,
          bgImage: githubBattle,
          title: 'Github Battle',
          subTitle: 'JavaScript/React Game',
          link: 'https://githubbattle-8b273.firebaseapp.com/',
          repoLink: 'https://github.com/ajames20/github-battle',
          chipData: [
            { label: 'React' },
            { label: 'HTML5' },
            { label: 'CSS3' },
            { label: 'ES6' },
            { label: 'Webpack' },
            { label: 'Firebase' },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <section>
        <h2 className="projects-title">Skills</h2>

        <span className="">
          <i class="cbp-ig-icon devicon-nginx-original" />
          <h3 class="cbp-ig-title ng-binding">nginx</h3>
        </span>
      </section>
    );
  }
}

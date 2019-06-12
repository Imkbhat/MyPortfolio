import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardMenu,
  IconButton,
  Button,
  CardText
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://is3.mzstatic.com/image/thumb/Purple111/v4/85/04/a6/8504a63b-25c0-ac8e-85ab-34abd470f5e0/source/512x512bb.jpg) center / cover"
              }}
            >
              Burger Builder
            </CardTitle>
            <CardText>
              <ul>
                <li>
                  A Burger builder Application built using React Js and ReduxJs.
                </li>
                <li>
                  {" "}
                  The application is a single page application with proper
                  components and is Mobile Responsive.
                </li>
                <li>
                  The Application also used proper authentication and from
                  validation and implements routing uses React Router.
                </li>
              </ul>
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i1.wp.com/metro.co.uk/wp-content/uploads/2018/02/ios_weather_icons-e1519660727179.png?quality=90&strip=all&zoom=1&resize=644%2C483&ssl=1) center / cover"
              }}
            >
              Find Weather
            </CardTitle>
            <CardText>
              <ul>
                <li>Find Weather Application built using React Js.</li>
                <li>
                  The application uses all the new features introduced in
                  EcmaScript 6.
                </li>
                <li>
                  {" "}
                  The application is a single page application with proper
                  components.
                </li>
              </ul>
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/Imkbhat/weather-app"
                target="_blank"
              >
                GitHub
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-Recipe.jpg) center / cover"
              }}
            >
              Recipe Search
            </CardTitle>
            <CardText>
              <ul>
                <li>Recipe Search Application built using React Js.</li>
                <li>
                  The application uses all the new features introduced in
                  EcmaScript 6.
                </li>
                <li>
                  {" "}
                  The application is a single page application with proper
                  components.
                </li>
              </ul>
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Angular</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is VueJS</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

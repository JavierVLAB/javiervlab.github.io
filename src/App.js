import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Resume from './pages/Resume';

var data = require('./components/projectsList.json');

function sortByKey(array, key) {
  return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x > y) ? -1 : ((x < y) ? 1 : 0));
  });
};

data.projects = sortByKey(data.projects, 'id');

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <NavigationBar />

        <div className="App-intro">
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/projects" render={() => <Portfolio data={data}/>}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route exact path="/" component={Home}/>

            {
              data.projects.map(project => {
                return <Route key={project.id} path={"/project" + project.id}
                  render={() => <Project project={project}/>}/>
              })
            }
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

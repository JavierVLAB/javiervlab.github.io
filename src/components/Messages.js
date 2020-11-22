import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Message from './Message';

const Messages = ({ match }) => (
  <div>
    <h2>Messages</h2>
    <ul>
    {
        [...Array(4).keys()].map(n => {
            return <li key={n}>
                    <Link to={`${match.url}/${n+1}`}>
                      Message {n+1}
                    </Link>
                  </li>;
        })
    }
    </ul>
    <Switch>
      <Route
        exact path={match.url}
        render={() => <h3>Please select a message</h3>}/>
      <Route path={`${match.url}/:id(\\d+)`} component={Message} />

    </Switch>

  </div>
);

export default Messages;

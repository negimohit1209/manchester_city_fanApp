import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { firebase } from '../../../firebase';

function AdminNav() {
  const links = [
    {
      title: 'Matches',
      linkTo: '/admin_matches'
    },
    {
      title: 'Add Match',
      linkTo: '/admin_matches/edit_match'
    },
    {
      title: 'Players',
      linkTo: '/admin_players'
    },
    {
      title: 'Add Player',
      linkTo: '/admin_players/add_player'
    }
  ];

  const style = {
    color: '#ffffff',
    fontWeight: '300',
    borderBottom: '1px solid #353535'
  };
  const renderItems = () => {
    return links.map(link => (
      <Link to={link.linkTo} key={link.title}>
        <ListItem button style={style}>
          {link.title}
        </ListItem>
      </Link>
    ));
  };

  const logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('logout succesful');
      })
      .catch(() => {
        console.log('theser is an error');
      });
  };
  return (
    <div>
      {renderItems()}
      <ListItem button style={style} onClick={() => logoutHandler()}>
        Logot
      </ListItem>
    </div>
  );
}

export default AdminNav;

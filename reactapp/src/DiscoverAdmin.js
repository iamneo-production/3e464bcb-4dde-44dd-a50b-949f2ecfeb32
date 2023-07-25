import React from 'react';
import './DiscoverAdmin.css'
import {Link} from 'react-router-dom'
import './Add'
import './Update'
import './Get'
import './Delete'
const ShowManagementPage = () => {
  const handleAddShow = () => {
    // Implement the functionality to add a show
    console.log('Adding a show...');
  };

  const handleGetShows = () => {
    // Implement the functionality to get shows
    console.log('Getting shows...');
  };

  const handleUpdateShow = () => {
    // Implement the functionality to update a show
    console.log('Updating a show...');
  };

  const handleDeleteShow = () => {
    // Implement the functionality to delete a show
    console.log('Deleting a show...');
  };

  return (
    <div className='discoverings'>
      <h1>Lets Exploree...</h1>
      <div className='buttonfordiscover'>
        <button className="buttonadd"onClick={handleAddShow}><Link to="/Add" style={{ color: 'white', textDecoration: 'none' }}>Add Show</Link></button>
        <br>
        </br><br></br><br></br><br></br>
        <button className="buttonget"onClick={handleGetShows}><Link to="/Get" style={{ color: 'white', textDecoration: 'none' }}>Get Shows</Link></button><br></br><br></br><br></br><br></br>
        <button className="buttonupdate"onClick={handleUpdateShow}><Link to="/Update" style={{ color: 'white', textDecoration: 'none' }}>Update Show</Link></button><br></br><br></br><br></br><br></br>
        <button className="buttondelete"onClick={handleDeleteShow}><Link to="/Delete" style={{ color: 'white', textDecoration: 'none' }}>Delete Show</Link></button><br></br>
      </div>
    </div>
  );
};

export default ShowManagementPage;

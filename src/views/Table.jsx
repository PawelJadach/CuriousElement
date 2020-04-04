import React from 'react'
import {Button} from 'reactstrap';


const Table = ({markers, deleteFunc}) => {
  return (
    <>  
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Id marker</th>
            <th scope="col">Latitiude</th>
            <th scope="col">Longtitiude</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {markers.map((marker, index) => 
            <tr key={index}>
              <th className="align-middle" scope="row">{index + 1}</th>
              <td className="align-middle">{marker.getLngLat().lat}</td>
              <td className="align-middle">{marker.getLngLat().lng}</td>
              <td><Button color="danger" className='no-padding' onClick={() => deleteFunc(marker)}>Delete</Button></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
};


export default Table;

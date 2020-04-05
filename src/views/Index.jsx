import React from "react";
import './style.css';
import Table from './Table';
import Notification from './Notifications.jsx';


import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
} from "reactstrap";
import mapboxgl from 'mapbox-gl';


class Index extends React.Component {
  mapRef = React.createRef();

  state = {
    collapseFirst: false,
    collapseSecond: false,
    markers: [],
    mapBox: {},
    open: false,
    color: '',
    text: '',
    icon: '',
  }

  changeCollapse = collapse => {
    if (collapse === 1) {
      if(this.state.collapseFirst === false ){
        this.setState({
          collapseFirst: true,
          collapseSecond: false,
        })
        this.reloadMap(this.state.mapBox);
      } else {
        this.setState({
          collapseFirst: false,
          collapseSecond: false,
        })
      }
      
    } else {
      if(this.state.collapseSecond === false ){
        this.setState({
          collapseFirst: false,
          collapseSecond: true,
        })
      } else {
        this.setState({
          collapseFirst: false,
          collapseSecond: false,
        })
      }
      
    }
    
 
  };

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoicGF3ZWxqYWRhY2giLCJhIjoiY2s4bGJwYWxyMDIxNzNmcW9iOHI2dzVrcCJ9.tCvKk6nxMW_noFhGWfQfVg';
    // eslint-disable-next-line
      const box = new mapboxgl.Map({
        container: this.mapRef.current,
        style: 'mapbox://styles/paweljadach/ck8letfro0joi1iqw2n6nu1ss'
      })

      this.setState({
        mapBox: box,
      })

      box.on('click', (e) => {
        this.addMarker(e.lngLat);
      });
  };

  reloadMap = (box) => {
    setTimeout(() => box.resize(), 1);
  }


  deleteMarkerFromStare = (markerToDelete) => {
    this.setState((prevState) => ({
      markers: prevState.markers.filter(marker => marker !== markerToDelete),
    }));
    markerToDelete.remove();
    this.addAlert('danger', 'Marker removed!', 'fas fa-trash');
  };

  addMarker = (marker) => {
    const newMarker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([marker.lng, marker.lat])
      .addTo(this.state.mapBox);
      this.setState((prevState) => ({
        markers: prevState.markers.concat(newMarker)
      }));
      this.addAlert('success', 'Marker added!', 'now-ui-icons ui-2_like');
      return null;  
  }

  closeAlert = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }))
  }

  addAlert = (color, text, icon) => {
    this.setState((prevState) => ({
      open: true,
      color: color,
      text: text,
      icon: icon,
    }))
    setTimeout(() => {
      this.setState((prevState) => ({
        open: false,
        color: '',
        text: '',
        icon: '',
        }))
      }, 1000)
  }
  
 
  
  render(){
   
    
    return (
      <>
        <div className="wrapper" >
          <div className="page-header clear-filter">
            <div
              className="page-header-image"
              style={{
                backgroundColor: "#2c2c2c"
              }}
            ></div>
            
            <div className="content mt-3 mx-auto " style={{'width': '50vw'}}>
            <h1 className="lead">Paweł Jadach - zadanie rekrutacyjne</h1>
            <div id="acordeon">
                <div aria-multiselectable={true} id="accordion" role="tablist">
                  <Card className="no-transition bg-dark">
                    <CardHeader className="card-collapse" id="headingOne" role="tab">
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-expanded={this.state.collapseFirst}
                          className="collapsed btn btn-warning"
                          data-parent="#accordion"
                          href="#pablo"
                          id="collapseOne"
                          onClick={e => {
                            e.preventDefault();
                            this.changeCollapse(1);
                          }}
                        >
                          MapBox{" "}
                          <i className="nc-icon nc-minimal-down" />
                        </a>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={this.state.collapseFirst}>
                      <CardBody className='cardMap'>
                        <div id="mapBox" ref={this.mapRef} />
                      </CardBody>
                    </Collapse>
                    <CardHeader className="card-collapse" id="headingTwo" role="tab">
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-controls="collapseTwo"
                          aria-expanded={this.state.collapseSecond}
                          className="collapsed btn btn-primary"
                          data-parent="#accordion"
                          href="#pablo"
                          id="collapseTwo"
                          onClick={e => {
                            e.preventDefault();
                            this.changeCollapse(2);
                          }}
                        >
                          Table{" "}
                          <i className="nc-icon nc-minimal-down" />
                        </a>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={this.state.collapseSecond}>
                      <CardBody>
                        <Table deleteFunc={this.deleteMarkerFromStare} markers={this.state.markers}/>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
                <div className='alertWrapper'>
              <Notification closeAlert={this.closeAlert} open={this.state.open} color={this.state.color} text={this.state.text} icon={this.state.icon}/>
            </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Index;

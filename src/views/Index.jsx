import React from "react";
import './style.css';

import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
} from "reactstrap";
import mapboxgl from 'mapbox-gl';


class Index extends React.Component {

  state = {
    collapseFirst: false,
    collapseSecond: false,
  }

  changeCollapse = collapse => {
    if (collapse === 1) {
      if(this.state.collapseFirst === false ){
        this.setState({
          collapseFirst: true,
          collapseSecond: false,
        })
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
      const map = new mapboxgl.Map({
        container: 'mapBox',
        style: 'mapbox://styles/paweljadach/ck8letfro0joi1iqw2n6nu1ss'
      }); 
  };

  

  


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
            <div id="acordeon">
                <div aria-multiselectable={true} id="accordion" role="tablist">
                  <Card className="no-transition text-white bg-dark">
                    <CardHeader className="card-collapse" id="headingOne" role="tab">
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-expanded={this.state.collapseFirst}
                          className="collapsed btn btn-danger"
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
                        <div id="mapBox" />
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
                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                        non cupidatat skateboard dolor brunch. Food truck quinoa
                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                        aliqua put a bird on it squid single-origin coffee nulla
                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                        beer labore wes anderson cred nesciunt sapiente ea proident.
                        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt you
                        probably haven't heard of them accusamus labore sustainable
                        VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
                {/* end acordeon */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Index;

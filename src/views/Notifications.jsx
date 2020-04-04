import React from "react";
import { Alert } from "reactstrap";


function Notifications(props) {

  return (
        <Alert color={props.color} isOpen={props.open}>
          <div className="alert-icon">
          <i className={props.icon}></i>
           </div>
          <strong>{props.text}</strong>
          <button
            type="button"
            className="close"
            onClick={() => props.closeAlert()}
          >
            <span aria-hidden="true">
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </span>
          </button>
        </Alert>
  );
}

export default Notifications;

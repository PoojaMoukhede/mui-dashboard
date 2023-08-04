import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";

export default function Updates() {
  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <>
            <div className="update">
              <img src={update.img} alt="" className="img" />
              <div className="noti">
                <div style={{marginBottom:'0.5rem'}}>
                  <span className="name" style={{color:'black'}}>{update.name}</span>
                  <span style={{color:'black'}}>{update.noti}</span> <br></br>
                  <span style={{color:'black'}}>{update.time}</span>
                </div>
              </div>
              {/* <div>
              <span>{update.time}</span>
              </div> */}
            </div>
          </>
        );
      })}
    </div>
  );
}

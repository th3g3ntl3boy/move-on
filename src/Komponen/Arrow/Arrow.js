import React from 'react';
import './Arrow.scss';

const styles = {
  backgroundColor: "transparent",
  backgroundRepeat: "no-repeat",
  border: "none",
  cursor: "pointer",
  overflow: "hidden",
  outline: "none",
  width: "105%",
  height: "105%",
};

const Arrow = (props) => {
  return (
      <div>
          <button className="animated-arrow" style={styles}>
              <span className="the-arrow -left">
                  <span className="shaft"></span>
              </span>
              <span className="main">
                  <span className="text">{props.halaman}</span>
                  <span className="the-arrow -right">
                      <span className="shaft"></span>
                  </span>
              </span>
          </button>
      </div>

  )
}

export default Arrow
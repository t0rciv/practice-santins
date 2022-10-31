import React from 'react';

import './Stats.css';

const Stats = () => {
  return (
    <section className="fundSection">
      <div className="numbers">
        <div className="content">
          <p className="dataNumbers">4</p>
          <div className="edgeNumbers"></div>
          <p className="dataText">LOREM</p>
        </div>
        <div className="content">
          <p className="dataNumbers">
            100 <span className="subtext">%</span>
          </p>
          <div className="edgeNumbers"></div>
          <p className="dataText">LOREM</p>
        </div>
        <div className="content">
          <p className="dataNumbers">10</p>
          <div className="edgeNumbers"></div>
          <p className="dataText">LOREM</p>
        </div>
        <div className="content">
          <p className="dataNumbers">
            162,6 <span className="subtext">%</span>
          </p>
          <div className="edgeNumbers"></div>
          <p className="dataText">LOREM</p>
          <p className="dataSubtext">(lorem)</p>
        </div>
        <div className="content">
          <p className="dataNumbers">1º</p>
          <div className="edgeNumbers"></div>
          <p className="dataText">LOREM</p>
        </div>
        <div className="content">
          <p className="dataNumbers">
            <span className="subtext">R$</span> 297{' '}
            <span className="subtext">mm</span>
          </p>
          <div className="edgeNumbers"></div>
          <p className="dataText">LOREM</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;

import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div key={item.name} className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href={item.url} target="_blank">
                          <img
                            src={`${item.imgurl}`}
                            className="item-img"
                            alt={item.name}
                          />
                        </a>
                        <h5>{item.name}</h5>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

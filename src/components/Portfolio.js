import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>My Works</h1>
          </div>
          <div className="nine columns collapsed">
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf bar"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="columns portfolio-item work-container "
                    >
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

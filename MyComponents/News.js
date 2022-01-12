import React, { Component } from "react";

export class News extends Component {
  render() {
    let { title, description, ImageUrl, url } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18 rem" }}>
          <img src={ImageUrl} className="card-img-top" alt="/" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary text-center"
            >
              Click
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

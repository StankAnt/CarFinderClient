import * as React from 'react';

export interface Props {
  model: string;
  mark: string;
  description: string;
  price: number;
  year: number;
  images: string[];
  kms: number;
}

const AdPreview = (props: Props) => {
  const { model, mark, description, price, year, images, kms } = props;
  return (
    <div className="media">
      <figure className="media-left">
        <p className="ad-image">
          {images.map((image: any, index) => {
            return <img className="image is-128x128" src={image} key={index} />;
          })}
        </p>
      </figure>
      <div className="content">
        <p className="ad-title">{mark + ' ' + model}</p>
        <p>{description}</p>
      </div>
      <div className="media-info">
        <span className="has-text-warning">
          <strong className="ad-price">
            <i className="fa fa-usd" aria-hidden="true" />&nbsp;{price}
          </strong>
        </span>
        <span className="has-text-grey">
          <i className="fa fa-clock-o" aria-hidden="true" />&nbsp;{year}
        </span>
        <span className="has-text-grey-light">
          <i className="fa fa-road" aria-hidden="true" />&nbsp;{kms !== 0 ? kms : 'New'}
        </span>
      </div>
    </div>
  );
};

export default AdPreview;

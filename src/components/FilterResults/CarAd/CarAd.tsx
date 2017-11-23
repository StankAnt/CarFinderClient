import axios from 'axios';
import classnames from 'classnames';
import * as React from 'react';
import './style.less';

export interface Props {
  isSold?: boolean;
  model: string;
  mark: string;
  description: string;
  price: number;
  year: number;
  images: string[];
  kms: number;
  source: string;
}

const CarAd = (props: Props) => {
  const { model, mark, description, price, year, images, kms, isSold, source } = props;
  const isAvBy = source === 'av.by' ? true : false;
  let imageLoaded: boolean = false;
  return (
    <div>
      <div className="media">
        <figure className="media-left">
          <p className="ad-image">
            <img
              className={classnames('image is-128x128', { invisible: !imageLoaded })}
              src={
                isAvBy
                  ? 'https://cdn4.iconfinder.com/data/icons/oakcons-2/16/Image-128.png'
                  : images[0]
              }
              onLoad={() => (imageLoaded = true)}
            />
          </p>
        </figure>
        <figure className="media-content">
          <div className="content">
            <p className="ad-title">{mark + ' ' + model}</p>
            <p>{description.length > 530 ? `${description.substring(0, 529)}...` : description}</p>
          </div>
        </figure>
        <figure className="media-right">
          <div className="media-info">
            <span className="has-text-warning">
              <strong className="ad-price">
                <i className="fa fa-tag" aria-hidden="true" />&nbsp;{price}
              </strong>
            </span>
            <span className="has-text-grey">
              <i className="fa fa-clock-o" aria-hidden="true" />&nbsp;{year}
            </span>
            {kms !== 0 && (
              <span className="has-text-grey-light">
                <i className="fa fa-road" aria-hidden="true" />&nbsp;{kms}
              </span>
            )}
            {kms === 0 && <span className="new-tag tag is-success">New</span>}
            {isSold && <span className="new-tag tag is-danger">Sold</span>}
          </div>
        </figure>
      </div>
    </div>
  );
};

export default CarAd;

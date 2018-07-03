import React from 'react';
// import PropTypes from 'prop-types';
import {listingShape} from '../../propz/listingProp';
import {formatPrice} from '../../helpers';
import './Building.css';
import BuildingTile from '../BuildingTile/BuildingTile';

class Building extends React.Component {
  static propTypes = {listing: listingShape};
  render () {
    const {listing} = this.props;
    if (listing.nope) {
      return (
        <div className="Building">
          <h1 className="unknown-listing"><span className="glyphicon glyphicon-arrow-left"></span>OH NO!</h1>
        </div>
      );
    };
    return (
      <div className="Building">
        <div className="row">
          <div className="col-xs-6">
            <img src={listing.imageUrl} className="building-image" alt="Selected Building"/>
          </div>
          <div className="col-xs-6">
            <h3>{formatPrice(listing.price)}</h3>
            <p>{formatPrice(listing.estimatedMonthlyMorgage)}</p>
            <h4>{listing.address} {listing.city}, {listing.state} {listing.zip}</h4>
            <h5>{listing.numBeds} Bed/{listing.numBaths} Bath</h5>
            <h5>{listing.squareFootage} ft<sup>2</sup></h5>
            <p>{listing.description}</p>
          </div>
          <div className="row">
            <BuildingTile
              imageSrc = 'cal.png'
              altText = 'calendar'
              pTagText = {`Built: ${listing.yearBuilt}`}
            />
            <BuildingTile
              imageSrc = 'hill.png'
              altText = 'calendar'
              pTagText = {`${listing.lotInAcres} acres`}
            />
            <BuildingTile
              imageSrc = 'flame.png'
              altText = 'Flame'
              pTagText = {listing.heating}
            />
            <BuildingTile
              imageSrc = 'snow.png'
              altText = 'Snowflake'
              pTagText = {listing.cooling}
            />
          </div>
        </div>

      </div>
    );
  }
};

export default Building;

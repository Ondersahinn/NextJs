import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchStockMarket } from '../../action/stockMarketBarAction';
import * as StockMarketAction from '../../types/stockMarketActionTypes';
import { Container, Row, ListGroup } from 'react-bootstrap';

function StockMarketBar(props) {
  const [markets, setMarkets] = React.useState([]);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    if (
      props.stockMarketFetchCount === 0 &&
      props.stockMarketFetchState !==
        StockMarketAction.StockMarketFetchStates.FETCHING
    ) {
      props.dispatchFetchStockMarket();
    } else if (
      props.stockMarketFetchState ===
      StockMarketAction.StockMarketFetchStates.FETCHED
    ) {
      setMarkets(props.stockMarket);
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
    }
  }, [props]);

  return (
    <Container fluid>
      <Row>
        <ListGroup horizontal>
          {markets.slice(0,Math.round(screenWidth/213)).map((market) => (
            <ListGroup.Item
              key={market._id}
              style={{
                width: `${100/Math.round(screenWidth/213)}vw`,
                backgroundColor: 'black',
                color: 'white',
              }}
            >
              <div className='mx-20'>
                <div className='d-flex justify-content-between'>
                  <h5 className='mr-40'>{market.marketName}</h5>
                  <p className='my-0 mr-40'>{market.exchangeDifferences}</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='text-danger'>{market.percentageDifference}</p>
                  <span className='sparklines'>
                    {market.percentageFullDifference}
                  </span>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  stockMarket: state.stockMarket.stockMarket,
  stockMarketFetchCount: state.stockMarket.stockMarketFetchCount,
  stockMarketFetchState: state.stockMarket.stockMarketFetchState,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchStockMarket: () => dispatch(fetchStockMarket()),
});

StockMarketBar.propTypes = {
  stockMarketFetchState: PropTypes.string.isRequired,
  stockMarketFetchCount: PropTypes.number.isRequired,
  stockMarket: PropTypes.array.isRequired,
  dispatchFetchStockMarket: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StockMarketBar);

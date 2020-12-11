import React from 'react';

const Prices = () => {
  const [header] = React.useState({
    mainHeader: 'CHOOSE A PLAN',
    subHeading: 'Prices Plan',
    text:
      'Ullamco quis sunt qui esse qui anim dolor incididunt adipisicing consectetur.',
  });

  const [state] = React.useState([
    {
      id: 1,
      heading: 'Basic',
      price: '50',
      storage: '5GB Storage Space',
      bandwidth: '20GB Monthly Bandwidth',
      database: 'My SQL Database',
      account: '100 Email Account',
      domain: '10 Free Domain Names',
    },
    {
      id: 2,
      heading: 'Standard',
      price: '80',
      storage: '8GB Storage Space',
      bandwidth: '40GB Monthly Bandwidth',
      database: 'My SQL Database',
      account: '150 Email Account',
      domain: '15 Free Domain Names',
    },
    {
      id: 3,
      heading: 'Premium',
      price: '160',
      storage: '16GB Storage Space',
      bandwidth: '160GB Monthly Bandwidth',
      database: 'My SQL Database',
      account: '200 Email Account',
      domain: '20 Free Domain Names',
    },
  ]);
  return (
    <div className='prices'>
      <div className='container'>
        <div className='common'>
          <h3 className='heading'>{header.mainHeader}</h3>
          <h1 className='mainHeader'>{header.subHeading}</h1>
          <p className='mainContent'>{header.text}</p>
          <div className='commonBorder'></div>
        </div>
        <div className='row'>
          {state.map((info) => (
            <div className='col-4' key={info.id}>
              <div className='price'>
                <div className='priceHeading'>{info.heading}</div>
                <div className='price__rs'>
                  <span>$</span>
                  {info.price}
                </div>
                <ul>
                  <li>{info.storage}</li>
                  <li>{info.bandwidth}</li>
                  <li>{info.database}</li>
                  <li>{info.account}</li>
                  <li>{info.domain}</li>
                </ul>
                <div className='price__btn'>
                  <a href='#' className='btn btn-outline'>
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;

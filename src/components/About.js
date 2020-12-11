import React from 'react';

const About = () => {
  const [header] = React.useState({
    subHeader: 'About Me',
    text:
      'Consectetur ullamco cupidatat pariatur laborum non non excepteur officia fugiat veniam ea Lorem fugiat. Ex quis aute mollit aliqua exercitation exercitation incididunt veniam elit veniam enim non nisi mollit.',
  });
  const [state] = React.useState([
    {
      id: 1,
      title: 'Name',
      text: 'Thaninpat',
    },
    {
      id: 2,
      title: 'Email',
      text: 'thaninpat.o@gmail.com',
    },
    {
      id: 3,
      title: 'Phone',
      text: '+88-83-919-0369',
    },
    {
      id: 4,
      title: 'Line',
      text: 'linethaninpat',
    },
  ]);
  return (
    <div className='about'>
      <div className='container'>
        <div className='services__header'>
          <div className='common'>
            <p className='mainHeader'>{header.subHeader}</p>
            <p className='mainContent'>{header.text}</p>
            <div className='commonBorder'></div>
          </div>
          <div
            className='row'
            style={{ height: '650px', alignItems: 'center' }}
          >
            <div className='col-6'>
              <div className='about__img'>
                <img src='/images/man-02.png' alt='man' />
              </div>
            </div>
            <div className='col-6'>
              <div className='about__info'>
                <h1>Hi There</h1>
                <div className='about__info-p1'>
                  Excepteur veniam proident laborum in excepteur nulla cillum
                  exercitation sit. Ea aliqua enim veniam velit adipisicing
                  officia. Irure in ad minim in duis in do nisi ipsum.
                </div>
                <div className='about__info-p2'>
                  Adipisicing proident ullamco laborum cillum dolor magna fugiat
                  voluptate nulla elit laboris.
                </div>
                <div className='info__contacts'>
                  <div className='row'>
                    {state.map((info) => (
                      <div className='col-6'>
                        <strong>{info.title}</strong>
                        <p>{info.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

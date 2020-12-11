import React from 'react';
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaVideo,
  FaSearchDollar,
} from 'react-icons/fa';

const Services = () => {
  const [header] = React.useState({
    mainHeader: 'SERVICES',
    subHeader: 'My Services',
    text:
      'Consectetur ullamco cupidatat pariatur laborum non non excepteur officia fugiat veniam ea Lorem fugiat. Ex quis aute mollit aliqua exercitation exercitation incididunt veniam elit veniam enim non nisi mollit.',
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: '<FaGithub />',
      heading: 'Development',
      text: 'Laboris deserunt velit laboris amet sunt laborum.',
    },
    {
      id: 2,
      icon: 'FaCamera',
      heading: 'Photography',
      text: 'Laboris deserunt velit laboris amet sunt laborum.',
    },
    {
      id: 3,
      icon: 'FaCircleNotch',
      heading: 'Web Design',
      text: 'Laboris deserunt velit laboris amet sunt laborum.',
    },
    {
      id: 4,
      icon: 'FaApple',
      heading: 'App Development',
      text: 'Laboris deserunt velit laboris amet sunt laborum.',
    },
    {
      id: 5,
      icon: 'FaVideo',
      heading: 'Video Editing',
      text: 'Laboris deserunt velit laboris amet sunt laborum.',
    },
    {
      id: 6,
      icon: 'FaSearchDollar',
      heading: 'SEO Expert',
      text: 'Laboris deserunt velit laboris amet sunt laborum.',
    },
  ]);
  return (
    <div className='services'>
      <div className='container'>
        <div className='services__header'>
          <div className='common'>
            <h3 className='heading'>{header.mainHeader}</h3>
            <p className='mainHeader'>{header.subHeader}</p>
            <p className='mainContent'>{header.text}</p>
            <div className='commonBorder'></div>
          </div>

          <div className='row bgMain'>
            {state.map((info) => (
              <div className='col-4 bgMain'>
                <div className='services__box'>
                  <FaGithub className='commonIcons' />
                  <div className='services__box-header'>{info.heading}</div>
                  <div className='services__box-p'>{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

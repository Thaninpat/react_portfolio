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
            <div className='col-4 bgMain'>
              <div className='services__box'>
                <FaGithub className='commonIcons' />
                <div className='services__box-header'>Development</div>
                <div className='services__box-p'>
                  Laboris deserunt velit laboris amet sunt laborum.
                </div>
              </div>
              <div className='services__box'>
                <FaCamera className='commonIcons' />
                <div className='services__box-header'>Photography</div>
                <div className='services__box-p'>
                  Laboris deserunt velit laboris amet sunt laborum.
                </div>
              </div>
              <div className='services__box'>
                <FaCircleNotch className='commonIcons' />
                <div className='services__box-header'>Web Design</div>
                <div className='services__box-p'>
                  Laboris deserunt velit laboris amet sunt laborum.
                </div>
              </div>
              <div className='services__box'>
                <FaApple className='commonIcons' />
                <div className='services__box-header'>App Development</div>
                <div className='services__box-p'>
                  Laboris deserunt velit laboris amet sunt laborum.
                </div>
              </div>
              <div className='services__box'>
                <FaVideo className='commonIcons' />
                <div className='services__box-header'>Video Editing</div>
                <div className='services__box-p'>
                  Laboris deserunt velit laboris amet sunt laborum.
                </div>
              </div>
              <div className='services__box'>
                <FaSearchDollar className='commonIcons' />
                <div className='services__box-header'>SEO Expert</div>
                <div className='services__box-p'>
                  Laboris deserunt velit laboris amet sunt laborum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

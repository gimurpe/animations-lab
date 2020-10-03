import React from 'react';
import './styles.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import FireFly from '../../components/FireFly';

type Props = {};

const HomePage = () => {
  const bouncingBtnHtml = `
  @keyframes bouncing{
    0%  { bottom: 0; box-shadow: 0 0 5px rgba(0,0,0,0.5);}
    100%{ bottom: 50px; box-shadow: 0 50px 50px rgba(0,0,0,0.1);}
  }
  .loading-button{ animation: bouncing 0.5s cubic-bezier(0.1,0.25,0.1,1) 0s infinite alternate both;}
  `;

  let fireflies = new Array(15);
  fireflies = fireflies.fill({}, 0, 15);

  return (
    <div className='homepage'>
      <section className='homepage__bouncing-section'>
        <div className='homepage__bouncing-block'>
          <div className='homepage__bouncing-btn  homepage__bouncing-1-btn'>
            Bouncing
          </div>
          <SyntaxHighlighter
            className='homepage__bouncing-btn-code'
            language='css'
            style={atomOneLight}
          >
            {bouncingBtnHtml}
          </SyntaxHighlighter>
        </div>
        <div className='homepage__bouncing-block'>
          <div className='homepage__bouncing-btn homepage__bouncing-2-btn'>
            Bouncing
          </div>
          <SyntaxHighlighter
            className='homepage__bouncing-btn-code'
            language='css'
            style={atomOneLight}
          >
            {bouncingBtnHtml}
          </SyntaxHighlighter>
        </div>
        <div className='homepage__bouncing-block'>
          <div className='homepage__bouncing-btn homepage__bouncing-3-btn'>
            Bouncing
          </div>
          <SyntaxHighlighter
            className='homepage__bouncing-btn-code'
            language='css'
            style={atomOneLight}
          >
            {bouncingBtnHtml}
          </SyntaxHighlighter>
        </div>
        <div className='homepage__bouncing-block'>
          <div className='homepage__bouncing-btn homepage__bouncing-4-btn'>
            Bouncing
          </div>
          <SyntaxHighlighter
            className='homepage__bouncing-btn-code'
            language='css'
            style={atomOneLight}
          >
            {bouncingBtnHtml}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className='homepage__fireflies-section'>
        {fireflies.map(() => (
          <FireFly />
        ))}
      </section>
      <section className='homepage__bouncing-section'>
        <div className='homepage__bouncing-btn'>Bouncing</div>
        <SyntaxHighlighter
          className='homepage__bouncing-btn-code'
          language='css'
          style={atomOneLight}
        >
          {bouncingBtnHtml}
        </SyntaxHighlighter>
      </section>
    </div>
  );
};

export default HomePage;

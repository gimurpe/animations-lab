import React from 'react';
import './styles.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import FireFly from '../../components/FireFly';
import fillModeChart from '../../assets/images/fill-mode-chart.png';
import { constants } from '../../constants';
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
      <section className='homepage__concepts-section'>
        <div className='homepage__circles-wrapper'>
          <div className='homepage__circle homepage__circle-xxlarge homepage__circle-shade1' />
          <div className='homepage__circle homepage__circle-xlarge homepage__circle-shade2' />
          <div className='homepage__circle homepage__circle-large homepage__circle-shade3' />
          <div className='homepage__circle homepage__circle-mediun homepage__circle-shade4' />
          <div className='homepage__circle homepage__circle-small homepage__circle-shade5' />
        </div>
        <div className='homepage__concepts-section-content-wrapper'>
          <h3 className='homepage__concept-title'>Animation properties</h3>
          <ul className='homepage__animation-concepts'>
            <li className='homepage__animation-concept-item'>
              <strong>name</strong>: the animation’s name
            </li>
            <li className='homepage__animation-concept-item'>
              <strong>duration</strong>: how long the transition lasts
            </li>
            <li className='homepage__animation-concept-item'>
              <strong>timing-function</strong>: how the intermediate states are
              calculated
            </li>
            <li className='homepage__animation-concept-item'>
              <strong>delay</strong>: to start the animation after a certain
              amount of time
            </li>
            <li className='homepage__animation-concept-item'>
              <strong>iteration-count</strong>: how many times the animation
              should be performed
            </li>
            <li className='homepage__animation-concept-item'>
              <strong>direction</strong>: if the animation should be reversed or
              not
            </li>
            <li className='homepage__animation-concept-item'>
              <strong>fill-mode</strong>: what styles are applied before the
              animation starts and after it ends
            </li>
          </ul>
          <img
            className='homepage__fill-mode-chart'
            src={fillModeChart}
            alt='fill-mode-chart'
          />
        </div>
      </section>
      <section className='homepage__bouncing-section'>
        <div className='homepage__bouncing-block'>
          <div className='homepage__bouncing-btn  homepage__bouncing-1-btn' />
          <SyntaxHighlighter
            className='homepage__bouncing-btn-code'
            language='css'
            style={atomOneLight}
          >
            {constants.BOUNCE_1_CSS}
          </SyntaxHighlighter>
        </div>
        <div className='homepage__bouncing-block'>
          <div className='homepage__bouncing-btn homepage__bouncing-2-btn' />
          <SyntaxHighlighter
            className='homepage__bouncing-btn-code'
            language='css'
            style={atomOneLight}
          >
            {constants.BOUNCE_2_CSS}
          </SyntaxHighlighter>
        </div>
        <div className='homepage__bouncing-block'>
          <div className='homepage__bouncing-btn homepage__bouncing-3-btn' />
          <SyntaxHighlighter
            className='homepage__bouncing-btn-code'
            language='css'
            style={atomOneLight}
          >
            {constants.BOUNCE_3_CSS}
          </SyntaxHighlighter>
        </div>
        <div className='homepage__bouncing-block'>
          <div className='homepage__bouncing-btn homepage__bouncing-4-btn' />
          <SyntaxHighlighter
            className='homepage__bouncing-btn-code'
            language='css'
            style={atomOneLight}
          >
            {constants.BOUNCE_4_CSS}
          </SyntaxHighlighter>
        </div>
        <div className='homepage__bouncing-block'>
          <div className='homepage__bouncing-btn homepage__bouncing-5-btn' />
          <SyntaxHighlighter
            className='homepage__bouncing-btn-code'
            language='css'
            style={atomOneLight}
          >
            {constants.BOUNCE_5_CSS}
          </SyntaxHighlighter>
        </div>
        <div className='homepage__bouncing-block'>
          <div className='homepage__bouncing-btn homepage__bouncing-6-btn' />
          <SyntaxHighlighter
            className='homepage__bouncing-btn-code'
            language='css'
            style={atomOneLight}
          >
            {constants.BOUNCE_6_CSS}
          </SyntaxHighlighter>
        </div>
        <div className='homepage__bouncing-block'>
          <div className='homepage__bouncing-btn homepage__bouncing-7-btn' />
          <SyntaxHighlighter
            className='homepage__bouncing-btn-code'
            language='css'
            style={atomOneLight}
          >
            {constants.BOUNCE_7_CSS}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className='homepage__fireflies-section'>
        {fireflies.map(() => (
          <FireFly />
        ))}
      </section>
      <section className='homepage__ocean-section'>
        <div className='homepage__ocean'>
          <div className='homepage__wave'></div>
          <div className='homepage__wave'></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

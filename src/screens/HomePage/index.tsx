import React, { useRef, useState } from 'react';
import './styles.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import FireFly from '../../components/FireFly';
import fillModeChart from '../../assets/images/fill-mode-chart.png';
import { constants } from '../../constants';
import Envelope from '../../components/Envelope/Envelope.atom';
import Button from '../../components/Button/Button.atom';
import balloon from '../../assets/gifs/ballon-couple.gif';

type Props = {};

const HomePage = () => {
  const [state, setState] = useState({
    throwConfetti: false,
    videoReady: false,
  });

  const envelopeRef = useRef(null);
  let fireflies = new Array(15);
  fireflies = fireflies.fill({}, 0, 15);

  const onHeartButtonClick = () => {
    const isFocused = envelopeRef.current?.getAttribute('data-focused');
    envelopeRef.current?.setAttribute(
      'data-focused',
      isFocused == 'false' ? 'true' : 'false'
    );
    setState({ ...state, throwConfetti: true });
  };

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
      <section className='homepage__ocean-section'>
        <h3 className='homepage__ocean-text'>Animation Direction</h3>
        <dl className='homepage__ocean-anim-direction-concepts'>
          <dt className='homepage__ocean-anim-direction-definition'>
            <strong>normal</strong>
          </dt>
          <dd className='homepage__ocean-anim-direction-term'>
            All iterations of the animation are played as specified.
          </dd>
          <dt className='homepage__ocean-anim-direction-definition'>
            <strong>reverse</strong>
          </dt>
          <dd className='homepage__ocean-anim-direction-term'>
            Defines that all cycles of the animation are played in the reverse
            direction from the way they were specified.
          </dd>
          <dt className='homepage__ocean-anim-direction-definition'>
            <strong>alternate</strong>
          </dt>
          <dd className='homepage__ocean-anim-direction-term'>
            Alternates between the normal direction and reverse direction.
            Therefore, the odd-numbered cycles are played in the{' '}
            <strong>normal</strong> direction, and the even-numbered iterations
            are played in a <strong>reverse</strong> direction.
          </dd>
          <dt className='homepage__ocean-anim-direction-definition'>
            <strong>alternate-reverse</strong>
          </dt>
          <dd className='homepage__ocean-anim-direction-term'>
            Same as <strong>alternate</strong> except in reverse order.
            Therefore, the odd-numbered cycles are played in{' '}
            <strong>reverse</strong> direction and the even-numbered cycles are
            played in <strong>normal</strong> direction.
          </dd>
        </dl>
        <div className='homepage__ocean'>
          <div className='homepage__wave'></div>
          <div className='homepage__wave'></div>
        </div>
      </section>
      <section className='homepage__bouncing-section'>
        <h3 className='homepage__concept-title'>
          Make your animation feel natural
        </h3>
        <div className='homepage__bouncing-blocks-wrapper'>
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
        </div>
      </section>
      <section className='homepage__fireflies-section'>
        {fireflies.map(() => (
          <FireFly />
        ))}
      </section>
      <section className='homepage__love-section'>
        <div className='homepage__love-section__envelop-container'>
          <Envelope ref={envelopeRef} message='Message' destinatary='For: '>
            <div className='heart' />
            <img
              className='homepage__love-section__balloons-couple'
              src={balloon}
              alt=''
            />
          </Envelope>
        </div>
        <div className='homepage__love-section__heart-button'>
          <Button onPress={onHeartButtonClick} />
        </div>
      </section>
      <section className='homepage__painting-section'>
        <div className='homepage__painting-container'>
          <div className='homepage__painting-d1'></div>
          <div className='homepage__painting-d2'></div>
          <div className='homepage__painting-d3'></div>
          <div className='homepage__painting-d4'></div>
        </div>
      </section>
      <section className='homepage__references-section'>
        <div class='area'>
          <ul class='circles'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

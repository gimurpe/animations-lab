import React from 'react';
import './styles.scss';
import fillModeChart from '../../assets/images/fill-mode-chart.png';

const ConceptsSection = () => (
  <>
    <div className='concepts-section__circles-wrapper'>
      <div className='concepts-section__circle concepts-section__circle-xxlarge concepts-section__circle-shade1' />
      <div className='concepts-section__circle concepts-section__circle-xlarge concepts-section__circle-shade2' />
      <div className='concepts-section__circle concepts-section__circle-large concepts-section__circle-shade3' />
      <div className='concepts-section__circle concepts-section__circle-mediun concepts-section__circle-shade4' />
      <div className='concepts-section__circle concepts-section__circle-small concepts-section__circle-shade5' />
    </div>
    <div className='concepts-section__concepts-section-content-wrapper'>
      <h3 className='concepts-section__concept-title'>Animation properties</h3>
      <ul className='concepts-section__animation-concepts'>
        <li className='concepts-section__animation-concept-item'>
          <strong>name</strong>: the animation’s name
        </li>
        <li className='concepts-section__animation-concept-item'>
          <strong>duration</strong>: how long the transition lasts
        </li>
        <li className='concepts-section__animation-concept-item'>
          <strong>timing-function</strong>: how the intermediate states are
          calculated
        </li>
        <li className='concepts-section__animation-concept-item'>
          <strong>delay</strong>: to start the animation after a certain amount
          of time
        </li>
        <li className='concepts-section__animation-concept-item'>
          <strong>iteration-count</strong>: how many times the animation should
          be performed
        </li>
        <li className='concepts-section__animation-concept-item'>
          <strong>direction</strong>: if the animation should be reversed or not
        </li>
        <li className='concepts-section__animation-concept-item'>
          <strong>fill-mode</strong>: what styles are applied before the
          animation starts and after it ends
        </li>
      </ul>
      <img
        className='concepts-section__fill-mode-chart'
        src={fillModeChart}
        alt='fill-mode-chart'
      />
    </div>
  </>
);

export default ConceptsSection;

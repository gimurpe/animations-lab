import React from 'react';
import './styles.scss';

const OceanSection = () => (
  <>
    <h3 className='ocean-section__title'>Animation Direction</h3>
    <dl className='ocean-section__ocean-anim-direction-concepts'>
      <dt className='ocean-section__ocean-anim-direction-definition'>
        <strong className='ocean-section__ocean-text ocean-section__ocean-text-normal'>
          normal
        </strong>
      </dt>
      <dd className='ocean-section__ocean-anim-direction-term'>
        All iterations of the animation are played as specified.
      </dd>
      <dt className='ocean-section__ocean-anim-direction-definition'>
        <strong className='ocean-section__ocean-text ocean-section__ocean-text-reverse'>
          reverse
        </strong>
      </dt>
      <dd className='ocean-section__ocean-anim-direction-term'>
        Defines that all cycles of the animation are played in the reverse
        direction from the way they were specified.
      </dd>
      <dt className='ocean-section__ocean-anim-direction-definition'>
        <strong className='ocean-section__ocean-text ocean-section__ocean-text-alternate'>
          alternate
        </strong>
      </dt>
      <dd className='ocean-section__ocean-anim-direction-term'>
        Alternates between the normal direction and reverse direction.
        Therefore, the odd-numbered cycles are played in the{' '}
        <strong>normal</strong> direction, and the even-numbered iterations are
        played in a <strong>reverse</strong> direction.
      </dd>
      <dt className='ocean-section__ocean-anim-direction-definition'>
        <strong className='ocean-section__ocean-text ocean-section__ocean-text-alternate-reverse'>
          alternate-reverse
        </strong>
      </dt>
      <dd className='ocean-section__ocean-anim-direction-term'>
        Same as <strong>alternate</strong> except in reverse order. Therefore,
        the odd-numbered cycles are played in <strong>reverse</strong> direction
        and the even-numbered cycles are played in <strong>normal</strong>{' '}
        direction.
      </dd>
    </dl>
    <div className='ocean-section__ocean'>
      <div className='ocean-section__wave'></div>
      <div className='ocean-section__wave'></div>
    </div>
  </>
);

export default OceanSection;

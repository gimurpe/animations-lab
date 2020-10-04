import React, { useRef, useState } from 'react';
import './styles.scss';
import Envelope from '../../components/Envelope/Envelope.atom';
import Button from '../../components/Button/Button.atom';
import balloon from '../../assets/gifs/ballon-couple.gif';
import {
  BouncingSection,
  ConceptsSection,
  OceanSection,
  FirefliesSection,
  PaintingSection,
  ReferencesSection,
} from '../../components';

const HomePage = () => {
  const [state, setState] = useState({
    throwConfetti: false,
    videoReady: false,
  });

  const envelopeRef = useRef(null);

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
        <ConceptsSection />
      </section>
      <section className='homepage__ocean-section'>
        <OceanSection />
      </section>
      <section className='homepage__bouncing-section'>
        <BouncingSection />
      </section>
      <section className='homepage__fireflies-section'>
        <FirefliesSection />
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
        <PaintingSection />
      </section>
      <section className='homepage__references-section'>
        <ReferencesSection />
      </section>
    </div>
  );
};

export default HomePage;

import React from 'react';
import './styles.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { constants } from '../../constants';

const BouncingSection = () => (
  <>
    <h3 className='bouncing-section__concept-title'>
      Make your animation feel natural
    </h3>
    <div className='bouncing-section__bouncing-blocks-wrapper'>
      <div className='bouncing-section__bouncing-block'>
        <div className='bouncing-section__bouncing-btn  bouncing-section__bouncing-1-btn' />
        <SyntaxHighlighter
          className='bouncing-section__bouncing-btn-code'
          language='css'
          style={atomOneLight}
        >
          {constants.BOUNCE_1_CSS}
        </SyntaxHighlighter>
      </div>
      <div className='bouncing-section__bouncing-block'>
        <div className='bouncing-section__bouncing-btn bouncing-section__bouncing-2-btn' />
        <SyntaxHighlighter
          className='bouncing-section__bouncing-btn-code'
          language='css'
          style={atomOneLight}
        >
          {constants.BOUNCE_2_CSS}
        </SyntaxHighlighter>
      </div>
      <div className='bouncing-section__bouncing-block'>
        <div className='bouncing-section__bouncing-btn bouncing-section__bouncing-3-btn' />
        <SyntaxHighlighter
          className='bouncing-section__bouncing-btn-code'
          language='css'
          style={atomOneLight}
        >
          {constants.BOUNCE_3_CSS}
        </SyntaxHighlighter>
      </div>
      <div className='bouncing-section__bouncing-block'>
        <div className='bouncing-section__bouncing-btn bouncing-section__bouncing-4-btn' />
        <SyntaxHighlighter
          className='bouncing-section__bouncing-btn-code'
          language='css'
          style={atomOneLight}
        >
          {constants.BOUNCE_4_CSS}
        </SyntaxHighlighter>
      </div>
      <div className='bouncing-section__bouncing-block'>
        <div className='bouncing-section__bouncing-btn bouncing-section__bouncing-5-btn' />
        <SyntaxHighlighter
          className='bouncing-section__bouncing-btn-code'
          language='css'
          style={atomOneLight}
        >
          {constants.BOUNCE_5_CSS}
        </SyntaxHighlighter>
      </div>
      <div className='bouncing-section__bouncing-block'>
        <div className='bouncing-section__bouncing-btn bouncing-section__bouncing-6-btn' />
        <SyntaxHighlighter
          className='bouncing-section__bouncing-btn-code'
          language='css'
          style={atomOneLight}
        >
          {constants.BOUNCE_6_CSS}
        </SyntaxHighlighter>
      </div>
      <div className='bouncing-section__bouncing-block'>
        <div className='bouncing-section__bouncing-btn bouncing-section__bouncing-7-btn' />
        <SyntaxHighlighter
          className='bouncing-section__bouncing-btn-code'
          language='css'
          style={atomOneLight}
        >
          {constants.BOUNCE_7_CSS}
        </SyntaxHighlighter>
      </div>
    </div>
  </>
);

export default BouncingSection;

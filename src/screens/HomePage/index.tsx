import React from 'react';
import './styles.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  docco,
  atomOneLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {};

const HomePage = () => {
  const bouncingBtnHtml = `
  @keyframes bouncing{
    0%  { bottom: 0; box-shadow: 0 0 5px rgba(0,0,0,0.5);}
    100%{ bottom: 50px; box-shadow: 0 50px 50px rgba(0,0,0,0.1);}
  }
  .loading-button{ animation: bouncing 0.5s cubic-bezier(0.1,0.25,0.1,1) 0s infinite alternate both;}
  `;

  const encodedStr = bouncingBtnHtml.replace(
    /[\u00A0-\u9999<>\&]/gim,
    function (i) {
      return '&#' + i.charCodeAt(0) + ';';
    }
  );
  return (
    <div className='homepage'>
      <div className='homepage__bouncing-btn'>Loading</div>
      <SyntaxHighlighter
        className='homepage__bouncing-btn-code'
        language='css'
        style={atomOneLight}
      >
        {bouncingBtnHtml}
      </SyntaxHighlighter>
    </div>
  );
};

export default HomePage;

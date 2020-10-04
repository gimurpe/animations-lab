import React from 'react';
import './styles.scss';

const ReferencesSection = () => (
  <div className='references-section'>
    <div className='references-section__title'>
      <h1>References</h1>
    </div>
    <ul className='references-section__references'>
      <li className='references-section__reference'>
        <a
          className='references-section__reference-link'
          href='https://css-tricks.com/making-css-animations-feel-natural/'
        >
          Make your animations feel more natural
        </a>
      </li>
      <li className='references-section__reference'>
        <a
          className='references-section__reference-link'
          href='https://www.awwwards.com/'
        >
          Awwwards
        </a>
      </li>
      <li className='references-section__reference'>
        <a
          className='references-section__reference-link'
          href='https://bennettfeely.com/clippy/'
        >
          Clippy: Make your own clip path
        </a>
      </li>
      <li className='references-section__reference'>
        <a
          className='references-section__reference-link'
          href='https://css-art.com/'
        >
          Pure css art
        </a>
      </li>
      <li className='references-section__reference'>
        <a
          className='references-section__reference-link'
          href='https://www.creativebloq.com/advice/understand-the-12-principles-of-animation'
        >
          Disney's 12 principles of animation
        </a>
      </li>
      <li className='references-section__reference'></li>
      <li className='references-section__reference'></li>
      <li className='references-section__reference'></li>
      <li className='references-section__reference'></li>
      <li className='references-section__reference'></li>
    </ul>
    <ul className='references-section__circles'>
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
);

export default ReferencesSection;

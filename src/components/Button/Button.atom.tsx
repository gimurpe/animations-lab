// ========================================================================================
/*                                                                                      *
 * ATOM: ENVELOPE                                                                 *
 *                                                                                      */
// ========================================================================================
// * Lib
import React, { useRef } from 'react';

// * Utils

// * Styles
import './styles.scss';

// * Display/UI
type Props = {
  onPress?(): void;
};
const Button = (props: Props) => {
  const { onPress } = props;
  const heartCheckbox = useRef<HTMLInputElement>(null);

  return (
    <div className='heart-button'>
      <input
        ref={heartCheckbox}
        id='click'
        className='heart-button__checkbox'
        type='checkbox'
        onClick={onPress}
      />
      <label className='heart-button__label label' htmlFor='click'>
        <div className='heart-button__favourite favourite'>
          <div className='heart-button__favourite-heart favourite_heart'>
            <div className='heart-button__favourite-heart-left favourite_heart__left'></div>
            <div className='heart-button__favourite-heart-right favourite_heart__right'></div>
          </div>
          <div className='heart-button__favourite-text favourite_text'>
            <span className='heart-button__text-span'>Congratulations!</span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Button;

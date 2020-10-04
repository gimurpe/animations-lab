// ========================================================================================
/*                                                                                      *
 * ATOM: ENVELOPE                                                                 *
 *                                                                                      */
// ========================================================================================
// * Lib
import React, { ReactNode } from 'react';

// * Utils

// * Styles
import './styles.scss';

// * Display/UI
type Props = {
  message: string;
  children: ReactNode;
  stamps?: Array<ReactNode>;
  destinatary?: string;
};

const Envelope = React.forwardRef(
  (props: Props, ref?: React.Ref<HTMLDivElement>) => {
    const { message, stamps, destinatary } = props;

    return (
      <div className='flip-envelope'>
        <div className='flip-envelope__design design'>
          <div
            ref={ref}
            className='flip-envelope__envelope envelope'
            data-focused='false'
          >
            <div className='flip-envelope__cover cover'>
              <div className='flip-envelope__cover-bottom bottom'> </div>
              <div className='flip-envelope__cover-left left'></div>
              <div className='flip-envelope__cover-right right'> </div>
              <div className='flip-envelope__cover-top top'></div>
            </div>
            <div className='flip-envelope__paper'>
              <div className='flip-envelope__message-destinatary'>
                {destinatary}
              </div>
              <div className='flip-envelope__message'>{message}</div>
              {props.children}
            </div>
          </div>
          <div className='flip-envelope__envelope-back envelope-back'>
            {stamps}
          </div>
        </div>
      </div>
    );
  }
);

export default Envelope;

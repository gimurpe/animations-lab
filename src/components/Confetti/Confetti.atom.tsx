// ========================================================================================
/*                                                                                      *
 * ATOM: ENVELOPE                                                                 *
 *                                                                                      */
// ========================================================================================
// * Lib
import React, { useEffect, useRef } from 'react'
import ConfettiGenerator from 'confetti-js'

// * Utils

// * Styles
import './styles.scss'

// * Display/UI
type Props = {
   throwConfetti?: boolean
}
const Confetti = (props: Props) => {
   const { throwConfetti = false } = props
   const confettiSettings = { target: 'my-canvas' }
   const confetti = useRef(null)
   useEffect(() => {
      confetti.current = new ConfettiGenerator(confettiSettings)
   }, [])

   useEffect(() => {
      if (throwConfetti) {
         confetti.current.render()
      }
   }, [throwConfetti])

   return <canvas ref={confetti} className="confetti" id="my-canvas"></canvas>
}

export default Confetti

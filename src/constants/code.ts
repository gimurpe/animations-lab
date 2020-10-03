export const BOUNCE_1_CSS = `
&__bouncing-1-btn {
  animation-name: bounce-1;
  animation-timing-function: linear;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes bounce-1 {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
}`;
export const BOUNCE_2_CSS = `
&__bouncing-2-btn {
  animation-name: bounce-2;
  animation-timing-function: ease;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes bounce-2 {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
}`;
export const BOUNCE_3_CSS = `
&__bouncing-3-btn {
  animation-name: bounce-3;
  animation-timing-function: ease;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes bounce-3 {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-100px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}`;
export const BOUNCE_4_CSS = `
&__bouncing-4-btn {
  animation-name: bounce-4;
  animation-timing-function: ease;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes bounce-4 {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-100px);
  }
  50% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}`;
export const BOUNCE_5_CSS = `
&__bouncing-5-btn {
  animation-name: bounce-5;
  animation-timing-function: ease;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes bounce-5 {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-100px);
  }
  50% {
    transform: scale(1, 1) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(-7px);
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}`;
export const BOUNCE_6_CSS = `
&__bouncing-6-btn {
  animation-name: bounce-6;
  animation-timing-function: ease;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes bounce-6 {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-100px);
  }
  50% {
    transform: scale(1.05, 0.95) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(-7px);
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}`;
export const BOUNCE_7_CSS = `
&__bouncing-7-btn {
  animation: bounce-7 2s cubic-bezier(0.28, 0.84, 0.42, 1) 0s infinite
    alternate none;
}

@keyframes bounce-7 {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-100px);
  }
  50% {
    transform: scale(1.05, 0.95) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(-7px);
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}`;

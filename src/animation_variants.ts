import { Variants } from 'framer-motion'


    
export const animateVart1: Variants = {
    offscreen: {
      x: -300,
    //   y: 100,
      rotate: -50,
      visibility: "hidden"
    },
    onscreen: {
      x: 0,
      rotate: 0,
      visibility: "visible",
    }
  };


  export const animateVart2: Variants = {
    offscreen: {
      x: 300,
    //   y: 100,
      rotate: +50,
      visibility: "hidden"
    },
    onscreen: {
      x: 0,
      rotate: 0,
      visibility: "visible"
    }
  };



  export const animateVart3: Variants = {
    offscreen: {
      y: 100,
      size: 0,
      opacity: 0
    },
    onscreen: {
        y: 0,
        size: 1,
        opacity: 1
    }
  };


  export const animateVart4: Variants = {
    offscreen: {
      y: -100,
      size: 0,
      opacity: 0
    },
    onscreen: {
        y: 0,
        size: 1,
        opacity: 1
    }
  };




  export const animateVartLeft: Variants = {
    offscreen: {
      x: -300,
      visibility: "hidden"
    },
    onscreen: {
      x: 0,
      visibility: "visible",
    }
  };



  export const animateVartRight: Variants = {
    offscreen: {
      x: 300,
      visibility: "hidden"
    },
    onscreen: {
      x: 0,
      visibility: "visible",
    }
  };

  export const visibleComponent: Variants = {
    offscreen: {visibility: "hidden"},
    onscreen: {visibility: "visible"}
  }
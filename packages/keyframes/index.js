module.exports = {
  theme: {
    extend: {
      keyframes: {
        openDialogMobile: {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        closeDialogMobile: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(100%)" },
        },
        openDialogDesktop: {
          "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
        closeDialogDesktop: {
          "0%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
          "100%": {
            opacity: 0,
            transform: "translate(-50%, -48%) scale(0.96)",
          },
        },
        slideUpAndFade: {
          "0%": { opacity: 0, transform: "translateY(2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          "0%": { opacity: 0, transform: "translateX(-2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideDownAndFade: {
          "0%": { opacity: 0, transform: "translateY(-2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          "0%": { opacity: 0, transform: "translateX(2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        closePopup: {
          "0%": { opacity: 1, transform: "scale(1)" },
          "100%": { opacity: 0, transform: "scale(0.98)" },
        },
      },
      animation: {
        "open-dialog-mobile": "openDialogMobile 150ms ease-out",
        "close-dialog-mobile": "closeDialogMobile 100ms ease-in",
        "open-dialog-desktop": "openDialogDesktop 150ms ease-out",
        "close-dialog-desktop": "closeDialogDesktop 100ms ease-in",
        "open-popup-top": "slideUpAndFade 300ms ease-out",
        "open-popup-right": "slideRightAndFade 300ms ease-out",
        "open-popup-bottom": "slideDownAndFade 300ms ease-out",
        "open-popup-left": "slideLeftAndFade 300ms ease-out",
        "close-popup": "closePopup 100ms ease-in",
      },
    },
  },
};

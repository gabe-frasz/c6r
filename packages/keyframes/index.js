module.exports = {
  theme: {
    extend: {
      keyframes: {
        openDialogMobile: {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        closeDialogMobile: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
        },
        openDialogDesktop: {
          "0%": {
            opacity: 0,
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
        closeDialogDesktop: {
          "0%": {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
          "100%": {
            opacity: 0,
            transform: "translate(-50%, -48%) scale(0.96)",
          },
        },
        openDialogOverlay: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        closeDialogOverlay: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        openPopover: {
          "0%": {
            opacity: 0,
            transform: "translateY(0.25rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        closePopover: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(0.25rem)",
          },
        },
      },
      animation: {
        "open-dialog-mobile": "openDialogMobile 150ms ease-out",
        "close-dialog-mobile": "closeDialogMobile 100ms ease-in",
        "open-dialog-desktop": "openDialogDesktop 150ms ease-out",
        "close-dialog-desktop": "closeDialogDesktop 100ms ease-in",
        "open-dialog-overlay": "openDialogOverlay 100ms",
        "close-dialog-overlay": "closeDialogOverlay 100ms",
        "open-popover": "openPopover 100ms ease-out",
        "close-popover": "closePopover 100ms ease-in",
        "open-tooltip": "openPopover 100ms ease-out",
        "close-tooltip": "closePopover 100ms ease-in",
      },
    },
  },
};

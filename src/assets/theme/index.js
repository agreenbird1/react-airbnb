const lightTheme = {
  fontColor: '#222222',
  secondaryFontColor: '#717171',
  mixins: {
    hoverShadow: `
      transition: box-shadow 0.2s cubic-bezier(0.2, 0, 0, 1);
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      }
    `,
  },
}

export default lightTheme

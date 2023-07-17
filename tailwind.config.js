module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#F8765E',
        'light-blue': '#9BDBE7',
        'dark-blue': '#031D5B',
        'text-grey-blue': '#5B6C94',
        'custom-gray': '#CDCDCD',
      },
      backgroundImage: {
        'flags-svg': "url('svg/quotes.svg')",
        'little-quotes-o': "url('svg/little_quotes_o.svg')",
        'little-quotes-w': "url('svg/little_quotes_w.svg')",
      },
      borderRadius: {
        DEFAULT: '20px',
      },
      fontSize: {
        'custom-18/36': ['18px', '36px'],
        'custom-18/26': ['18px', '26px'],
        'custom-48/60': ['48px', '60px'],
        'custom-34/45': ['34px', '45px'],
        'custom-20/26': ['20px', '26px'],
        'custom-16/32': ['16px', '32px'],
      },
      dropShadow: {
        'custom-input': 'box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.30) inset',
      },
      spacing: {
        '72px': '72px',
      },
      margin: {
        '30px': '30px',
      },
    },
  },
  plugins: [],
};

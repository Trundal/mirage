import localFont from 'next/dist/compiled/@next/font/dist/local'

const mabry = localFont({
  src: [
    {
      path: './Mabry-Pro.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Mabry-Pro-Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
})

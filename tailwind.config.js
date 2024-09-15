/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Frontend/HTML/*.html',
    './Frontend/Javascript/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'hblue': '#071739',     // Warna biru kustom
        'mblue': '#4B6382',    // Warna hijau kustom
        'lblue': '#A4B5C4',      // Warna merah kustom
        'wayt': '#CDD5DB',   // Warna kuning kustom
        'lgoldd': '#EAB308',   // Warna ungu kustom
        'hgoldd' : '#D9C895',
        'fhgoldd' : '#735703',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports={
  content:["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme:{extend:{
    colors:{baby:{blue:"#BEE3FF",pink:"#FFC7E3",green:"#CFF5D2"},ink:"#40384A"},
    boxShadow:{dreamy:"0 20px 50px rgba(190,227,255,0.45)",sticker:"2px 4px 0 #93c2f5"}
  }},
  plugins:[]
};
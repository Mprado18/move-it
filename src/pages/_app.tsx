import '../styles/global.css';


function MyApp({ Component, pageProps }) {
  
//sidebar ou algo fixo no site que não deverá mudar durante navegação
  return (
      <Component {...pageProps} /> 
  )
}

export default MyApp
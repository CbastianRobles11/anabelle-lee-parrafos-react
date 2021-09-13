import React, { useState , Component} from 'react';
import data from './data';


function App() {

  //el valor inicial
  const [count,setCount]= useState(0);

  //inicialice el parrafo vacio
  const[text,setText]=useState([])


  //funcion del formulario al hacer submit
  const  handleSubmit=(e)=>{
    e.preventDefault();

    //lo que pasamos del index
    console.log(count);
    let valorIndex=count;

    //paso la data el slice trae elementos de un array de tal a tal numero
    if (valorIndex>= data.length) {
      return  setText(data.slice(0,data.length))

    }

    setText(data.slice(0,valorIndex))

  }

  return (
    <section className="section-center">
      <h3>Annabel Lee</h3>
      <h4> -Edgar Allan Poe- </h4>
     
     {/* //formulario donde mandaremos el numero de filas */}
      <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount"> 
            Parrafos :
          </label>
          <input type="number" name="amount" id="amount" 
          value={count} 
          //para que solo acepte numeros positivos y maximo dos
          min="0"
          max={data.length}
          onChange={(e)=>{
            //para tomar el valor de el input el setAcount
              setCount(e.target.value)
          }}
          />

          <button type="submit" className="btn" >Generar</button>


      </form>

      <article className="lorem-text">
          {text.map((item,index)=>{
            return <p key={index}>
                {item}
            </p>
          })}
          
      </article>  

    </section>
  );
}

export default App;

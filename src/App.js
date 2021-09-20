import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas'

function App() {

  //consfiguracion y edicion del primer input 
  const [linea1, setlinea1] = useState('');
  //consfiguracion y edicion del segundo input
  const [linea2, setlinea2] = useState('');
  //consfiguracion y edicion del boton 
  const [imagen, setimagen] = useState('fire');

  //funcion para obtener el primer input
  const onChangeLinea1 = (valor) =>{
    setlinea1(valor.target.value)
  };
  //función para obtener el segundo input
  const onChangeLinea2 = (valor) =>{
    setlinea2(valor.target.value)
  };

  const onChangeImagen = (valor)=>{
    setimagen(valor.target.value)
  };
  const onClickExportar = ()=>{
    alert('exportar');
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL('image/png');
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  
  }

  return (

    <div className="App">
     {/*Select picker de memes */}
      <select className="select" onChange={onChangeImagen}>
        <option className="option" value="fire">Casa en llamas</option>
        <option className="option" value="futurama">Futurama</option>
        <option className="option" value="history">History Channel</option>
        <option className="option" value="matrix">Matrix</option>
        <option className="option" value="philosoraptor">Philosoraptor</option>
        <option className="option" value="smart">Smart Guy</option>
      </select><br/>
     {/*Input text-primer línea*/}
     <input onChange={onChangeLinea1}  className="input" type="text" placeholder="  Texto superior" /> <br/>
     {/*Input text -Segunda línea*/}
     <input  onChange={onChangeLinea2} className="input" type="text" placeholder="  Texto inferior" /><br/>
     {/*Boton exportar*/}
     <button onClick={onClickExportar} className="boton">Exportar</button>

      {/*Extructura del meme */}
      <div className="meme" id="meme">
        <span className="linea1">{linea1}</span><br/>
        <span className="linea2">{linea2}</span>
        <img src={'/img/'+imagen+'.jpg'} alt="" />
      </div>
    </div>
  );
}

export default App;

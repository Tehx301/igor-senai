import { useState } from 'react';
import senaiFundo from './assets/background-hero.png';
import senai from './assets/senai-logo.png';
import pessoas from './assets/ico-01.png'
import dificil from './assets/ico-02.png'
import referencia from './assets/ico-03.png'
import alunos from './assets/ico-04.png'
import './App.css';

function App() {


  return (
    <div className='CONTEINER'>
      <div className='rodaPe'> 
      <p className='itemRodape'>IFIESC</p>
      <p className='itemRodape'>CIESC</p> 
       <p className='itemRodape'>SESI</p>
        <p className='itemRodape'>SENAI</p>
        <p className='itemRodape'> IEL</p>

         <img src={senai} className='senaiLogo'/>
        </div>

      <div className='rodaPe2'> 
      <p className='itemRodape2'>institucional</p>
      <p className='itemRodape2'>Para você</p> 
       <p className='itemRodape2'>Para empresas</p>
        <p className='itemRodape2'>Já sou aluno</p>
        <p className='itemRodape2'> Transparência</p>
        </div>

     

      <img src={senaiFundo} className='senaiFundo'/>
<div className='titulo'>
<p className='preto'>A instituicão que tem o </p> <p className='azul'> DNA da indústria</p>
</div>

<p className='testinho'>Referência no país inteiro, o SENAI trabalha todos os dias para estimular a inovação e a competitividade da indústria, por meio de serviços de educação, consultorias, pesquisas</p><p className='testinho'>aplicadas e serviços tecnológicos.</p>


<div className='caixinhass'>
  <div className='caixa'>
<img className='imagen' src={pessoas} alt='oi'/>
<p className='preto' >Mais de <span className='azul2'>200.000</span> alunos</p><p className='preto'>formados</p>
</div>

  <div className='caixa'>
<img className='imagen' src={dificil} alt='oi'/>
<p className='azul2' >Maior complexo de educaçao <span className='preto'>proficional da América Latina</span> alunos</p>
</div>

  <div className='caixa'>
<img className='imagen' src={referencia} alt='oi'/>
<p className='preto' >Referência mundial em<span className='azul2'>qualidade de ensino</span></p>
</div>

  <div className='caixa'>
<img className='imagen' src={alunos} alt='oi'/>
<p className='preto' >=Alunos SENAI são <span className='azul2'>preferência no mercado de trabalho</span> =</p>
</div>
</div>
    </div>
  )
}

export default App

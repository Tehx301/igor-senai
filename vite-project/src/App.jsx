import senaiFundo from './assets/background-hero.png';
import senai from './assets/senai-logo.png';
import pessoas from './assets/ico-01.png';
import dificil from './assets/ico-02.png';
import referencia from './assets/ico-03.png';
import alunos from './assets/ico-04.png';
import Você from './assets/ico-05.png';
import empresas from './assets/ico-06.png';
import fim from './assets/background-container.png';
import insta from './assets/ico-instagram.png';
import face from './assets/ico-facebook.png';
import youtub from './assets/ico-youtube.png';
import lin from './assets/ico-linkedin.png';
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
      </div>


      <div className='rodaPe2'>
        <img src={senai} className='senaiLogo' />
        <p className='itemRodape2'>institucional</p>
        <p className='itemRodape2'>Para você</p>
        <p className='itemRodape2'>Para empresas</p>
        <p className='itemRodape2'>Já sou aluno</p>
        <p className='itemRodape2'> Transparência</p>
      </div>



      <img src={senaiFundo} className='senaiFundo' />
      <div className='titulo'>
        <p className='preto'>A instituicão que tem o </p> <p className='azul'> DNA da indústria</p>
      </div>

      <p className='testinho'>Referência no país inteiro, o SENAI trabalha todos os dias para estimular a inovação e a competitividade da indústria, por meio de serviços de educação, consultorias, pesquisas</p><p className='testinho'>aplicadas e serviços tecnológicos.</p>


      <div className='caixinhas'>
        <div className='caixa'>
          <img className='imagen' src={pessoas} alt='oi' />
          <p className='preto2' >Mais de <span className='azul2'>200.000</span> alunos</p><p className='preto2'>formados</p>
        </div>

        <div className='caixa'>
          <img className='imagen' src={dificil} alt='oi' />
          <p className='azul2' >Maior complexo de educaçao <span className='preto2'>proficional da América Latina</span></p>
        </div>

        <div className='caixa'>
          <img className='imagen' src={referencia} alt='oi' />
          <p className='preto2' >Referência mundial em <span className='azul2'> qualidade de ensino</span></p>
        </div>

        <div className='caixa'>
          <img className='imagen' src={alunos} alt='oi' />
          <p className='preto2' >Alunos SENAI são <span className='azul2'>preferência no mercado de trabalho</span></p>
        </div>
      </div>
      <div className='caixasMaior'>
        <div className='caixa2'>

          <img className='imagen2' src={Você} />

          <h1 className='azul3'>Para você</h1>
          <p className='pretoFraco1'>Cursos profissionalizantes, graduações e especializações desenhadas para acelerar sua carreira na indústria.</p>
          <div className='quadradoAzul'>
            <h2 className='preto3'>Educação Profissional</h2>
            <p className='pretoFraco'>Formação para quem deseja construir carreira na indústria.</p>
          </div>
          <br></br>
          <div className='quadradoAzul'>
            <h2 className='preto3'>Ensino Superior</h2>
            <p className='pretoFraco'>Formação superior voltada para qualificar profissionais na indústria.</p>
          </div>
        </div>
        <div className='caixa2'>
          <img className='imagen2' src={empresas} />
          <h1 className='azul3'>Para empresas</h1>

          <p className='pretoFraco1' >Capacitações personalizadas e outras soluções inovadoras para impulsionar a competitividade do seu negócio.</p>
          <div className='quadradoAzul'>
            <h2 className='preto3' >Educação Corporativa</h2>
            <p className='pretoFraco' >Capacitações customizadas para melhorar a produtividade da sua empresa.</p>
          </div>
          <br></br>
          <div className='quadradoAzul'>
            <h2 className='preto3' >Inovação e Tecnologia</h2>
            <p className='pretoFraco' >PD&I, consultorias e metrologia para uma indústria mais competitiva.</p>
          </div>
        </div>
      </div>
      <div className='fim-conteudo'>
        <div className='fim'>
          <h2>Seu próximo curso a um clique</h2>
          <p>Conheça o portal com as ofertas de cursos da Educação Profissional e Ensino Superior do SENAI.</p>
          <button>Garanta sua vaga</button>
          <img src={fim} className='imagen3' />
        </div>
      </div>
      <div className='rodaPeFIM'>
        <img src={senai} className='senaiLogoFim' />
        <img className='publi' src={insta} />
        <img className='publi' src={lin} />
        <img className='publi' src={face} />
        <img className='publi' src={youtub} />
      </div>
    </div >
  )
}

export default App

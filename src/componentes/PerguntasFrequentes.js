import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AddIcon from '@material-ui/icons/Add';

const estilos = makeStyles((theme) => ({
  root: {
    display: 'grid',
    minHeight: '250px',
    margin: '3% 10% 3% 10%'
  },
  titulo: {
    width: '100%',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '3.125em',
    fontFamily: 'Helvetica Neue, Helvetica , Arial ,sans-serif',
    marginBottom: '5%'
  },
  hr: {
    backgroundColor: '#333333',
    height: '10px',
    width: '100%',
    border: 'none',
  },
  rootAcordeon: {
    width: '100%',
  },
  principal: {
    marginBottom: '1%',
  },
  cabecalho: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  segundoCabecalho: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  faixaTitAcordeon: {
    border: 'none',
    backgroundColor: '#363636',
    minHeight: '70px',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'start',
  },
  iconMais: {
    color:'#fff',
  }
}));
const PerguntasFrequentes = () => {
  const classes = estilos();
  const [expande, setExpande] = useState(false);

  const mudarExpansao = (panel) => (event, isExpanded) => {
    setExpande(isExpanded ? panel : false);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.titulo}>
          <Typography variant="h2">
            Perguntas Frequentes
          </Typography>
        </div>
        <div className={classes.rootAcordeon}>
          <Accordion className={classes.principal} expanded={expande === 'panel1'} onChange={mudarExpansao('panel1')}>
            <AccordionSummary
              expandIcon={<AddIcon className={classes.iconMais} fontSize="large" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className={classes.faixaTitAcordeon}
            >
              <Typography  variant="h5">O que é a Netflix</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.faixaTitAcordeon}>
              <Typography variant="h5">
              <p>A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.</p>

              <p>Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.</p>
          </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.principal} expanded={expande === 'panel2'} onChange={mudarExpansao('panel2')}>
            <AccordionSummary
              expandIcon={<AddIcon className={classes.iconMais} fontSize="large" />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              className={classes.faixaTitAcordeon}
            >
              <Typography variant="h5" className={classes.heading}>Quanto custa a Netflix</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.faixaTitAcordeon}>
              <Typography variant="h5">
              <p>Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$21,90 a R$45,90 por mês. Sem contrato nem taxas extras.</p>
          </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.principal} expanded={expande === 'panel3'} onChange={mudarExpansao('panel3')}>
            <AccordionSummary
              expandIcon={<AddIcon className={classes.iconMais} fontSize="large" />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
              className={classes.faixaTitAcordeon}
            >
              <Typography className={classes.heading} variant="h5">Onde posso assistir?</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.faixaTitAcordeon}>
              <Typography variant="h5">
              <p>Assista onde quiser, o quanto quiser e em um número ilimitado de aparelhos. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.</p>

              <p>Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.principal} expanded={expande === 'panel4'} onChange={mudarExpansao('panel4')}>
            <AccordionSummary
              expandIcon={<AddIcon className={classes.iconMais} fontSize="large" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              className={classes.faixaTitAcordeon}
            >
              <Typography variant="h5" className={classes.heading}>Como faço para cancelar?</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.faixaTitAcordeon}>
              <Typography variant="h5">
                <p>A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.principal} expanded={expande === 'panel5'} onChange={mudarExpansao('panel5')}>
            <AccordionSummary
              expandIcon={<AddIcon className={classes.iconMais} fontSize="large" />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
              className={classes.faixaTitAcordeon}
            >
              <Typography variant="h5" className={classes.heading}>O que eu posso assistir na Netflix?</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.faixaTitAcordeon}>
              <Typography variant="h5">
                <p>A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <hr className={classes.hr} />
    </>
  );
};

export default PerguntasFrequentes;

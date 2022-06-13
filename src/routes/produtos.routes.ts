/* eslint-disable import/no-extraneous-dependencies */
import { Router } from 'express';

import VotosCadastro from '../services/VotosCadastro';
import ProdutosConsulta from '../services/ProdutoConsulta';

const produtosRoter = Router();

produtosRoter.post('/', VotosCadastro);
produtosRoter.get('/', ProdutosConsulta);


export default produtosRoter;

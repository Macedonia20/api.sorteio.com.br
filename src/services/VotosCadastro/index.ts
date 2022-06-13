import { Response, Request } from 'express';
import { getRepository } from 'typeorm';

import Votos from '../../models/Produto';

const VotosCadastro = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  // try {
    // const conexao = getRepository(Votos);

    // const { candidato, ddd } = request.body;
    
    // const ip = request.socket.remoteAddress

    // const resposta = await conexao.insert({ ip, candidato, ddd });

    //  return response.json(resposta);  
  // } catch (error) { 
  //   if(error.code ==='ER_DUP_ENTRY'){
  //     return response.status(200).json('');
  //   } 
  //   return response.status(400).json(error);
  // }

};

export default VotosCadastro;

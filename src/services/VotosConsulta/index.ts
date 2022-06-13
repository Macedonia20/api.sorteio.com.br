import { Response, Request } from 'express';
import { getRepository } from 'typeorm';

import Votos from '../../models/Produto';

const VotosConsulta = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  // try {
    // const conexao = getRepository(Votos);
    // // @ts-ignore: Unreachable code error
    // const resultado = await conexao.query( `
    //   SELECT candidato, COUNT(*) 
    //   as Votos, truncate((count(*)/(select
    //   count(1) 
    //   from voto))*100,0 )
    //   as porcentagem ,
    //   lower(concat(replace(candidato, ' ', '-'), '.png')) as candidatofoto
    //   FROM voto GROUP BY candidato`
    // );  

    // if (!resultado) {
    //   return response
    //     .status(200)
    //     .json(0);
    // }

    // return response.json(resultado);
  // } catch (error) {
  //   return response.status(400).json(error);
  // }
};

export default VotosConsulta;

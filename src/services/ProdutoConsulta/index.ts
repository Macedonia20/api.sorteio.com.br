import { Response, Request } from 'express';
import { getRepository } from 'typeorm'

import Produtos from '../../models/Produto'

const ProdutosConsulta = async (
    request: Request, 
    response: Response, 
): Promise<Response> => {
    try{
        const conection = getRepository(Produtos);
        const result = await conection.query(`
        SELECT * FROM sorteios.produto;
        `)

        if (!result) {
            return response
            .status(200)
            .json(0);
        }

        return response.json(result);
    } catch (error) {
        return response.status(400).json(error);
    }
};

export default ProdutosConsulta;

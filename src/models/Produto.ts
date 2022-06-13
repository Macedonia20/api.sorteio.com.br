import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produto')
class Produtos {
  @PrimaryGeneratedColumn()
  idproduto: number;

  @Column()
  nome: string;

  @Column()
  url: string;

}
export default Produtos;

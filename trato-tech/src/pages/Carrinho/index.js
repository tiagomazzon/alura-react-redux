import Header from 'components/Header';
import styles from './Carrinho.module.scss';
import { useSelector } from 'react-redux';
import Item from 'components/Item';

export default function Carrinho() {
  const carrinho = useSelector(store => {
    const carrinhoReduce = store.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = store.itens.find(item => item.id === itemNoCarrinho.id);
      itens.push({
        ...item,
        quantidade: itemNoCarrinho.quantidade,
      });
      return itens;
    }, []);
    return carrinhoReduce;
  })
  return (
    <div>
      <Header
        titulo='Carrinho de compras'
        descricao='Confira produtos que você adicionou ao carrinho.'
      />
      <div className={styles.carrinho}>
        {carrinho.map(item =>  <Item key={item.id} {...item} carrinho />)}
        <div className={styles.total}>
          <strong>
            Resumo da Compra
          </strong>
          <span>
            Subtotal: <strong> R$ {0.0.toFixed(2)}</strong>
          </span>
        </div>
      </div>
    </div>
  )
}
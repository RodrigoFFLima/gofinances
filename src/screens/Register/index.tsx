import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../../components/Form/CategorySelect';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes
} from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />
          <TransactionTypes>
            <TransactionTypeButton
              type='up'
              title='Income'
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactionType === 'up'}
            ></TransactionTypeButton>
            <TransactionTypeButton
              type='down'
              title='Outcome'
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactionType === 'down'}
            ></TransactionTypeButton>
          </TransactionTypes>

          <CategorySelect title='Categoria'></CategorySelect>
        </Fields>

        <Button title='Enviar' />
      </Form>
    </Container>
  );
}

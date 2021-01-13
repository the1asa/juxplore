import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

// const Modal = (props) => {
// };


const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    border: '1px solid #fff',
  }
};

export default () => {
  // const [displayModal, setDisplayModal] = useState(false);

  // const openModal = () => setDisplayModal(true);

  const [displayModal, setDisplayModal] = React.useState(false);
  const openModal = () => { setDisplayModal(true); };
  const closeModal = () => { setDisplayModal(false); };

  return (
    <div>
      {/* { displayModal
        ? <span>test</span>
        : <Button onClick={openModal}>SUBSCRIBE</Button>
      } */}
      <SubButton onClick={openModal}>SUBSCRIBE</SubButton>
      <Modal
        isOpen={displayModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Column>
          <Text>If you would like to receive updates when new articles are published, please enter your email.</Text>
          <Input type="email" placeholder="mail@example.com" />
          <PostButton onClick={closeModal}>SUBSCRIBE NOW</PostButton>
        </Column>
      </Modal>
    </div>
  );
};

const Input = styled.input`
  padding: 10px;
  margin: 0.25rem;
  border-bottom: 1px solid black;
  width: 80%;
  font-size: 20px;
  font-family: "Ubuntu", sans-serif;
`;

const PostButton = styled.button`
  margin: 0.25rem;
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  background-color: var(--highlight-color);
  color: var(--site-background-color);
  border-color: var(--highlight-color);
  width: 80%;
  padding: 10px;

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  margin: 0.5rem;
  text-align: center;
`;

const SubButton = styled.button`
  margin: 0 1rem 0 1rem;
  background-color: var(--site-background-color);
  border-color: var(--highlight-color);
  color: var(--highlight-color);
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  &:hover {
    background-color: var(--highlight-color);
    color: var(--site-background-color);
  }
`;

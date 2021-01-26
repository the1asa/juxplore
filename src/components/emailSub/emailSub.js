import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Spinner from '../spinner';

import { Email } from '../icons/icons';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 999999
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

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default ({ isBurger }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [subscribed, setSubscribed] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const openModal = () => { setDisplayModal(true); };
  const closeModal = () => {
    setEmail('');
    setError(null);
    setSubscribed(false);
    setDisplayModal(false);
  };
  async function postEmail() {
    setIsSaving(true);

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: process.env.GATSBY_MAIL_KEY },
      body: JSON.stringify({
        email,
        subscribed: false
      })
    };

    try {
      await fetch('https://api.mailbluster.com/api/leads', options);
      setSubscribed(true);
    } catch (err) {
      setError(err);
    }

    setIsSaving(false);
  }

  return (
    <div>
      { isBurger
        ? (
          <Row onClick={openModal}>
            <EmailIcon />
            <LinkTitle>SUBSCRIBE</LinkTitle>
          </Row>
        )
        : <SubButton onClick={openModal}>SUBSCRIBE</SubButton>
      }
      <Modal
        isOpen={displayModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        { error
            && (
            <Column>
              <Text>Something went wrong, please try again.</Text>
              { isSaving
                ? <SpinnerWrapper><Spinner /></SpinnerWrapper>
                : <PostButton onClick={postEmail} disabled={!isEmailValid(email)}>RESUBMIT</PostButton>
                }
            </Column>
            )
          }
        { subscribed
            && (
            <Column>
              <Text>Got it! Please whitelist asa@juxplore.com to ensure that my emails won't go to your spam folder. You can unsubscribe at any time using the link in my emails.</Text>
              <PostButton onClick={closeModal}>CLOSE</PostButton>
            </Column>
            )
          }
        { !error && !subscribed
              && (
              <Column>
                <Text>If you would like to receive updates when new articles are published, please enter your email.</Text>
                <Input type="email" placeholder="mail@example.com" onChange={e => setEmail(e.target.value)} />
                { isSaving
                  ? <SpinnerWrapper><Spinner /></SpinnerWrapper>
                  : <PostButton onClick={postEmail} disabled={!isEmailValid(email)}>SUBSCRIBE NOW</PostButton>
                }
              </Column>
              )
          }
      </Modal>
    </div>
  );
};

const EmailIcon = styled(Email)`
  color: whitesmoke;
`;

const Input = styled.input`
  padding: 10px;
  margin: 0.25rem;
  border-bottom: 1px solid black;
  width: 80%;
  font-size: 20px;
  font-family: "Ubuntu", sans-serif;
`;

const SpinnerWrapper = styled.div`
  margin: 0.25rem;
  background-color: var(--highlight-color);
  border-color: var(--highlight-color);
  width: 80%;
  padding; 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const PostButton = styled.button`
  margin: 0.25rem;
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  background-color: var(--highlight-color);
  color: white;
  border-color: var(--highlight-color);
  width: 80%;
  padding: 10px;

  ${props => (props.disabled
    ? `
    opacity: 0.5;
    cursor: not-allowed;
    `
    : `
    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }
    `)};
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
  color: black;
`;

const SubButton = styled.button`
  margin: 0 1rem 0rem 1rem;
  background-color: var(--primary-background-color);
  border-color: var(--highlight-color);
  color: var(--highlight-color);
  font-family: "Ubuntu", sans-serif;
  cursor: pointer;
  font-size: 10px;
  &:hover {
    background-color: var(--highlight-color);
    color: var(--primary-background-color);
    font-color: var(--primary-background-color);
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: 0.5rem;
  cursor: pointer;
`;

const LinkTitle = styled.span`
  font-size: 10px;
  font-family: "Ubuntu", sans-serif;
  transition: all 0.25s;
  margin-left: 0.25rem;
  color: whitesmoke;

  &:hover {
    color: var(--highlight-color);
  }
`;

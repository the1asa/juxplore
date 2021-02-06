import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import Spinner from '../spinner';
import { Email } from '../icons/icons';
import { mediaQueries } from '../../styles/mediaQueries';

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default ({ isBurger, onClick = () => {} }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [subscribed, setSubscribed] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

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

  function closeModal() {
    document.querySelector('html').style.overflow = 'visible';
    setOpacity(0);
    setDisplayModal(false);
    setEmail('');
    setError('');
    setSubscribed(false);
    setIsSaving(false);
  }

  function openModal() {
    document.querySelector('html').style.overflow = 'hidden';
    onClick();
    setOpacity(1);
    setDisplayModal(true);
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
      <StyledModal
        isOpen={displayModal}
        afterOpen={() => {}}
        beforeClose={() => {}}
        onBackgroundClick={closeModal}
        onEscapeKeydown={closeModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <Column>
          <EmailModalIcon size="large" />
          { error
            && (
              <Fragment>
                <Text>Something went wrong, please try again.</Text>
                { isSaving
                  ? <SpinnerWrapper><Spinner /></SpinnerWrapper>
                  : <PostButton onClick={postEmail} disabled={!isEmailValid(email)}>RESUBMIT</PostButton>
                  }
              </Fragment>
            )
          }
          { subscribed
            && (
              <Fragment>
                <Text>Got it! Please whitelist asa@juxplore.com so my emails won't go to your spam folder. You can unsubscribe at any time using the link in the emails.</Text>
                <PostButton onClick={closeModal}>CLOSE</PostButton>
              </Fragment>
            )
          }
          { !error && !subscribed
            && (
              <Fragment>
                <Text>Enter your email to receive updates when new articles are published.</Text>
                <Input type="email" placeholder="mail@example.com" onChange={e => setEmail(e.target.value)} />
                { isSaving
                  ? <SpinnerWrapper><Spinner /></SpinnerWrapper>
                  : <PostButton onClick={postEmail} disabled={!isEmailValid(email)}>SUBSCRIBE NOW</PostButton>
                }
              </Fragment>
            )
          }
        </Column>
      </StyledModal>
    </div>
  );
};

const StyledModal = Modal.styled`
  width: 30rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-background-color);
  opacity: ${props => props.opacity};
  transition : all 0.3s ease-in-out;
`;

const EmailIcon = styled(Email)`
  color: whitesmoke;
  margin: .2rem;
`;

const EmailModalIcon = styled(Email)`
  color: whitesmoke;
  background-color: var(--highlight-color);
  border-radius: 100%;
  border 5px solid var(--highlight-color);
  margin-bottom: 1.5rem;
  margin-top: -3rem;

  ${props => (props.size === 'large' ? 'height: 48px; width: 48px;' : '')}
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
  margin: .5rem 2rem .5rem 2rem;
  text-align: center;
  color: var(--primary-text-color)
`;

const SubButton = styled.button`
  margin: 0 1rem 0rem 1rem;
  background-color: var(--primary-background-color);
  border-color: var(--highlight-color);
  color: var(--highlight-color);
  font-family: "Ubuntu", sans-serif;
  cursor: pointer;
  &:hover {
    background-color: var(--highlight-color);
    color: var(--primary-background-color);
    font-color: var(--primary-background-color);
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5rem;
  cursor: pointer;
`;

const LinkTitle = styled.span`
  font-size: 24px;

  ${mediaQueries('md')` 
      font-size: 16px;
  `};

  font-family: "Ubuntu", sans-serif;
  transition: all 0.25s;
  margin-left: 0.25rem;
  color: whitesmoke;

  &:hover {
    color: var(--highlight-color);
  }
`;

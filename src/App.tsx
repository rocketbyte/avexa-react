import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AvexaProfile from './components/AvexaProfile';
import GlobalStyle from './GlobalStyle';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;
  font-family: 'Roboto', 'Helvetica Neue', sans-serif;
  overflow: hidden;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 10;
  
  animation: fadeIn 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: #333;
  background: linear-gradient(45deg, #FF69B4, #FFC0CB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
`;

const SignInButton = styled.button`
  background-color: #FF69B4;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  animation: pulse 2s infinite;
  
  &:hover {
    background-color: #E35C9E;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 1rem;
  padding-bottom: 4rem; /* Add padding to account for fixed footer */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 0.75rem;
    padding-bottom: 4.5rem; /* More padding on mobile for multiline footer */
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-top: 1px solid #eaeaea;
  font-size: 0.8rem;
  color: #86868b;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #f5f5f7;
  z-index: 10;
  animation: slideInLeft 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.7rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 0.65rem;
    margin-top: 0.25rem;
  }
`;

const FooterLink = styled.a`
  color: #86868b;
  text-decoration: none;
  position: relative;
  
  &:not(:last-child)::after {
    content: '|';
    position: absolute;
    right: -0.85rem;
    color: #d2d2d7;
    
    @media (max-width: 768px) {
      right: -0.6rem;
    }
  }
  
  &:hover {
    color: #FF69B4;
    text-decoration: underline;
  }
`;

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 105, 180, 0.7);
    transform: scale(1);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 105, 180, 0);
    transform: scale(1.05);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 105, 180, 0);
    transform: scale(1);
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ChatButton = styled.button`
  position: fixed;
  bottom: 4.5rem; /* Position above the footer */
  right: 1.5rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: linear-gradient(45deg, #FF69B4, #FFC0CB);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.3);
  cursor: pointer;
  transition: all 0.3s;
  z-index: 100;
  animation: ${fadeIn} 0.5s 0.8s both, ${floatAnimation} 3s ease-in-out infinite;
  
  &:hover {
    background: linear-gradient(45deg, #E35C9E, #FFB6C1);
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 6px 15px rgba(255, 105, 180, 0.4);
  }
  
  svg {
    font-size: 1.5rem;
    filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
  }
  
  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    bottom: 5rem; /* Position above the footer on mobile */
    right: 1rem;
    
    svg {
      font-size: 1.3rem;
    }
  }
`;

const ChatWidget = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: ${props => props.isOpen ? '5rem' : '-100%'};
  right: 1.5rem;
  width: 320px;
  height: 400px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  z-index: 99;
  opacity: ${props => props.isOpen ? '1' : '0'};
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    right: 1rem;
    height: 350px;
  }
`;

const ChatHeader = styled.div`
  padding: 1rem;
  background: linear-gradient(45deg, #FF69B4, #FFC0CB);
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatTitle = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border-radius: 50%;
  transition: all 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: #f7f9fc;
`;

const BotMessage = styled.div`
  align-self: flex-start;
  background-color: white;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 18px 18px 18px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  max-width: 80%;
  font-size: 0.9rem;
  line-height: 1.5;
  animation: ${fadeIn} 0.3s ease-out;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FF69B4"><path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 8H6v-9h12v9zm-9-7h2v2h-2v-2zm6 0h-2v2h2v-2z"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const ChatInput = styled.div`
  padding: 0.75rem;
  border-top: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  
  input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 50px;
    outline: none;
    font-family: inherit;
    
    &:focus {
      border-color: #FF69B4;
      box-shadow: 0 0 0 2px rgba(255, 105, 180, 0.2);
    }
  }
  
  button {
    background-color: #FF69B4;
    color: white;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      background-color: #E35C9E;
      transform: scale(1.05);
    }
  }
`;

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <Logo>
            Avexa
          </Logo>
          <HeaderActions>
            <SignInButton>
              Sign In
            </SignInButton>
          </HeaderActions>
        </Header>
        
        <MainContent>
          <AvexaProfile />
        </MainContent>
        
        <Footer>
          <FooterContent>
            <div>Copyright © 2025 Rocketbyte. All rights reserved.</div>
            <FooterLinks>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Sitemap</FooterLink>
            </FooterLinks>
          </FooterContent>
        </Footer>
        
        <ChatButton aria-label="Chat with Avexa" onClick={toggleChat}>
          <SmartToyIcon />
        </ChatButton>
        
        <ChatWidget isOpen={isChatOpen}>
          <ChatHeader>
            <ChatTitle>
              <SmartToyIcon fontSize="small" />
              Avexa Assistant
            </ChatTitle>
            <CloseButton onClick={toggleChat}>
              <CloseIcon fontSize="small" />
            </CloseButton>
          </ChatHeader>
          
          <ChatMessages>
            <BotMessage>
              Hi there! I'm your Avexa virtual assistant. How can I help you today?
            </BotMessage>
            <BotMessage>
              You can ask me about our services, AI features, or schedule a consultation.
            </BotMessage>
          </ChatMessages>
          
          <ChatInput>
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && message.trim() && setMessage('')}
            />
            <button onClick={() => message.trim() && setMessage('')}>
              <SendIcon fontSize="small" />
            </button>
          </ChatInput>
        </ChatWidget>
      </AppContainer>
    </>
  );
}

export default App;
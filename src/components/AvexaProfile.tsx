import React from 'react';
import styled from 'styled-components';

// Sample profile data - in a real app, this would come from an API
const profileData = {
  name: "Avexa AI Assistant",
  specialty: "Virtual Health Guide",
  rating: 4.9,
  reviews: 256,
  location: "Available 24/7",
  experience: "Advanced AI Technology",
  education: "Trained on medical data",
  languages: ["English", "Spanish"],
  description: "Avexa is an advanced AI-powered virtual health assistant designed to provide personalized health guidance, answer medical questions, and connect you with appropriate healthcare professionals when needed. Using state-of-the-art natural language processing, Avexa delivers accurate, evidence-based information.",
  imgUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" // Placeholder image
};

const ProfileContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: slideInLeft 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
    max-height: 40%;
  }
`;

const ProfileImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 500px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    max-height: 300px;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  color: white;
  z-index: 2;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const OverlayName = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.25rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const OverlaySpecialty = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProfileInfoSection = styled.div`
  flex: 1;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: slideInRight 0.8s ease-out;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    max-height: 60%;
  }
`;

const InfoWrapper = styled.div`
  max-width: 500px;
`;

const ProfileName = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #333;
  display: none;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    display: none;
  }
`;

const ProfileSpecialty = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 1rem;
  display: none;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    display: none;
  }
`;

const RatingSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  background-color: rgba(255, 105, 180, 0.05);
  padding: 0.75rem;
  border-radius: 8px;
  transition: all 0.3s;
  
  &:hover {
    background-color: rgba(255, 105, 180, 0.1);
  }
`;

const Rating = styled.span`
  display: flex;
  align-items: center;
  color: #FF69B4;
  font-weight: 500;
  margin-right: 1rem;
  font-size: 1.1rem;
`;

const Reviews = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0.75rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const InfoText = styled.span`
  color: #444;
  font-weight: 500;
`;

const DescriptionSection = styled.div`
  margin-top: 0.5rem;
  background-color: white;
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.6s ease-out 0.3s both;
`;

const DescriptionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  color: #333;
`;

const Description = styled.p`
  color: #555;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  animation: fadeIn 0.6s ease-out 0.6s both;
`;

const GetStartedButton = styled.button`
  background-color: #FF69B4;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.9rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.6s;
  }
  
  &:hover {
    background-color: #E35C9E;
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 6px 20px rgba(255, 105, 180, 0.4);
    
    &:before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0.8rem 1.5rem;
  }
`;

const AvexaProfile: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfileImageSection>
        <ProfileImage>
          <img src={profileData.imgUrl} alt={profileData.name} />
          <ImageOverlay>
            <OverlayName>{profileData.name}</OverlayName>
            <OverlaySpecialty>{profileData.specialty}</OverlaySpecialty>
          </ImageOverlay>
        </ProfileImage>
      </ProfileImageSection>
      
      <ProfileInfoSection>
        <InfoWrapper>
          <ProfileName>{profileData.name}</ProfileName>
          <ProfileSpecialty>{profileData.specialty}</ProfileSpecialty>
          
          <RatingSection>
            <Rating>
              ★ {profileData.rating.toFixed(1)}
            </Rating>
            <Reviews>({profileData.reviews} reviews)</Reviews>
          </RatingSection>
          
          <InfoGrid>
            <InfoItem>
              <InfoText>{profileData.experience}</InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoText>{profileData.location}</InfoText>
            </InfoItem>
          </InfoGrid>
          
          <DescriptionSection>
            <DescriptionTitle>About Avexa</DescriptionTitle>
            <Description>{profileData.description}</Description>
          </DescriptionSection>
          
          <ButtonContainer>
            <GetStartedButton>
              Get Started
            </GetStartedButton>
          </ButtonContainer>
        </InfoWrapper>
      </ProfileInfoSection>
    </ProfileContainer>
  );
};

export default AvexaProfile;
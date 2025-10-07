import * as React from 'react';
import styled from 'styled-components';

interface CardProps {
  image: string;
  title: string;
  count: string;
}

const Card: React.FC<CardProps> = ({ image, title, count }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
        <p className="card-count">{count}</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    background: #f5f5f5;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 260px;
    height: 340px;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 12px;
  }

  .card-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
  }

  .card-count {
    font-size: 14px;
    color: #666;
  }
`;

export default Card;

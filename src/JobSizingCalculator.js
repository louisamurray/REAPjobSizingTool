import React, { useState } from "react";
import styled from "styled-components";
import { FaCalculator } from "react-icons/fa";

const Container = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 40px;
  width: 400px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
  color: #eceff4;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #88c0d0;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  margin-right: 8px;
`;

const Label = styled.label`
  display: block;
  margin: 15px 0 5px;
  font-weight: 500;
  color: #eceff4;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  outline: none;
  font-size: 1rem;
  color: #e0e0e3;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #4c567a, #5e81ac);
  color: #eceff4;
  font-weight: 600;
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s, box-shadow 0.3s ease;
  margin-top: 20px;
  &:hover {
    background: linear-gradient(135deg, #4c566a, #5e81ac);
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(92, 112, 165, 0.3);
  }
`;

const Result = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #a3be8c;
  margin-top: 24px;
  text-shadow: 0px 0px 8px rgba(163, 190, 140, 0.5);
`;

const JobSizingCalculator = () => {
  const [employmentResponsibility, setEmploymentResponsibility] = useState(0);
  const [numberOfContracts, setNumberOfContracts] = useState(0);
  const [propertyAssetMgmt, setPropertyAssetMgmt] = useState(0);
  const [staffing, setStaffing] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalScore, setTotalScore] = useState(null);

  const calculateScore = () => {
    // Weightings for each factor
    const employmentWeighting = 1;
    const contractsWeighting = 1;
    const propertyWeighting = 1;
    const staffingWeighting = 2;
    const budgetWeighting = 1;

    // Calculating score based on each factor and its weighting
    const employmentScore = employmentResponsibility * employmentWeighting;
    const contractsScore = numberOfContracts * contractsWeighting;
    const propertyScore = propertyAssetMgmt * propertyWeighting;
    const staffingScore = staffing * staffingWeighting;
    const budgetScore = totalBudget * budgetWeighting;

    const totalPoints = employmentScore + contractsScore + propertyScore + staffingScore + budgetScore;
    setTotalScore(totalPoints);
  };

  return (
    <Container>
      <Title>
        <IconWrapper>
          <FaCalculator />
        </IconWrapper>
        REAP Job Sizing Tool
      </Title>

      <Label>Employment Responsibility:</Label>
      <Select value={employmentResponsibility} onChange={(e) => setEmploymentResponsibility(parseInt(e.target.value))}>
        <option value={0}>None</option>
        <option value={3}>Partial</option>
        <option value={5}>Full</option>
      </Select>

      <Label>Number of Contracts:</Label>
      <Select value={numberOfContracts} onChange={(e) => setNumberOfContracts(parseInt(e.target.value))}>
        <option value={0}>Select...</option>
        {[...Array(18).keys()].map((i) => (
          <option key={i + 1} value={i + 1}>{`${i * 2 + 1}-${i * 2 + 2} Contracts`}</option>
        ))}
      </Select>

      <Label>Property & Asset Management:</Label>
      <Select value={propertyAssetMgmt} onChange={(e) => setPropertyAssetMgmt(parseInt(e.target.value))}>
        <option value={1}>Low</option>
        <option value={2}>Med/Low</option>
        <option value={3}>Medium</option>
        <option value={4}>Med/High</option>
        <option value={5}>High</option>
      </Select>

      <Label>Staffing (FTE Rating):</Label>
      <Select value={staffing} onChange={(e) => setStaffing(parseInt(e.target.value))}>
        <option value={0}>Select...</option>
        {[...Array(18).keys()].map((i) => (
          <option key={i + 1} value={i + 1}>{`${i * 3 + 3}-${i * 3 + 5} Staff`}</option>
        ))}
      </Select>

      <Label>Total Annual Budget:</Label>
      <Select value={totalBudget} onChange={(e) => setTotalBudget(parseInt(e.target.value))}>
        <option value={0}>Select...</option>
        {[...Array(18).keys()].map((i) => {
          const minBudget = i * 250;
          const maxBudget = minBudget + 250;
          return (
            <option key={i + 1} value={i + 1}>
              {minBudget < 1000
                ? `$${minBudget}K - $${maxBudget}K`
                : `$${(minBudget / 1000).toFixed(2)}M - $${(maxBudget / 1000).toFixed(2)}M`}
            </option>
          );
        })}
      </Select>

      <Button onClick={calculateScore}>Calculate Score</Button>

      {totalScore !== null && <Result>Total Score: {totalScore}</Result>}
    </Container>
  );
};

export default JobSizingCalculator;
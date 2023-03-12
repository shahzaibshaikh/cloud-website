import React from 'react';
import { styled } from '@mui/system';
import {
  TabPanelUnstyled,
  TabsListUnstyled,
  TabsUnstyled,
  TabUnstyled,
  tabUnstyledClasses
} from '@mui/base';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import Card from './Card';

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75'
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f'
};

const Tab = styled(TabUnstyled)`
  color: black;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  background-color: transparent;
  padding: 24px;
  margin: 6px 6px;
  border: none;
  display: flex;
  justify-content: space-between;

  &.${tabUnstyledClasses.selected} {
    border-bottom: 4px solid #4268fb;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  align-content: center;
`;

function PracticeAreas() {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Digital Transformation</Tab>
        <Tab>Corporate Innovation</Tab>
        <Tab>Digtal Experience</Tab>
        <Tab>Talent Sourcing</Tab>
        <Tab>Metaverse & Web 3.0</Tab>
      </TabsList>
      <TabPanel value={0}>
        <div className='tab-panel'>
          <div className='work-explore'>
            <div className='work-areas'>Work Areas</div>
            <div className='explore-now'>Explore Now</div>
          </div>
          <div className='card-layout'>
            <Card
              number='1/6'
              heading='Strategy & Advisory'
              text='Our experts analyze your company’s tech infrastructure and processes to strengthen the organization’s short-term performance and maintain sustainable long-term improvement.'
            />
            <Card
              number='2/6'
              heading='Implementation and Delivery'
              text='Our development teams will help you execute your digitization strategies and robust systems and applications that help you achieve your goals.'
            />
            <Card
              number='3/6'
              heading='Audits and Modernization'
              text='We identify the shortcomings of your existing systems and propose solutions that make the best use of your previous tech investment.'
            />
            <Card
              number='4/6'
              heading='Ideation Workshops'
              text='Our experts analyze your company’s tech infrastructure and processes to strengthen the organization’s short-term performance and maintain sustainable long-term improvement.'
            />
            <Card
              number='5/6'
              heading='Innovation Sprint'
              text='Our development teams will help you execute your digitization strategies and robust systems and applications that help you achieve your goals.'
            />
            <Card
              number='6/6'
              heading='Innovation Advisory'
              text='We identify the shortcomings of your existing systems and propose solutions that make the best use of your previous tech investment.'
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={1}>Second page</TabPanel>
      <TabPanel value={2}>Third page</TabPanel>
      <TabPanel value={3}>Fourth page</TabPanel>
      <TabPanel value={4}>Fifth page</TabPanel>
    </TabsUnstyled>
  );
}

export default PracticeAreas;

import React from 'react';
import styles from './styles.module.css';
import Spacer from '@site/src/components/Spacer';
import { Box, Card, CardActions, CardContent, CardHeader, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import {translate} from '@docusaurus/Translate';

const PricingCard = ({name, price, features, button, level}: any) => {
  return (
    <Card sx={{width:"300px"}}>
      <CardHeader title={name} align="center"/>
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="h4" align="center">
          {price}
        </Typography>
        <div>
          {features.map((feature:string) => (<Typography align="center">{feature}</Typography>))}
        </div>
      </CardContent>
      <Divider variant="middle" />
      <CardActions>
        <Box 
          display="flex" 
          width={300} 
          alignItems="center"
          justifyContent="center"
        >
          <a className={"button button--primary"} href={`#tally-open=mOPVGp&tally-layout=modal&tally-width=300&tally-hide-title=1&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=0&level=${button.level}`}>{button.text}</a>
        </Box>
      </CardActions>
    </Card>
  );
};

const Pricing: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div className={styles.Container} >
      <div className={styles.Content} >
        <div className={styles.HeaderContainer} data-aos="flip-left" data-aos-duration="1000">
          <h2 className={styles.Tagline}>Pricing</h2>
          <Spacer height={20} />
        </div>
        <Stack direction={matches? "row": "column"} spacing={2} alignItems="center">
          <PricingCard 
            name={translate({message: "Free", id: "site.pricing.free.name"})}  
            price={translate({message: "€0/mo", id: "site.pricing.free.price"})}
            features={[
              translate({message: "1 social", id: "site.pricing.free.feature1"}), 
              translate({message: "1 podcast", id: "site.pricing.free.feature2"}), 
              translate({message: "Synchronize every hour", id: "site.pricing.free.feature3"}), 
              ]} 
              button={{
                text: translate({message: "Join Waitng List", id: "site.pricing.free.cta"}), 
                level:"free"
            }}/>
          <PricingCard 
            name={translate({message: "Starter", id: "site.pricing.starter.name"})}  
            price={translate({message: "€10/mo", id: "site.pricing.starter.price"})}
            features={[
              translate({message: "Unlimited Social Media", id: "site.pricing.starter.feature1"}), 
              translate({message: "Unlimited Podcast", id: "site.pricing.starter.feature2"}), 
              translate({message: "Synchronize every 30 minutes", id: "site.pricing.starter.feature3"}), 
              ]} 
              button={{
                text: translate({message: "Contact Us", id: "site.pricing.starter.cta"}), 
                level:"paid"
            }}/>

          <PricingCard 
            name={translate({message: "Enterprise", id: "site.pricing.enterprise.name"})}  
            price={translate({message: "€20/mo", id: "site.pricing.enterprise.price"})}
            features={[
              translate({message: "Unlimited Social Media", id: "site.pricing.enterprise.feature1"}), 
              translate({message: "Unlimited Podcast", id: "site.pricing.enterprise.feature2"}), 
              translate({message: "Synchronize every 5 minutes", id: "site.pricing.enterprise.feature3"}), 
              ]} 
              button={{
                text: translate({message: "Contact Us", id: "site.pricing.enterprise.cta"}), 
                level:"paid"
            }}/>
        </Stack>
      </div>
    </div>
  );
};

export default Pricing;

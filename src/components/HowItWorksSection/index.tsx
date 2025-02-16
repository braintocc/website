import React from 'react';
import styles from './styles.module.css';
import Spacer from '@site/src/components/Spacer';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PowerIcon from '@mui/icons-material/Power';
import Typography from '@mui/material/Typography';
import MapIcon from '@mui/icons-material/Map';
import LaptopIcon from '@mui/icons-material/Laptop';
import ConnectSvg from '@site/static/img/connect.svg';
import NetworkSvg from '@site/static/img/network.svg';
import WorkSvg from '@site/static/img/work.svg';
import { useMediaQuery, useTheme } from '@mui/material';
import Translate from '@docusaurus/Translate';


function CustomizedTimeline() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Timeline position={matches ? "alternate": "right"}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color="secondary">
            <PowerIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left">
          <ConnectSvg className={styles.svg} />
          <Spacer height={20} />
          <Typography variant="h5" component="span">
          <Translate
            id='site.howItWorks.step1'>
            provide access to brainto in supported services
          </Translate>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <MapIcon />
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent data-aos={matches ? "fade-right": "fade-left"}>
          <NetworkSvg className={styles.svg} />
          <Spacer height={20} />
          <Typography variant="h5" component="span">
            <Translate
              id='site.howItWorks.step2'>
              Map what you want to connect & let us do the hard work
            </Translate>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <LaptopIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left">
          <WorkSvg className={styles.svg} />
          <Spacer height={20} />
          <Typography variant="h5" component="span">
            <Translate
              id='site.howItWorks.step3'>
              Continue doing what you know best in the system you know best
            </Translate>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

const HowItWorksSection: React.FC = () => {
  return (
    <div className={styles.Container} >
      <div className={styles.Content} >
        <div className={styles.HeaderContainer} data-aos="flip-left" data-aos-duration="1000">
          <h3 className={styles.Tagline}><Translate id='site.howItWorks.title'>How it works?</Translate></h3>
          <Spacer height={20} />
        </div>
      </div>

      <CustomizedTimeline/>
    </div>
  );
};

export default HowItWorksSection;

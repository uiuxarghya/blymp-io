import React from 'react';
import PropTypes from 'prop-types';
import CodeInput from 'react-code-input';
import { Link } from 'react-router-dom';
import InfoCircle from 'react-ionicons/lib/IosWarningOutline';
import Faq from 'react-faq-component';

import Heading from '../components/Heading';
import Section from '../components/Section';
import Spacer from '../components/Spacer';
import Separator from '../components/Separator';
import Checktext from '../components/Checktext';
import Transfer from '../classes/Transfer';

import ConnectImg from '../assets/tutorial-connect.svg';
import CodeImg from '../assets/tutorial-code.svg';
import SelectImg from '../assets/tutorial-select.svg';
import TransferImg from '../assets/tutorial-transfer.svg';

import faqContent from '../assets/faq-content';

import './home.css';

const Home = ({ transfer }) => (
  <div>
    <Heading fullSize />

    {!window.Blob && (
      <>
        <Section>
          <InfoCircle color="#FFFFFF" fontSize="50" />
          <br />
          Your device does not support the technologies
          <br />
          needed to make blymp.io work.
          <br />
          <br />
          Please try using a more modern browser
          <br />
          or enabling JavaScript Blobs.
        </Section>
        <Spacer size="3rem" />
      </>
    )}

    <div className="home-sections">
      <Section>
        <h2>Receive</h2>

        { transfer.receiverId ? (
          <CodeInput
            type="number"
            fields={4}
            className="code-input"
            value={transfer.receiverId ? String(transfer.receiverId) : ''}
            disabled
          />
        ) : (
          <div>
            Loading...
          </div>
        )}

        <p>
          Give this code to another person
          <br />
          in order to receive a file from them
        </p>

        <p className="small-info">
          By using blymp.io you accept
          <br />
          our
          {' '}
          <Link to="/terms" style={{ color: '#FFFFFF' }}>
            Terms of Use
          </Link>
          {' and '}
          <Link to="/privacy" style={{ color: '#FFFFFF' }}>
            Privacy Policy
          </Link>
          .
        </p>
      </Section>

      <Spacer size="3rem" />

      <Section>
        <h2>Send</h2>

        <CodeInput
          type="number"
          fields={4}
          className="code-input"
          autoFocus
          onChange={id => transfer.useReceiver(id)}
          inputStyleInvalid={{
            animation: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
          }}
          isValid={transfer.isValidId}
        />

        <p>
          Enter the code given to your by
          <br />
          the receiver to send a file to them
        </p>

        <p className="small-info">
          By entering a receiver code you accept
          <br />
          our
          {' '}
          <Link to="/terms" style={{ color: '#FFFFFF' }}>
            Terms of Use
          </Link>
          {' and '}
          <Link to="/privacy" style={{ color: '#FFFFFF' }}>
            Privacy Policy
          </Link>
          .
        </p>
      </Section>

      <Spacer size="3rem" />

      <Section>
        <h2>Why blymp.io</h2>

        <Checktext>
          No registration
        </Checktext>
        <Checktext>
          Privacy-oriented
        </Checktext>
        <Checktext>
          Free
        </Checktext>
        <Checktext>
          Open-source
        </Checktext>
        You can learn more about blymp.io below.
      </Section>
    </div>

    <Separator />

    <h2 id="how-it-works">How it works</h2>
    <div className="feature">
      <img src={ConnectImg} alt="Connect" />

      <div>
        <h3>
          1. Open blymp.io
        </h3>
        <p>
          Open blymp.io on your device you want to send files from and your device you want to receive files on.
        </p>
      </div>
      
    </div>

    <div className="feature reverse">
      <div>
        <h3>
          2. Exchange the code
        </h3>
        <p>
          The device you want to receive files on will show a 4-digit code.<br />
          Enter this code on the device you want to send files from.
        </p>
      </div>
      
      <img src={CodeImg} alt="Exchange the code" />
    </div>

    <div className="feature">
      <img src={SelectImg} alt="Select files" />

      <div>
        <h3>
          3. Select your files
        </h3>
        <p>
          Select one or multiple files you want to transfer.
        </p>
      </div>
      
    </div>

    <div className="feature reverse">
      <div>
        <h3>
          4. Transfer!
        </h3>
        <p>
          Your files will be transferred with the highest speed possible.<br />
          If your devices support it, all files will be transferred Peer-to-Peer - so that they don't even have to pass our servers.
        </p>
      </div>
      
      <img src={TransferImg} alt="Transfer files" />
    </div>

    <h2>FAQ</h2>
    <div className="faq-area-container">
      <div className="faq-area">
        <Faq data={faqContent} />
      </div>
    </div>
  </div>
);

Home.propTypes = {
  transfer: PropTypes.instanceOf(Transfer).isRequired,
};


export default Home;

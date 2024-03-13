
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'; // Assuming this is imported
import {  clusterApiUrl } from '@solana/web3.js';
import Page from '../UserInterface/JupierApi/Page.tsx'; // Uncomment if this component exists
import '../Styles/BuyNow.css';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

export const BuyNow: FC = () => {
  // Define network and endpoint for consistency
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
     new  WalletProvider()
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Page /> {/* If the Page component is available */}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
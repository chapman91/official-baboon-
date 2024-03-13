// WalletContext file
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider
} from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter  } from '@solana/wallet-adapter-wallets';
import React, {FC, ReactNode, useMemo, useState} from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';

// Define the network (e.g., 'devnet', 'testnet', 'mainnet-beta')
const network = 'devnet';

// Get the RPC endpoint for the specified network
const endpoint = clusterApiUrl(network);


export const Context: FC<{ children: ReactNode}> = ({children}) => {
        // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
        const network = WalletAdapterNetwork.Devnet;

        // You can also provide a custom RPC endpoint.
        const endpoint = useMemo(() => clusterApiUrl(network), [network]);

        const wallets = useMemo( () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),
            new TorusWalletAdapter(),
        ], [])
        
        return(
            <ConnectionProvider endpoint={ endpoint}>
                <WalletProvider wallets={wallets} autoconnect>
                    <WalletModalProvider>
                        {children}
                    </WalletModalProvider>
                </WalletProvider> 
            </ConnectionProvider>
        )

}


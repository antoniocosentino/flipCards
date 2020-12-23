import React, { useContext } from 'react';
import { Text, Button } from '@ui-kitten/components';
import { AppContext, dbRefresh } from '../App';
import { DEMO_WORDS_DEBUG } from '../utils/demoData.debug';
import { storeDBversion } from '../App';

export const DebugMode = () => {

    const appData = useContext( AppContext );
    const { storeData } = appData;

    return (
        <>
            <Button
                onPress={ () => storeData( DEMO_WORDS_DEBUG ) }
            >
                Fill Wallet with Debug Demo Words
            </Button>

            <Text />

            <Button
                onPress={ () => storeData( [] ) }
            >
                Wipe Wallet
            </Button>

            <Text />

            <Button
                // TODO: this cannot work anymore with the current structure
                onPress={ undefined }
            >
                Wipe Deck
            </Button>

            <Text />

            <Button
                onPress={ dbRefresh }
            >
                Force DB refresh
            </Button>

            <Text />

            <Button
                onPress={ () => storeDBversion( '' ) }
            >
                Clear stored DB version
            </Button>
        </>
    );
};

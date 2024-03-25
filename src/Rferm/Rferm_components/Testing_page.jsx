import React from 'react';
import Ccc from './Ccc';
import Scc from './Scc';
import Pcc from './Pcc';
import Map_componenent from './Map_componenent';
import { Grid } from '@mantine/core';

function Testing_page({ credentials }) {
  return (


    <div>
      {credentials.includes('ADMIN') && (
        <div>
          <Ccc/>
          <Scc/>
          <Pcc/>
          <Map_componenent />
        </div>
      )}
      {credentials.includes('CCC') && (
        <div>
          <Ccc  />
          <Map_componenent />
        </div>
      )}
      {credentials.includes('SCC') && (
        <div>
          <Scc />
          <Map_componenent />
        </div>
      )}
      {credentials.includes('PCC') && (
        <div>
          <Pcc />
          <Map_componenent />
        </div>

      )}

    </div>
  );
}

export default Testing_page;
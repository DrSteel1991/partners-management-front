import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Office, Partner, IPartnerInfo } from '../state/actions';
import { useActions } from '../hooks/useActions';
import PartnerInfo from './PartnerInfo';
import Grid from '@material-ui/core/Grid';
import { Fragment } from 'react';

const ListView: React.FC = () => {
  const { getPartners } = useActions();
  const { data, error, loading } = useTypedSelector(state => state.partners);

  useEffect(() => {
    getPartners(10);
  }, []);

  let partners: IPartnerInfo[] = [];

  data.forEach((partner: Partner) => {
    const offices = partner.offices.map((office: Office) => ({
      ...office,
      companyName: partner.organization,
    }));
    partners.push(...offices);
  });

  return (
    <Fragment>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      <Grid container spacing={4}>
        {partners.map((partner: IPartnerInfo) => {
          return (
            <PartnerInfo
              key={Math.random()}
              partnerDetails={partner}
            ></PartnerInfo>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default ListView;

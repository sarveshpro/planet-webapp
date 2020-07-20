import Layout from '../src/features/common/Layout';
import DonateComponent from './../src/features/public/Donations';
// @ts-ignore
import { withTranslation } from '../i18n';

export default withTranslation('common')(function Donate() {
  return (
    <Layout>
      <DonateComponent />
    </Layout>
  )
});

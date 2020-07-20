// @ts-ignore
import { withTranslation } from '../i18n';
import Layout from '../src/features/common/Layout'
import DonateComponent from './../src/features/public/Donations'
import Head from 'next/head'

export default withTranslation('common')(function Donate() {
  return (
    <Layout>
      {/* <Head>
        <script src="https://www.paypalobjects.com/api/checkout.js" />
      </Head> */}
      <DonateComponent />
    </Layout>
  )
});

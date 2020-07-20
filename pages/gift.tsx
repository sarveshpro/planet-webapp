import Layout from '../src/features/common/Layout';
import GiftPage from '../src/features/public/GiftTrees';
// @ts-ignore
import { withTranslation } from '../i18n';

export default withTranslation('common')(function Gift() {
  return (
    <Layout>
      <GiftPage/>
    </Layout>
  )
});

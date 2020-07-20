import Layout from '../src/features/common/Layout';
// @ts-ignore
import { withTranslation } from '../i18n';

export default withTranslation('common')(function Me() {
  return (
    <Layout>
      <p>ME</p>
    </Layout>
  )
});

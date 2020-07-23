<<<<<<< HEAD
import Layout from '../src/features/common/Layout';
// @ts-ignore
import { withTranslation } from '../i18n';

export default withTranslation('common')(function Map() {
=======
import Layout from '../src/features/common/Layout'
import dynamic from 'next/dynamic'
import React from 'react'
const SimpleExample = dynamic(
  () => import('../src/features/public/Donations/screens/Maps'),
  { ssr: false }
)

export default function Mappage() {
>>>>>>> develop
  return (
    <Layout>
      <SimpleExample/>
    </Layout>
  )
});

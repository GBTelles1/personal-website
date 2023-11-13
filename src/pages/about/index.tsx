import AboutPage from '@/components/AboutPage';
import { MainContentLayout } from '@/layouts/MainContentLayout';

export default function About() {
  return (
    <MainContentLayout pageTitle='ABOUT ME' pageTitleColor='#5CA0C5'>
      <AboutPage />
    </MainContentLayout>
  );
}

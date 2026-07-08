import ProtectedRoute from '@/components/ProtectedRoute';
import AdmissionProcess from './components/AdmissionProcess';
import Hero from './components/Hero';
import LatestNotices from './components/LatestNotices';
import ProgramsSection from './components/ProgramsSection';

export default function Home() {
  return (
    <ProtectedRoute>
      <section>
        <div>
          <section>
            <Hero />
            <ProgramsSection />
            <AdmissionProcess />
            <LatestNotices />
          </section>
        </div>
      </section>
    </ProtectedRoute>
  );
}

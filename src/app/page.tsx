import AdmissionProcess from './components/AdmissionProcess';
import Hero from './components/Hero';
import LatestNotices from './components/LatestNotices';
import ProgramsSection from './components/ProgramsSection';
export default function Home() {
  return (
    <section>
      <div>
        <section>
          <Hero></Hero>
          <ProgramsSection></ProgramsSection>
          <AdmissionProcess></AdmissionProcess>
          <LatestNotices></LatestNotices>
        </section>
      </div>
    </section>
  );
}

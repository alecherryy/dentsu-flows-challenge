import './App.scss';
import { DataOverview } from './components/DataOverview/DataOverview';
import { Section } from './components/Section/Section';
import { Intro } from './components/Intro/Intro';
import { Constrain } from './layouts/Constrain/Constrain';

function App() {
  return (
    <div className="App">
        <Constrain>
          <Section modifierClasses="section--fancy">
            <Intro eyebrow="Welcome"
              title={<h1>Welcome. View your <span className="text-regular text-italic">
                data</span>, compare and more.</h1>}>
              <p>Eu case adolescens vel. Sed ex legere integre, eam feugiat partiendo
                laboramus ad. Ea errem exerci eam, reque iriure forensibus.</p>
            </Intro>
          </Section>
          <Section>
            <Intro eyebrow="View All Flows"
              title={<h2>Explore <span className="text-regular text-italic">Different</span> Flow Charts and View Data</h2>}>
              <p>Eu case adolescens vel. Sed ex legere integre,
                eam feugiat partiendo laboramus ad. Ea errem
                exerci eam, <a href="https://alecherryy.io/">
                  reque iriure forensibus</a>.
              </p>
            </Intro>
            <DataOverview />
          </Section>
          <Section>
            <Intro eyebrow="View All Flows"
              title={<h2>Find out <span className="text-regular text-italic">more</span> by
              creating an account and access all features.</h2>}>
              <p>Eu case adolescens vel. Sed ex legere integre,
                eam feugiat partiendo laboramus ad.</p>
            </Intro>
          </Section>
        </Constrain>
    </div>
  );
}

export default App;

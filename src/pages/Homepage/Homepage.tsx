import React, { useEffect } from 'react';

import { DataOverview } from '../../components/DataOverview/DataOverview';
import { Section } from '../../components/Section/Section';
import { Intro } from '../../components/Intro/Intro';
import { Constrain } from '../../layouts/Constrain/Constrain';
import Data from '../../images/data.svg';
import Flow from '../../images/flow.svg';
import { Graphic } from '../../components/Graphic/Graphic';
import { UTILS } from '../../utils/utils';
import { Link } from 'react-router-dom';

/**
 * Component for the homepage.
 *
 * @component
 * @return {object} (
 *   <Homepage />
 * )
 */

export const Homepage: React.FC = () => {
  // scroll to top of page on render
  useEffect(() => {
    UTILS.scrollTop();
  }, [])

  return (
    <>
      <Section modifierClasses="section--fancy">
        <Intro eyebrow="Welcome"
          title={<h1>Hello, there. View your <span className="text-regular text-italic">
            data</span>, compare and more</h1>}>
          <p>Eu case adolescens vel. Sed ex legere integre, eam feugiat partiendo
            laboramus ad. Ea errem exerci eam, reque iriure forensibus.</p>
        </Intro>
        <Graphic source={Data} name="data" />
        <Graphic source={Flow} name="flow" />
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
        <Constrain modifierClasses="">
          <DataOverview />
        </Constrain>
      </Section>
      <Section>
        <Intro eyebrow="Learn More"
          title={<h2>To find out <span className="text-regular text-italic">more</span> about
          this by browsing the website</h2>}>
          <p>To learn more about the developer, visit the <Link to="/team">Team</Link> page.
          If you are curious about the process behind the work, got
          the <Link to="/about">About</Link> page.</p>
        </Intro>
      </Section>
    </>
  );
};
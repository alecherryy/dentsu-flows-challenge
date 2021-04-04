import React, { useEffect } from 'react';

import { UTILS } from '../../utils/utils';

import { Section } from '../../components/Section/Section';
import { Intro } from '../../components/Intro/Intro';
import { Constrain } from '../../layouts/Constrain/Constrain';

/**
 * Component for the homepage.
 *
 * @component
 * @return {object} (
 *   <About />
 * )
 */

export const About: React.FC = () => {
  // scroll to top of page on render
  useEffect(() => {
    UTILS.scrollTop();
  }, [])

  return (
    <Constrain modifierClasses="constrain--narrow">
      <Section>
        <Intro eyebrow="About the website"
          title={<h1>Read about the <span className="text-regular text-italic">
            tools</span> and <span className="text-regular text-italic">
            libraries</span> used to build this website</h1>}>
          <p>It's me, Alessia Pizzoccheri, to showcase
            my design and coding capabilities as part of the recruitement process
            for Dentsu International.
          </p>
        </Intro>
      </Section>
      <Section>
        <Intro eyebrow="The Design" title={<h3>Inspiration and ideation</h3>} />
        <p>For this coding challenge, I decided to experiment with dark themes;
          their popularity has been on the rise in recent years, so I decided
          to join in on the trend. In an attempt to balance the dark overtones, I opted
          for a bright color palette and fun gradients for the typograghy and accent
          elements.</p>
        <p>Before starting development, I created a file reference in <b>Sketch</b>; after
          experimenting with a couple of styles, I chose a minimalist styles. Ideally, the
          goal of the website is to showcase a digital product focused on data visualization.
          The homepage features a small demonstration of how the data can be displayed.
        </p>
      </Section>
      <Section>
        <Intro eyebrow="Development"
          title={<h3>Development <span
            className="text-regular text-italic">tools</span> and
            <span className="text-regular text-italic"> libraries</span></h3>} />
        <p>Per the challenge requirements/preferences, I built the application using React with TypeScript;
          I, then, imported a boilerplate-type set of stylesheets and layouts that I have
          collected and organized throughout the years. They allow me to quickly get started
          on development with a pre-defined set of global styles, fonts, typography, etc.
        </p>
        <h4>Responsive Behavior</h4>
        <p>The website is built using a mobile-first approach.</p>
        <h4>React Hooks</h4>
        <p>Given the limited scope of the project, I decided to use React Hooks to manage state.
          All API calls are being fired inside the <code> DataOverview</code> component,
          which then stores the data and passes it to its child components to
          render the flow charts and enable the <code>Dropdown</code> component.
        </p>
        <p>The API endpoints are stored in the <code>/services/FlowService.js</code> file and
        are imported as needed. Additionaly, I created a <code>utils.js</code> file to store
        any utility function that might be needed. Some of the functions include:
        </p>
        <ol className="list-ordered">
          <li><code>findMax()</code> - Find the highest value in a given array.</li>
          <li><code>findMin()</code> - Find the lowest value in a given array.</li>
          <li><code>formatFlowObj()</code> and <code>formatProcessObj()</code> -
            Format a given flow or process object.</li>
        </ol>
        <h4>React Flow and Dagre</h4>
        <p>To display the flow charts, I used the <a href="https://reactflow.dev/"
          target="_blank"
          rel="noreferrer"
          >React Flow</a> and <a href="https://github.com/dagrejs/dagre" target="_blank"
          rel="noreferrer">Dagre</a> libraries. React Flow is a customizable JS library
          used to build node-based diagrams; it features a lot of functionalities, however,
          to implement the app, I stuck to some of the core features like Zoom controls and
          resetting the view on render. Dagre, on the other hand, specializes on laying out
          directed graphs. I implemented a basic script to semi-dynamically place each node
          onto the "canvas" using one of its built-in layout algorithms.
        </p>
      </Section>
    </Constrain>
  );
};
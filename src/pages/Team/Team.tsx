import React, { useEffect } from 'react';

import { Section } from '../../components/Section/Section';
import { Intro } from '../../components/Intro/Intro';
import { Constrain } from '../../layouts/Constrain/Constrain';
import { UTILS } from '../../utils/utils';

/**
 * Component for the homepage.
 *
 * @component
 * @return {object} (
 *   <Team />
 * )
 */

export const Team: React.FC = () => {
  // scroll to top of page on render
  useEffect(() => {
    UTILS.scrollTop();
  }, [])

  return (
    <Constrain modifierClasses="constrain--narrow">
      <Section>
        <Intro eyebrow="The Team"
          title={<h1>Mee the <span className="text-regular text-italic">
            developer</span> who built this application.</h1>}>
          <p>It's me, Alessia Pizzoccheri, to showcase
            my design and coding capabilities as part of the recruitement process
            for Dentsu International.
          </p>
        </Intro>
      </Section>
      <Section>
        <h3>Work Experience</h3>
        <ul className="list-clean spaced-60-bottom">
          <li className="spaced-30-bottom">
            <b>Forum One</b>, Brooklyn, New York, USA<br />
            <i>Front-end Developer</i>
            <ul>
              <li>Developed and integrated Forum One’s Drupal/Wordpress theme and created modern, intuitive and accessible interfaces using a mobile-first approach and WCAG compliance;</li>
              <li>Built custom, interactive maps using modern frameworks such as Leaflet JS;</li>
              <li>Participated in design brainstorming and review, prototyped and tested solutions and lead clients demo;</li>
              <li>Performed cross-browser testing and QA on multiple devices;</li>
              <li>Participated in ticket grooming and sprint planning, task estimate, etc;</li>
              <li>Performed code review and mentored junior developers.</li>
            </ul>
          </li>
          <li className="spaced-30-bottom">
            <b>Art Institute of Seattle</b>, Seattle, Washington, USA<br />
            <i>Associate of Arts in Web Design and Interactive Media</i>
          </li>
          <li className="spaced-30-bottom">
            <b>Florida Atlantic University</b>, Boca Raton, Florida, USA<br />
            <i>Bachelor of Arts in Business Administration with a Minor in Economics</i>
          </li>
        </ul>
        <h3>Education</h3>
        <ul className="list-clean spaced-60-bottom">
          <li className="spaced-30-bottom">
            <b>Northeastern University</b>, Boston, Massachusetts, USA<br />
            <i>Master of Science in Computer Science, GPA: 3.47</i>
          </li>
          <li className="spaced-30-bottom">
            <b>Art Institute of Seattle</b>, Seattle, Washington, USA<br />
            <i>Associate of Arts in Web Design and Interactive Media</i>
          </li>
          <li className="spaced-30-bottom">
            <b>Florida Atlantic University</b>, Boca Raton, Florida, USA<br />
            <i>Bachelor of Arts in Business Administration with a Minor in Economics</i>
          </li>
        </ul>
        <h3>Technical Skills</h3>
        <ol className="list-ordered spaced-60-bottom">
          <li className="spaced-30-bottom">
            <b>Programming skills: </b> Java, JavaScript
          </li>
          <li className="spaced-30-bottom">
            <b>Web Development: </b> HTML, Sass/CSS, JavaScript, jQuery, ReactJS, Spring Boot, Twig, Leaflet JS
          </li>
          <li className="spaced-30-bottom">
            <b>Other: </b> Git, Agile, MySQL, MongoDB
          </li>
        </ol>
      </Section>
    </Constrain>
  );
};
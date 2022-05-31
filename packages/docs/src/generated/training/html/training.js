import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { Gallery, GalleryItem } from '@patternfly/react-core';
import { TrainingCard } from '../../../content/training/./trainingCard/trainingCard';
const pageData = {
  "id": "HTML",
  "section": "training",
  "source": "training",
  "slug": "/training/html/training",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/training/html.md"
};
pageData.liveContext = {
  Gallery,
  GalleryItem,
  TrainingCard
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"fundamentals","size":"h2","className":"ws-title ws-h2"}}>
      {`Fundamentals`}
    </AutoLinkHeader>
    <Gallery hasGutter>
      <GalleryItem>
        <TrainingCard
  trainingType="html-css"
  title="The building blocks of PatternFly"
  level="beginner"
  time="20 minutes"
  description="Learn about components, layouts, and demos."
  katacodaId="the-building-blocks-of-patternfly"
/>
</GalleryItem>
            <GalleryItem>
        <TrainingCard
  trainingType="html-css"
  title="Variable naming principles"
  level="intermediate"
  time="20 minutes"
  description="Create and override component and global variables by following BEM naming principles."
  katacodaId="variable-naming-principles"
/>
</GalleryItem>
            <GalleryItem>
        <TrainingCard
  trainingType="html-css"
  title="Modifiers and utilities"
  level="beginner"
  time="15 minutes"
  description="Apply modifier and utility classes to create new variations."
  katacodaId="modifiers-and-utilities"
/>
</GalleryItem>
            <GalleryItem>
        <TrainingCard
  trainingType="html-css"
  title="Layouts"
  level="beginner"
  time="25 minutes"
  description="Learn how to use all seven of PatternFly's layouts."
  katacodaId="layouts"
/>
</GalleryItem>
            <GalleryItem>
        <TrainingCard
  trainingType="html-css"
  title="Override and extend variables"
  level="advanced"
  time="25 minutes"
  description="Practice overriding and extending variables to create new designs."
  katacodaId="override-and-extend-variables"
/>
</GalleryItem>
</Gallery>
  </React.Fragment>
);
Component.displayName = 'TrainingHtmlTrainingDocs';
Component.pageData = pageData;

export default Component;

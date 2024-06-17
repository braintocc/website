/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @docusaurus/no-untranslated-text */

import React from 'react';

import type {Props as Tweet} from '@site/src/components/Tweet';

export type TweetItem = Tweet & {
  showOnHomepage: boolean;
};
const TWEETS: TweetItem[] = [
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'daferpi',
    name: 'Abel Fernandez',
    date: 'Oct 26, 2021',
    content: (
      <>
        🚀 Just discovered @Brainto and it's a GAME CHANGER! 🤯 As a content creator, I was tired of juggling multiple tabs to organize my work. Brainto centralizes all my needs in one place #BraintoLove #ContentCreation
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'daferpi',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'kmruiz',
    name: 'Kevin Mas Ruiz',
    date: 'Feb 21, 2024',
    content: (
      <>
        📝 Who else struggles with keeping track of their content calendar? 🤔 I do! But @Brainto has been a lifesaver. It integrates all my notes and ideas in one place, making it easy to plan and schedule my content. Try it out! #BraintoEssential #ContentPlanning
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'kmruiz',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'aperezm85',
    name: 'Alex Perez',
    date: 'May 17, 2024',
    content: (
      <>
        🎯 As a blogger, I need to stay organized and focused on my goals. @Brainto helps me do just that by keeping all my notes and ideas in one place. No more scattered tabs or lost thoughts - thanks, Brainto! 🙏 #BraintoFan #ContentCreation
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'aperezm85',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'CrisMoreiras',
    name: 'Cris Moreiras',
    date: 'May 4, 2024',
    content: (
      <>
        📊 Are you tired of switching between multiple apps to manage your content? 😴 @Brainto is the solution! It centralizes all my notes and ideas in one place, making it easy to create and organize my content. Try it out! 🚀 #BraintoLove #ContentManagement
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'CrisMoreiras',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'aleixmorgadas',
    name: 'Aleix Morgadas',
    date: 'May 28, 2024',
    content: (
      <>
        📝 As a writer, I need to stay organized and focused on my projects. @Brainto helps me do just that by keeping all my notes and ideas in one place. No more lost thoughts or missed deadlines - thanks, Brainto! 🙏 #BraintoFan #ContentWriting
        </>
    ),
    showOnHomepage: true,
    githubUsername: 'aleixmorgadas',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'miguelarian',
    name: 'Miguel Vela',
    date: 'May 17, 2024',
    content: (
      <>
        📊 Who else loves using Notion for note-taking? 🤔 I do! And @Brainto takes it to the next level by centralizing all my notes and ideas in one place. Try it out and see how much more productive you can be! 💪 #BraintoEssential #NotionLove
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'miguelarian',
  },
];

export default TWEETS;
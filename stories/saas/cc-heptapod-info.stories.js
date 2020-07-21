// Don't forget to import the component you're presenting!
import '../../src/saas/cc-heptapod-info.js';
import { makeStory } from '../lib/make-story.js';
import { enhanceStoriesNames } from '../lib/story-names.js';

export default {
  title: '🛠 SaaS/<cc-heptapod-info>',
  component: 'cc-heptapod-info',
};

const conf = {
  component: 'cc-heptapod-info',
};

export const defaultStory = makeStory(conf, {
  items: [
    {
      statistics: {
        active_users: 12,
        // 666.6 MB
        storage: 698966016,
        price: 17.50,
      },
    },
  ],
});

export const notInUse = makeStory(conf, {
  items: [{}],
});

enhanceStoriesNames({
  defaultStory,
  notInUse,
});

import '../../components/env-var/env-var-create.js';
import notes from '../../.components-docs/env-var-create.md';
import { storiesOf } from '@storybook/html';
import { withCustomEventActions } from '../lib/event-action';

const withActions = withCustomEventActions('env-var-create:create');

storiesOf('env-var', module)
  .add('<env-var-create>', withActions(() => {

    const container = document.createElement('div');
    container.innerHTML = `
      <div class="title">Default:</div>
      <env-var-create></env-var-create>
      
      <div class="title">With name "FOO" and "BAR" already defined:</div>
      <env-var-create id="variables-names"></env-var-create>
      
      <div class="title">Disabled:</div>
      <env-var-create disabled></env-var-create>
    `;

    container.querySelector('#variables-names').variablesNames = ['FOO', 'BAR'];

    return container;
  }), { notes });
import '../atoms/cc-flex-gap.js';
import '../molecules/cc-block.js';
import { css, html, LitElement } from 'lit-element';
import { i18n } from '../lib/i18n.js';

/**
 * A component that shows a summary of our Heptapod SaaS offer
 *
 * * 🎨 default CSS display: `flex`
 * <br>
 * 🧐 [component's source code on GitHub](https://github.com/CleverCloud/clever-components/blob/master/src/saas/cc-heptapod-info.js)
 *
 * ## Details
 *
 * * When `statistics` is nullish, a text saying that you do not use the service is displayed.
 *
 * ## Type definitions
 *
 * ```js
 * interface Statistics {
 *   active_users: number,
 *   storage: number,
 *   price: number
 * }
 * ```
 *
 * @prop {Statistics} statistics - An object giving the usage statistics of this heptapod SaaS
 */
export class CcHeptapodInfo extends LitElement {

  static get properties () {
    return {
      statistics: { type: Object, attribute: false },
    };
  }

  constructor () {
    super();
    this.statistics = null;
  }

  render () {
    const statistics = this.statistics;

    return html`
      <cc-block>
        <div slot="title">Heptapod</div>
        <div class="header">
          <img src="https://static-assets.cellar.services.clever-cloud.com/logos/heptapod.svg" alt="heptapod logo" title="heptapod logo" class="heptapod-logo"/>
          <div class="header-content">
            <div class="heptapod-name">Heptapod</div>
            <div class="heptapod-url"><a href="https://heptapod.host" rel="noreferrer noopener">https://heptapod.host</a></div>
          </div>
        </div>
        <div class="description">
          ${i18n('cc-heptapod-info.description')}
        </div>

        ${statistics !== null ? html`
          <cc-flex-gap class="pricing">
            <div class="active-users pricing-item">
              <div class="pricing-item-value">${this.statistics.active_users}</div>
              <div class="active-users-description">${i18n('cc-heptapod-info.active-users-description')}</div>
            </div>
            <div class="storage-size pricing-item">
              <div class="pricing-item-value">${i18n('cc-heptapod-info.storage-bytes', statistics.storage)}</div>
              <div class="storage-size-description">${i18n('cc-heptapod-info.storage-description')}</div>
            </div>
            <div class="monthly-pricing pricing-item">
              <div class="pricing-item-value">${i18n('cc-heptapod-info.price-value', statistics.price)}</div>
              <div class="monthly-pricing-description">${i18n('cc-heptapod-info.price-description')}</div>
            </div>
          </cc-flex-gap>
        ` : ''}

        ${statistics === null ? html`
          <div class="no-statistics">${i18n('cc-heptapod-info.not-in-use')}</div>
        ` : ''}

      </cc-block>
    `;
  }

  static get styles () {
    // This array may contain style imports from shared files.
    // Then you can defined your own component's styles.
    return [
      // language=CSS
      css`
        :host {
          /* You may use another display type but you need to define one. */
          display: flex;
          max-width: 500px;
        }

        .header {
          display: flex;
        }

        .header-content {
          margin-left: 20px;
        }

        img.heptapod-logo {
          height: 50px;
          width: 50px;
        }

        .pricing {
          --cc-gap: 1rem;
        }

        .pricing-item {
          flex: 1 1 auto;
          text-align: center;
        }

        .pricing-item-value {
          font-weight: bold;
        }
      `,
    ];
  }
}

window.customElements.define('cc-heptapod-info', CcHeptapodInfo);

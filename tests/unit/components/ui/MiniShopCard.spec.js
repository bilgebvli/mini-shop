import { expect } from 'chai';
import { shallowMount, config } from '@vue/test-utils';
import MiniShopCard from '@/components/ui/MiniShopCard/index.vue';
import GlobalMixin from '@/mixins/global.mixin.js';
import Helpers from '@/utils/helpers.js';
import Vue from 'vue';

config.silent = true;
config.showDeprecationWarnings = false;
Vue.prototype.helpers = Helpers;

describe('Components > Ui > MiniShopCard.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(MiniShopCard, {
      Vue,
      mixins: [GlobalMixin],
      stubs: ['slot'],
      slots: {
        header: '<div>header</div>',
        footer: '<div>header</div>',
      },
    });
  });

  describe('General', () => {
    it('checks whether componenet was mounted or not.', () => {
      expect(wrapper.exists()).to.equal(true);
    });
  });

  describe('Props', () => {
    describe('loading', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.loading).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
  });

  describe('Computed', () => {
    describe('header', () => {
      it('checks whether header slot was exist or not.', () => {
        expect(wrapper.find('.card-header').exists()).to.be.true;
      });
    });
    describe('footer', () => {
      it('checks whether footer slot was exist or not.', () => {
        expect(wrapper.find('.card-footer').exists()).to.be.true;
      });
    });
    describe('cardLoaderOptions', () => {
      it('checks whether function returns correct content or not.', () => {
        expect(wrapper.vm.cardLoaderOptions).to.deep.equal({
          class: { 'mini-shop-card__loader': true, 'rounded-top': true },
        });
      });
    });
    describe('cardOptions', () => {
      it('checks whether function returns correct content or not.', () => {
        expect(wrapper.vm.cardOptions).to.deep.equal({
          class: {
            card: true,
            'mini-shop-card': true,
            'mini-shop-card--loading': false,
          },
        });
      });
    });
  });
});

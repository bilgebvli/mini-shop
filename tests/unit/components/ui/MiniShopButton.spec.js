import Vue from 'vue';
import { expect } from 'chai';
import { shallowMount, config } from '@vue/test-utils';
import MiniShopButton from '@/components/ui/MiniShopButton/index.vue';
import GlobalMixin from '@/mixins/global.mixin.js';
import Helpers from '@/utils/helpers.js';

config.silent = true;
config.showDeprecationWarnings = false;
Vue.prototype.helpers = Helpers;

describe('Components > UI > MiniShopButton.vue', () => {
  let wrapper;
  const checksPropValue = 'checks prop acceptable value type.';
  beforeEach(() => {
    wrapper = shallowMount(MiniShopButton, {
      Vue,
      mixins: [GlobalMixin],
      stubs: ['router-link'],
    });
  });
  describe('General', () => {
    it('checks whether componenet was mounted or not.', () => {
      expect(wrapper.exists()).to.equal(true);
    });
  });

  describe('Props', () => {
    describe('bgColor', () => {
      it(checksPropValue, () => {
        expect(wrapper.vm.$options.props.bgColor).to.deep.equal({
          type: String,
        });
      });
    });
    describe('textColor', () => {
      it(checksPropValue, () => {
        expect(wrapper.vm.$options.props.textColor).to.deep.equal({
          type: String,
        });
      });
    });
    describe('block', () => {
      it(checksPropValue, () => {
        expect(wrapper.vm.$options.props.block).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
    describe('flat', () => {
      it(checksPropValue, () => {
        expect(wrapper.vm.$options.props.flat).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
    describe('disabled', () => {
      it(checksPropValue, () => {
        expect(wrapper.vm.$options.props.disabled).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
    describe('textAlign', () => {
      it(checksPropValue, () => {
        expect(wrapper.vm.$options.props.textAlign).to.deep.equal({
          type: String,
          default: 'center',
        });
      });
    });
    describe('textTransform', () => {
      it(checksPropValue, () => {
        expect(wrapper.vm.$options.props.textTransform).to.deep.equal({
          type: String,
          default: 'uppercase',
        });
      });
    });
    describe('textNormal', () => {
      it(checksPropValue, () => {
        expect(wrapper.vm.$options.props.textNormal).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
    describe('to', () => {
      it(checksPropValue, () => {
        expect(wrapper.vm.$options.props.to).to.deep.equal({
          type: [Object, String, Array],
          default: null,
        });
      });
    });
  });
  describe('Computed', () => {
    describe('isRoute', () => {
      it('checks the boolean value returned when props change.', async () => {
        await wrapper.setProps({ to: { name: 'test' } });
        expect(wrapper.vm.isRoute).to.be.true;
      });
    });
    describe('buttonOptions', () => {
      it('checks whether function returns correct content or not.', async () => {
        await wrapper.setProps({
          block: true,
          flat: true,
          to: { name: 'test' },
          bgColor: 'tangerine',
          textColor: 'black',
          disabled: true,
          textAlign: 'right',
          textTransform: 'lowercase',
        });
        expect(wrapper.vm.buttonOptions).to.deep.equal({
          class: {
            'mini-shop-button': true,
            'mini-shop-button--text-normal': false,
            'mini-shop-button--route': true,
            'mini-shop-button--disabled': true,
            'bg-tangerine': true,
            'text-black': true,
            'text-right': true,
            'text-lowercase': true,
            'btn-block': true,
            'rounded-0': true,
          },
          disabled: true,
        });
      });
    });
  });
});

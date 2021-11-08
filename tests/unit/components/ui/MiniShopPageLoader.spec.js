import { expect } from 'chai';
import { shallowMount, config } from '@vue/test-utils';
import MiniShopPageLoader from '@/components/ui/MiniShopPageLoader/index.vue';

config.silent = true;
config.showDeprecationWarnings = false;

describe('Components > ui > MiniShopPageLoader.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(MiniShopPageLoader);
  });

  describe('General', () => {
    it('checks whether componenet was mounted or not.', () => {
      expect(wrapper.exists()).to.equal(true);
    });
  });

  describe('Props', () => {
    describe('value', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.value).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
    describe('hideContent', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.hideContent).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
    describe('transition', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.transition).to.deep.equal({
          type: String,
          default: null,
        });
      });
    });
    describe('noContainer', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.noContainer).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
  });
  describe('Computed', () => {
    describe('showContent', () => {
      it('checks the value returned when props change.', async () => {
        await wrapper.setProps({ value: true });
        expect(wrapper.vm.showContent).to.be.true;
      });
    });
  });
});

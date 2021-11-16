import { expect } from 'chai';
import { shallowMount, config } from '@vue/test-utils';
import MiniShopPageLoader from '@/components/ui/MiniShopPageLoader/index.vue';

config.silent = true;
config.showDeprecationWarnings = false;

describe('Components > UI > MiniShopPageLoader.vue', () => {
  let wrapper;
  const checksPropValue = 'checks prop acceptable value type.';
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
      it(checksPropValue, () => {
        expect(wrapper.vm.$options.props.value).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
    describe('noContainer', () => {
      it(checksPropValue, () => {
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
        await wrapper.setProps({ value: false });
        expect(wrapper.vm.showContent).to.be.true;
      });
    });
  });
});

import { expect } from 'chai';
import { shallowMount, config } from '@vue/test-utils';
import MiniShopImage from '@/components/ui/MiniShopImage/index.vue';

config.silent = true;
config.showDeprecationWarnings = false;

describe('Components > UI > MiniShopImage.vue', () => {
  let wrapper;
  const wasteObject = {
      src: 'https://via.placeholder.com/150',
      alt: 'test',
      lazy: true,
      width: 100,
      height: 100,
    },
    checksPropValue = 'checks prop acceptable value type.';

  beforeEach(() => {
    wrapper = shallowMount(MiniShopImage);
  });

  describe('General', () => {
    it('checks whether componenet was mounted or not.', () => {
      expect(wrapper.exists()).to.equal(true);
    });
  });

  describe('Props', () => {
    describe('src', () => {
      it(checksPropValue, () => {
        expect(wrapper.vm.$options.props.src).to.deep.equal({
          type: String,
          default: null,
        });
      });
    });
    describe('alt', () => {
      it(checksPropValue, () => {
        expect(wrapper.vm.$options.props.alt).to.deep.equal({
          type: String,
          default: null,
        });
      });
    });
    describe('lazy', () => {
      it(checksPropValue, () => {
        expect(wrapper.vm.$options.props.lazy).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
    describe('width', () => {
      it(checksPropValue, () => {
        expect(wrapper.vm.$options.props.width).to.deep.equal({
          type: [Number, String],
          default: null,
        });
      });
    });
    describe('height', () => {
      it(checksPropValue, () => {
        expect(wrapper.vm.$options.props.height).to.deep.equal({
          type: [Number, String],
          default: null,
        });
      });
    });
  });
  describe('Computed', () => {
    describe('imageOptions', () => {
      it('checks whether function returns correct content or not.', async () => {
        await wrapper.setProps(wasteObject);
        expect(wrapper.vm.imageOptions).to.deep.equal(wasteObject);
      });
    });
  });
});

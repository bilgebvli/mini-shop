import { expect } from "chai";
import { shallowMount, config } from "@vue/test-utils";
import MiniShopCounter from "@/components/controls/MiniShopCounter/index.vue";
config.silent = true;
config.showDeprecationWarnings = false;

describe("Components > Controls > MiniShopCounter.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(MiniShopCounter);
  });

  describe("General", () => {
    it("checks whether componenet was mounted or not.", () => {
      expect(wrapper.exists()).to.equal(true);
    });
  });

  describe("Props", () => {
    describe("value", () => {
      it("checks prop acceptable value type.", () => {
        expect(wrapper.vm.$options.props.value).to.deep.equal({
          type: [Number, String],
          default: 0,
        });
      });
    });
    describe("min", () => {
      it("checks prop acceptable value type.", () => {
        expect(wrapper.vm.$options.props.min).to.deep.equal({
          type: Number,
          default: 0,
        });
      });
    });
    describe("max", () => {
      it("checks prop acceptable value type.", () => {
        expect(wrapper.vm.$options.props.max).to.deep.equal({
          type: Number,
          default: 100,
        });
      });
    });
    describe("disabled", () => {
      it("checks prop acceptable value type.", () => {
        expect(wrapper.vm.$options.props.disabled).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
  });

  describe("Computed", () => {
    describe("number", () => {
      it("checks whether function returns correct content or not when props were changed.", async () => {
        await wrapper.setProps({ value: 2 });
        expect(wrapper.vm.number).to.equal(2);
      });
    });
    describe("disabledDecrementButton", () => {
      it("checks whether function returns correct content or not when props were changed.", async () => {
        await wrapper.setProps({ number: 2, disabled: true });
        expect(wrapper.vm.disabledDecrementButton).to.equal(true);
      });
    });
    describe("disabledIncrementButton", () => {
      it("checks whether function returns correct content or not when props were changed.", async () => {
        await wrapper.setProps({ number: 99, disabled: false });
        expect(wrapper.vm.disabledIncrementButton).to.equal(false);
      });
    });
  });

  describe("Methods", () => {
    describe("decrement", () => {
      it("checks whether value prop are emitted when decrement method is called", async () => {
        await wrapper.setProps({ value: 99 });
        await wrapper.vm.decrement();
        expect(wrapper.emitted("input")[0][0]).to.equal(98);
        expect(wrapper.emitted("change")[0][0]).to.equal(98);
      });
    });
    describe("increment", () => {
      it("checks whether value prop are emitted when increment method is called", async () => {
        await wrapper.setProps({ value: 98 });
        await wrapper.vm.increment();
        expect(wrapper.emitted("input")[0][0]).to.equal(99);
        expect(wrapper.emitted("change")[0][0]).to.equal(99);
      });
    });
  });
});

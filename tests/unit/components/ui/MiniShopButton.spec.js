import { expect } from "chai";
import { shallowMount, config } from "@vue/test-utils";
import MiniShopButton from "@/components/ui/MiniShopButton/index.vue";
import GlobalMixin from "@/mixins/global.mixin.js";
import Helpers from "@/utils/helpers.js";
import Vue from "vue";

config.silent = true;
config.showDeprecationWarnings = false;
Vue.prototype.helpers = Helpers;

describe("Components > Ui > MiniShopButton.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(MiniShopButton, {
      Vue,
      mixins: [GlobalMixin],
      stubs: ["router-link"],
    });
  });
  describe("General", () => {
    it("checks whether componenet was mounted or not.", () => {
      expect(wrapper.exists()).to.equal(true);
    });
  });

  describe("Props", () => {
    describe("bgColor", () => {
      it("checks prop acceptable value type.", () => {
        expect(wrapper.vm.$options.props.bgColor).to.deep.equal({
          type: String,
        });
      });
    });
    describe("textColor", () => {
      it("checks prop acceptable value type.", () => {
        expect(wrapper.vm.$options.props.textColor).to.deep.equal({
          type: String,
        });
      });
    });
    describe("block", () => {
      it("checks prop acceptable value type.", () => {
        expect(wrapper.vm.$options.props.block).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
    describe("flat", () => {
      it("checks prop acceptable value type.", () => {
        expect(wrapper.vm.$options.props.flat).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
    describe("uppercase", () => {
      it("checks prop acceptable value type.", () => {
        expect(wrapper.vm.$options.props.uppercase).to.deep.equal({
          type: Boolean,
          default: false,
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
    describe("textLeft", () => {
      it("checks prop acceptable value type.", () => {
        expect(wrapper.vm.$options.props.textLeft).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
    describe("textRight", () => {
      it("checks prop acceptable value type.", () => {
        expect(wrapper.vm.$options.props.textRight).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
    describe("textCenter", () => {
      it("checks prop acceptable value type.", () => {
        expect(wrapper.vm.$options.props.textCenter).to.deep.equal({
          type: Boolean,
          default: true,
        });
      });
    });
    describe("textNormal", () => {
      it("checks prop acceptable value type.", () => {
        expect(wrapper.vm.$options.props.textNormal).to.deep.equal({
          type: Boolean,
          default: false,
        });
      });
    });
    describe("to", () => {
      it("checks prop acceptable value type.", () => {
        expect(wrapper.vm.$options.props.to).to.deep.equal({
          type: [Object, String, Array],
          default: null,
        });
      });
    });
  });
  describe("Computed", () => {
    describe("isRoute", () => {
      it("checks the boolean value returned when props change.", async () => {
        await wrapper.setProps({ to: { name: "test" } });
        expect(wrapper.vm.isRoute).to.be.true;
      });
    });
    describe("buttonOptions", () => {
      it("checks whether function returns correct content or not.", async () => {
        await wrapper.setProps({
          block: true,
          flat: true,
          uppercase: true,
          to: { name: "test" },
          bgColor: "tangerine",
          textColor: "black",
          disabled: true,
        });
        expect(wrapper.vm.buttonOptions).to.deep.equal({
          class: {
            "bg-tangerine": true,
            "mini-shop-button": true,
            "mini-shop-button--block": true,
            "mini-shop-button--disabled": true,
            "mini-shop-button--flat": true,
            "mini-shop-button--route": true,
            "mini-shop-button--text-center": true,
            "mini-shop-button--text-left": false,
            "mini-shop-button--text-normal": false,
            "mini-shop-button--text-right": false,
            "mini-shop-button--uppercase": true,
            "text-black": true,
          },
          disabled: true,
        });
      });
    });
  });
});

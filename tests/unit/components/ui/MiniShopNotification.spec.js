import { expect } from "chai";
import { shallowMount, config } from "@vue/test-utils";
import MiniShopNotification from "@/components/ui/MiniShopNotification/index.vue";
config.silent = true;
config.showDeprecationWarnings = false;

describe("Components > ui > MiniShopNotification.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(MiniShopNotification, {
      stubs: ["notifications"],
    });
  });

  describe("General", () => {
    it("checks whether componenet was mounted or not.", () => {
      expect(wrapper.exists()).to.equal(true);
    });
  });

  describe("Props", () => {
    describe("group", () => {
      it("checks prop acceptable value type.", () => {
        expect(wrapper.vm.$options.props.group).to.deep.equal({
          type: String,
          default: "general",
        });
      });
    });
  });
  describe("Computed", () => {
    describe("notificationOptions", () => {
      it("checks whether function returns correct content or not when props were changed.", async () => {
        await wrapper.setProps({ group: "test" });
        expect(wrapper.vm.notificationOptions).to.deep.equal({
          group: "test",
          position: "top right",
          width: 350,
          classes: "vue-notification mt-4 p-3 my-style",
          closeOnClick: true,
        });
      });
    });
  });
});

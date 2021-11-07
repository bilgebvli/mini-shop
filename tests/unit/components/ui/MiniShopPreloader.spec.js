import { expect } from "chai";
import { shallowMount, config } from "@vue/test-utils";
import MiniShopPreloader from "@/components/ui/MiniShopPreloader/index.vue";

config.silent = true;
config.showDeprecationWarnings = false;

describe("Components > ui > MiniShopPreloader.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(MiniShopPreloader);
  });

  describe("General", () => {
    it("checks whether componenet was mounted or not.", () => {
      expect(wrapper.exists()).to.equal(true);
    });
  });
});

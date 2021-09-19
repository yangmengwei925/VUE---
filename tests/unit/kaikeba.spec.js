import Kaikeba from '@/components/Kaikeba.vue'
import { mount } from '@vue/test-utils'

describe('Kaikeba.vue', () => {
  // 检查组件选项
  it('要求设置created生命周期', () => {
    expect(typeof Kaikeba.created).toBe('function')
  })
  it('message初始值是vue-test', () => {
    // 检查data函数存在性
    expect(typeof Kaikeba.data).toBe('function')
	// 检查data返回的默认值
    const defaultData = Kaikeba.data()
    expect(defaultData.message).toBe('vue-test')
  })

  it("mount之后测data是开课吧", () => {
      const wrapper = mount(Kaikeba);   
      expect(wrapper.vm.message).toBe("开课吧");
  });

  it("按钮点击后", () => {
    const wrapper = mount(Kaikeba);
    wrapper.find("button").trigger("click");
    // 测试数据变化
    expect(wrapper.vm.message).toBe("按钮点击");

    setTimeout(() => {
       // 测试html渲染结果
    expect(wrapper.find("span").html()).toBe("<span>按钮点击</span>");
    // 等效的方式
    expect(wrapper.find("span").text()).toBe("按钮点击");
    }, 0);
   
});
})
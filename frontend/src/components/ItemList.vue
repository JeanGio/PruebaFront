import { mount } from '@vue/test-utils';
import ItemList from '../src/components/ItemList.vue';

describe('ItemList.vue', () => {
  const items = [{ id: 1, title: 'Ejemplo' }];

  it('renderiza una lista de elementos', () => {
    const wrapper = mount(ItemList, {
      props: { items }
    });

    expect(wrapper.text()).toContain('Ejemplo');
  });

  it('emite evento al hacer clic en botón', async () => {
    const wrapper = mount(ItemList, {
      props: { items }
    });

    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('ver-detalle')).toBeTruthy();
  });
});

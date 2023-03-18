import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../Search.vue'

describe('Search', () => {
  it('renders properly', () => {
    const wrapper = mount(Search, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('')
  })
})

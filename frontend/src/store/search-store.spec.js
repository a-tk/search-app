// stores/counter.spec.ts
import { setActivePinia, createPinia } from 'pinia';
import { useSearchStore } from './search-store';
import { describe, expect, beforeEach, toBe, it } from 'vitest'

describe('Search Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('starts with empty title', () => {
    const store = useSearchStore();
    expect(store.getTitle()).toBe('');
  });

  it('starts with empty href', () => {
    const store = useSearchStore();
    expect(store.getHref()).toBe('');
  });

  it('starts with empty desc', () => {
    const store = useSearchStore();
    expect(store.getDesc()).toBe('');
  });

  it('can set title', () => {
    const store = useSearchStore();
    expect(store.getTitle()).toBe('');
    store.setTitle('title');
    expect(store.getTitle()).toBe('title');
  });

  it('can set href', () => {
    const store = useSearchStore();
    expect(store.getHref()).toBe('');
    store.setHref('href');
    expect(store.getHref()).toBe('href');
  });

  it('can set desc', () => {
    const store = useSearchStore();
    expect(store.getDesc()).toBe('');
    store.setTitle('desc');
    expect(store.getDesc()).toBe('desc');
  });
});
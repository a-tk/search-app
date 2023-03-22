// stores/counter.spec.ts
import { setActivePinia, createPinia } from 'pinia';
import { useSearchStore } from './search-store';
import { describe, expect, beforeEach, toBe, it } from 'vitest';

describe('Search Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('starts with empty title', () => {
    const store = useSearchStore();
    expect(store.title).toBe('');
  });

  it('starts with empty href', () => {
    const store = useSearchStore();
    expect(store.href).toBe('');
  });

  it('starts with empty desc', () => {
    const store = useSearchStore();
    expect(store.desc).toBe('');
  });

  it('can set title', () => {
    const store = useSearchStore();
    expect(store.title).toBe('');
    store.setTitle('title');
    expect(store.title).toBe('title');
  });

  it('can set href', () => {
    const store = useSearchStore();
    expect(store.href).toBe('');
    store.setHref('href');
    expect(store.href).toBe('href');
  });

  it('can set desc', () => {
    const store = useSearchStore();
    expect(store.desc).toBe('');
    store.setDesc('desc');
    expect(store.desc).toBe('desc');
  });
});
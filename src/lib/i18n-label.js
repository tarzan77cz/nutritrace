/** Look up `group.id` through the svelte-i18n translator. Falls back when the key is missing. */
export function tr(t, group, id, fallback) {
  if (typeof t !== 'function' || id == null || id === '') return fallback;
  const key = `${group}.${id}`;
  const value = t(key);
  if (value == null || value === key) return fallback;
  return value;
}

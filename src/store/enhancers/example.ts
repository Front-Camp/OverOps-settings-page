export const example = (store: any) => (next: any) => (action: any) => {
  console.error('store', store);
  console.error('next', next);
  console.error('action', action);
  return next(action);
};

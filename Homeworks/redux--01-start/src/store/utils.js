export const updateObject = (oldObject, updatedFields) => ({
  ...oldObject,
  ...updatedFields,
});

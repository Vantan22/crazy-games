export const hoverDirective = {
  bind(el, binding) {
    el.addEventListener("mouseover", () => {
      binding.value(true);
    });

    el.addEventListener("mouseout", () => {
      binding.value(false);
    });
  },
};

import { component$, Slot } from "@builder.io/qwik";

type CardProps = {
  class?: string;
};
export const Card = component$(({ class: _class }: CardProps) => {
  return (
    <article
      class={`bg-accent flex h-fit w-fit flex-col gap-4 rounded p-6 shadow-2xl ${_class}`}
    >
      <Slot />
    </article>
  );
});

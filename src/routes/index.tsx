import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Card } from "~/components/card/card";

export default component$(() => {
  return (
    <>
      <section class="mt-10 flex h-fit flex-col items-center gap-6">
        <Card>
          <h1 class="font-display border-b-secondary from-primaryDark via-primary to-primaryDark text-primary mt-0 w-fit rounded border-b-4 px-2 text-9xl">
            Sunpunks
          </h1>
          <p class="font-body mt-10 text-xl text-white">
            The hottest stream team on the interwebs, coming to a screen near
            you!
          </p>
        </Card>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Sunpunks",
  meta: [
    {
      name: "description",
      content: "Sunpunks Homepage",
    },
  ],
};

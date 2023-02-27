import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

const PageNotFound = () => {
  return (
    <div className="text-center">
      <p className="text-base font-semibold text-indigo-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </a>
        <a href="#" className="text-sm font-semibold text-gray-900">
          Contact support <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

// This code is used to create an overlay effect on the page based on scroll position. It uses the useScroll, useState and useFrame React Hooks.
export const Overlay = () => {
  // useScroll gets the current user position in the viewport
  const scroll = useScroll();

  // useState sets the opacity of each section to be 1 by default
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  // useFrame is called on each frame
  useFrame(() => {
    // setOpacityFirstSection sets the opacity of the first section from range 0-1/3
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    // setOpacitySecondSection curves the opacity of the second section for smoother transition between two points
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    // setOpacityLastSection sets the opacity of the last section from range 2/3-1
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      {/* DOM contents in here will scroll along https://github.com/pmndrs/drei#scrollcontrols */}
      <div className="w-screen">
        {/* The opacity prop of each <Section> component is assigned the corresponding opacity* state. */}
        <Section opacity={opacityFirstSection}>
          <PageNotFound />
        </Section>
        <Section right opacity={opacitySecondSection}>
          <PageNotFound />
        </Section>
        <Section opacity={opacityLastSection}>
          <PageNotFound />
        </Section>
      </div>
    </Scroll>
  );
};

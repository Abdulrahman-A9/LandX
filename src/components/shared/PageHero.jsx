import React from 'react';

const PageHero = ({ eyebrow, title, description, actions, aside }) => {
  return (
    <section className="relative overflow-hidden border-b border-app-border/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,115,68,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(228,209,186,0.95),transparent_26%),linear-gradient(180deg,rgba(255,252,247,0.9),rgba(242,228,212,0.72))]" />
      <div className="landx-shell relative py-14 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-6">
            {eyebrow ? <div className="landx-kicker">{eyebrow}</div> : null}
            <div className="space-y-4">
              <h1 className="landx-heading max-w-4xl text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="max-w-3xl text-lg leading-9 text-app-text-muted md:text-[1.15rem]">
                {description}
              </p>
            </div>
            {actions ? <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div> : null}
          </div>

          {aside ? <div className="lg:justify-self-end">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
};

export default PageHero;

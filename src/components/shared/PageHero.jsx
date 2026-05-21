import React from 'react';

const PageHero = ({ eyebrow, title, description, actions, aside }) => {
  return (
    <section className="relative overflow-hidden border-b border-app-border/70">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,123,69,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(125,47,54,0.14),transparent_24%)]" />
      <div className="landx-shell relative py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-6">
            {eyebrow ? <div className="landx-kicker">{eyebrow}</div> : null}
            <div className="space-y-4">
              <h1 className="landx-heading max-w-4xl text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="max-w-3xl text-lg leading-9 text-app-text-muted md:text-xl">
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

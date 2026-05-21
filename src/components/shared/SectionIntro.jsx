import React from 'react';

const SectionIntro = ({ eyebrow, title, description, align = 'center' }) => {
  const isStart = align === 'start';

  return (
    <div className={`space-y-4 ${isStart ? 'text-right' : 'text-center'}`}>
      {eyebrow ? (
        <div className={`landx-kicker ${isStart ? 'mx-0' : 'mx-auto'}`}>
          {eyebrow}
        </div>
      ) : null}
      <h2 className={`landx-heading text-3xl font-black leading-tight md:text-4xl ${isStart ? '' : 'mx-auto max-w-3xl'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-app-text-muted leading-8 ${isStart ? 'max-w-2xl' : 'mx-auto max-w-3xl'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionIntro;

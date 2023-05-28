import type { V2_MetaFunction } from '@remix-run/node';
import type { PropsWithChildren } from 'react';
import { Button, Heading } from '~/components';
import { SearchIcon, UploadIcon } from '~/icons';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <main>
      <header className="text-center my-16">
        <Heading level={1}>Remix + Storybook Starter</Heading>
      </header>

      <article className="max-w-3xl mx-auto flex flex-col divide-y">
        <Section title="Text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            culpa!
          </p>
          <p>
            This is <b>bold</b> and this is <strong>strong</strong>.
          </p>
          <p>
            This is <i>italic</i> and this is <em>emphasized</em>.
          </p>
          This is <sup>superscript</sup> text and this is <sub>subscript</sub>{' '}
          text.
          <p>
            This is <u>underlined</u> and this is code:{' '}
            <code>{`for (;;) { ... }`}</code>.
          </p>
          <p>
            Finally, this is a <a href="/">link</a>.
          </p>
        </Section>
        <Section title="Heading">
          <div className="divide-y">
            <div className="flex flex-col gap-2 mb-8">
              <Heading level={1}>Heading Level 1</Heading>
              <Heading level={2}>Heading Level 2</Heading>
              <Heading level={3}>Heading Level 3</Heading>
              <Heading level={4}>Heading Level 4</Heading>
              <Heading level={5}>Heading Level 5</Heading>
              <Heading level={6}>Heading Level 6</Heading>
            </div>
            <div className="py-8">
              <Heading level={1}>Heading Level 1</Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi id ut magnam a impedit similique nam, laudantium
                officiis saepe vitae? Quidem quos eligendi ad nemo cumque
                accusantium dicta, similique qui?
              </p>
            </div>
            <div className="py-8">
              <Heading level={2}>Heading Level 2</Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi id ut magnam a impedit similique nam, laudantium
                officiis saepe vitae? Quidem quos eligendi ad nemo cumque
                accusantium dicta, similique qui?
              </p>
            </div>
            <div className="py-8">
              <Heading level={3}>Heading Level 3</Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi id ut magnam a impedit similique nam, laudantium
                officiis saepe vitae? Quidem quos eligendi ad nemo cumque
                accusantium dicta, similique qui?
              </p>
            </div>
          </div>
        </Section>

        <Section title="Code">
          <pre>
            <code>{`i = 0;

while (!deck.isInOrder()) {
    print 'Iteration ' + i;
    deck.shuffle();
    i++;
}

print 'It took ' + i + ' iterations to sort the deck.';
`}</code>
          </pre>
        </Section>

        <Section title="Icons">
          <div className="grid grid-cols-5 gap-4">
            {[SearchIcon, UploadIcon].map((Icon, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <div className="border p-2 rounded-lg">
                  <Icon className="w-5 h-5" />
                </div>
                <small>{Icon.name}</small>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Buttons">
          { /* prettier-ignore */ }
          <div className="grid grid-cols-3 gap-4 place-items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="primary" icon={<SearchIcon className='w-4 h-4' />}>Primary</Button>
          <Button variant="secondary" icon={<SearchIcon className='w-4 h-4' />} >Secondary</Button>
          <Button variant="tertiary" icon={<SearchIcon className='w-4 h-4' />} >Tertiary</Button>
          <Button variant="primary" disabled>Primary</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="tertiary" disabled>Tertiary</Button>
          <Button variant="primary" disabled loading>Primary</Button>
          <Button variant="secondary" disabled loading>Secondary</Button>
          <Button variant="tertiary" disabled loading>Tertiary</Button>
          <Button variant="primary" fit>Primary Fit</Button>
          <Button variant="secondary" fit>Secondary Fit</Button>
          <Button variant="tertiary" fit>Tertiary Fit</Button>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="secondary" size="small">Small</Button>
          <Button variant="tertiary" size="small">Small</Button>
          <Button variant="primary" size="large">Large</Button>
          <Button variant="secondary" size="large">Large</Button>
          <Button variant="tertiary" size="large">Large</Button>
        </div>
        </Section>
      </article>
    </main>
  );
}

function Section({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <section className="flex gap-4 py-8">
      <header className="basis-48 shrink-0">
        <Heading level={3}>{title}</Heading>
      </header>
      <div className="flex-auto">{children}</div>
    </section>
  );
}

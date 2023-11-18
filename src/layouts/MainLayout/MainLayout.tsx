import { JSXElement } from 'solid-js';
import { A } from '@solidjs/router';
import { PATHS } from '@/AppRouter'

export const MainLayout = (props: { children: JSXElement}) => {
  return (
    <main>
      <section>
        <header>
          <A href={PATHS.translate}>Translate Meme</A>
          <A href={PATHS.create}>Create Meme</A>
        </header>
        <div>
          {props.children}
        </div>
      </section>
    </main>
  )
}
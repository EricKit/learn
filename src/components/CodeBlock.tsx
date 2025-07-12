import { createSignal, createResource, Show } from 'solid-js';
import { createHighlighter } from 'shiki';

interface CodeBlockProps {
  code: string;
  language: string;
  theme?: string;
}

export default function CodeBlock(props: CodeBlockProps) {
  const [highlighter] = createResource(async () => {
    return await createHighlighter({
      themes: ['github-dark', 'github-light'],
      langs: ['html', 'css', 'javascript', 'typescript', 'tsx', 'jsx'],
    });
  });

  const highlightedCode = () => {
    const h = highlighter();
    if (!h) return '';

    return h.codeToHtml(props.code, {
      lang: props.language,
      theme: props.theme || 'github-dark',
    });
  };

  return (
    <Show
      when={!highlighter.loading}
      fallback={
        <pre>
          <code>{props.code}</code>
        </pre>
      }
    >
      <div innerHTML={highlightedCode()} />
    </Show>
  );
}

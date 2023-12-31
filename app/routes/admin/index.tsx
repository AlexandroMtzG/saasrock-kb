import { marked } from "marked";

export default function () {
  return (
    <div className="prose p-6">
      <div
        dangerouslySetInnerHTML={{
          __html: marked(`
### What is SaasRock KB?

This is the Knowledge Base feature of [SaasRock](https://saasrock.com/?ref=saasrock-kb&utm_source=admin). I used **Intercom** and **Crisp** help centers as "inspiration" 😛.

### Features

- **WYSIWYG** editor: [Tiptap](https://tiptap.dev/) editor with AI-powered suggestions (thanks to [Novel.sh](https://novel.sh/?ref=saasrock-kb))
- **Markdown** editor: [Monaco](https://github.com/suren-atoyan/monaco-react) editor with markdown support.
- **Multi-knowlege-base** support: Create multiple knowledge bases for different purposes.
- **Multi-language** support: Add categories and articles in multiple languages.
- **Simple Analytics**: Views, Upvotes, and Downvotes tracking.
- **Image storage** with Supabase: Upload article images to [Supabase](https://supabase.io) Storage.
- **SEO**: Add SEO title, description, and image to your articles.
- **Article Duplication**: Duplicate articles so you don't start from scratch.
- **Article Drafts**: Save your articles as drafts and publish them when you're ready.
- **Import and Export**: Don't lose your data, import and export your knowledge bases.

### Community

- Join the [Discord](https://discord.gg/KMkjU2BFn9) to chat with other SaasRock users or to DM me directly.
- Follow [SaasRock](https://twitter.com/saas_rock) or [me](https://twitter.com/AlexandroMtzG) on Twitter.

### License

Licensed under the MIT License.

### Sponsor

If you find [SaasRock KB](https://kb.saasrock.com/) useful and would like to support its development, consider becoming a sponsor. Your sponsorship will help ensure the continued maintenance and improvement of this project.

You can sponsor me on [GitHub Sponsors](https://github.com/sponsors/AlexandroMtzG). Every contribution is highly appreciated!
`),
        }}
      />
    </div>
  );
}

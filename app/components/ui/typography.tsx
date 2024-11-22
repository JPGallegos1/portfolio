function TypographyH2({text}: {text: string}) {
    return (
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {text}
      </h2>
    )
  }

export default function Typography({type, text}: {type: string, text: string}) {
    const typographies: Record<string, React.ComponentType<{text: string}>> = {
        'h2': TypographyH2,
    }

    const Component = typographies[type];

    if (!Component) {
        return null;
    }

    return <Component text={text} />;
}

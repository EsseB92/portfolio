type Props = {
  data: Record<string, unknown>;
};

/**
 * Bloc JSON-LD. Les « < » sont échappés pour qu'aucune donnée ne puisse
 * fermer la balise <script>.
 */
export default function JsonLd({ data }: Props) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

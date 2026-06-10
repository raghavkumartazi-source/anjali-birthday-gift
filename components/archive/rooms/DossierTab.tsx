type DossierTabProps = {
  title: string;
  classification: string;
};

export function DossierTab({ title, classification }: DossierTabProps) {
  return (
    <div className="dossier-tab">
      <div className="dossier-tab-rule" aria-hidden="true" />
      <h3 className="dossier-tab-title">{title}</h3>
      <p className="dossier-tab-classification">{classification}</p>
    </div>
  );
}

import { getMetiers, createMetier, deleteMetier } from "@/features/admin/actions";

export default async function AdminDashboardPage() {
  // Récupération des métiers directement côté serveur (SSR)
  const metiers = await getMetiers();

  // Handler de formulaire utilisant les Server Actions de manière native
  async function handleCreate(formData: FormData) {
    "use server";
    const libelle = formData.get("libelle") as string;
    try {
      await createMetier(libelle);
    } catch (error: any) {
      // Pour une interface brute, les erreurs peuvent être gérées via des query params ou un composant client.
      // Ici, la page se revalide automatiquement en cas de succès.
      console.error(error.message);
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Espace Administration - Gestion des Métiers</h1>
      <hr />

      {/* Formulaire d'ajout brut */}
      <h2>Ajouter un nouveau métier</h2>
      <form action={handleCreate} style={{ marginBottom: "30px" }}>
        <label htmlFor="libelle">Nom du métier : </label>
        <input 
          type="text" 
          id="libelle" 
          name="libelle" 
          required 
          placeholder="Ex: Développeur Web, Mobile..." 
        />
        <button type="submit">Enregistrer</button>
      </form>

      <hr />

      {/* Liste et suppression (CRUD) */}
      <h2>Métiers enregistrés sur BonCop</h2>
      {metiers.length === 0 ? (
        <p>Aucun métier n'est enregistré pour le moment.</p>
      ) : (
        <table border={1} cellPadding={10} style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Libellé du métier</th>
              <th>Date de création</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {metiers.map((metier) => (
              <tr key={metier.id}>
                <td>{metier.id}</td>
                <td><strong>{metier.libelle}</strong></td>
                <td>{new Date(metier.createdAt).toLocaleDateString("fr-CG")}</td>
                <td>
                  {/* Formulaire en ligne dédié à la suppression par ID */}
                  <form action={async () => {
                    "use server";
                    await deleteMetier(metier.id);
                  }}>
                    <button 
                      type="submit" 
                      style={{ color: "red", cursor: "pointer" }}
                      onClick="return confirm('Voulez-vous vraiment supprimer ce métier ?');">
                      Supprimer
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

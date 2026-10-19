type OsztalyVezerloProps = {
    jelenletNovelese: () => void
    jelenletCsokkentese: () => void
    hangulatValtoztatas: () => void
}

function OsztalyVezerlo({
    jelenletNovelese,
    jelenletCsokkentese,
    hangulatValtoztatas
}: OsztalyVezerloProps) {
    return (
        <div className="card">
            <div className="card-header">
                Vezérlők
            </div>

            <div className="card-body d-flex flex-column gap-3">
                <button
                    className="btn btn-success"
                    onClick={jelenletNovelese}
                >
                    Jelenlévők számának növelése
                </button>

                <button
                    className="btn btn-danger"
                    onClick={jelenletCsokkentese}
                >
                    Jelenlévők számának csökkentése
                </button>

                <button
                    className="btn btn-primary"
                    onClick={hangulatValtoztatas}
                >
                    Hangulat megváltoztatása
                </button>
            </div>
        </div>
    )
}

export default OsztalyVezerlo
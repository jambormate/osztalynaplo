type OsztalyAdatokProps = {
    jelenlevok: number
    hangulat: string
}

function OsztalyAdatok({ jelenlevok, hangulat }: OsztalyAdatokProps) {
    return (
        <div className="card mb-4">
            <div className="card-header bg-primary text-white">
                Osztály adatai
            </div>

            <div className="card-body">
                <p className="fs-5">
                    Jelenlévő diákok száma: <strong>{jelenlevok}</strong> / 30
                </p>

                <p className="fs-5 mb-0">
                    Osztály hangulata: <strong>{hangulat}</strong>
                </p>
            </div>
        </div>
    )
}

export default OsztalyAdatok

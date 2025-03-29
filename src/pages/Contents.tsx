// Components
import ContentCard from "../components/ContentCard";

function Contents() {
    return (
        <>
            <div className="title-panel">
                <h1>Conteúdos</h1>
                <h3 className="text-lg">
                    Conteúdos das aulas resumidos e simplificados.
                </h3>
            </div>
            <div className="gid grid-flow-row">
                <div className="main-content-panel">
                    <ContentCard
                        content={{
                            id: 1,
                            title: "Matheus",
                            text: "Makalakdfjlaksdjflaksdjf",
                            date: Date(),
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default Contents;

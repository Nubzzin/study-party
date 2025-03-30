import { useState, useEffect } from "react";
import ContentCard from "../components/ContentCard";
import { getContents, Content } from "../services/api";

function ContentsPanel() {
    const [contents, setContents] = useState<Content[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchContents = async () => {
            try {
                console.log("Component is fetching contents...");
                const data = await getContents();
                console.log("Component received data:", data);

                if (!Array.isArray(data)) {
                    throw new Error(
                        "Expected array of contents but got: " + typeof data,
                    );
                }

                setContents(data);
                setIsLoading(false);
            } catch (err: unknown) {
                console.error(
                    "Error in component while fetching contents:",
                    err,
                );
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
                setIsLoading(false);
            }
        };

        fetchContents();
    }, []);

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <div>Error: {error}</div>;

    console.log("Rendering with contents:", contents);

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
                    {contents && contents.length > 0 ? (
                        contents.map((c) => (
                            <ContentCard key={c.id} content={c} />
                        ))
                    ) : (
                        <p>No content available</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default ContentsPanel;

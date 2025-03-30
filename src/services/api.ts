export interface Content {
    id: number;
    title: string;
    text: string;
    image?: string;
    readonly date: string;
}

export const getContents = async (): Promise<Content[]> => {
    try {
        console.log("Fetching from API...");
        const result = await fetch("http://localhost:8080/contents");

        if (!result.ok) {
            throw new Error(`HTTP error! Status: ${result.status}`);
        }

        const data = await result.json();
        console.log("API response:", data);
        return data;
    } catch (error) {
        console.error("API fetch error:", error);
        throw error;
    }
};

export const getContentId = async (id: number): Promise<Content> => {
    try {
        const result = await fetch(`http://localhost:8080/contents/${id}`);

        if (!result.ok) {
            throw new Error(`HTTP error! Status: ${result.status}`);
        }

        return await result.json();
    } catch (error) {
        console.error(`Error fetching content ${id}:`, error);
        throw error;
    }
};

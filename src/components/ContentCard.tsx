export interface Content {
    id: number;
    title: string;
    text: string;
    image?: string;
    readonly date: string;
}

function ContentCard({ content }: { content: Content }) {
    return (
        <div>
            <h2>{content.title}</h2>
            <p>{content.text}</p>
            {content.image && <img src={content.image}></img>}
            <p>{content.date}</p>
        </div>
    );
}

export default ContentCard;

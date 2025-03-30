import { Content } from "../services/api";

function ContentCard({ content }: { content: Content }) {
    return (
        <div className="content-card">
            <h2>{content.title}</h2>
            <p>{content.text}</p>
            {content.image && <img src={content.image} alt={content.title} />}
            <p>{content.date}</p>
        </div>
    );
}

export default ContentCard;

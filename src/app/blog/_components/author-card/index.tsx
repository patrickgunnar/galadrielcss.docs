type AuthorCardType = {
    authorName: string;
    authorAbout: string;
    postCreationTime: string;
};

export default function AuthorCard({
    authorName,
    authorAbout,
    postCreationTime,
}: AuthorCardType) {
    return (
        <div className="@module:authorCardComponent::cardContainer">
            <h3 className="@module:authorCardComponent::authorName">
                {authorName}
            </h3>
            <p className="@module:authorCardComponent::authorAbout">
                {authorAbout}
            </p>
            <p className="@module:authorCardComponent::creationTime">
                {new Date(postCreationTime).toUTCString()}
            </p>
        </div>
    );
}

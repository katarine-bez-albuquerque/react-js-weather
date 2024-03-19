import { Ilayout } from "../../interfaces/layout";

const Article = ({children}:Ilayout) => {
    return(
        <article>{children}</article>
    );
}

export default Article;
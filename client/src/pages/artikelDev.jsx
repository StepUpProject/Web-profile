import HeadTitle from "../components/Elements/HeadTitle";
import FormArticle from "../components/Fragments/FormArticle";
import Navbar from "../components/Fragments/Navbar";

const ArticleDev = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeadTitle>Buat Artikel</HeadTitle>
            <FormArticle></FormArticle>
        </div>
    );
};

export default ArticleDev
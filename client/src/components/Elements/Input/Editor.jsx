import JoditEditor from "jodit-react";

const Editor = ({ editor, content, setContent}) => {
  const handleChange = (newContent) => setContent(newContent);
    return (
        <div className="w-full pe-4 h-max">
            <label htmlFor="content" className="labelArticle text-md">
              Isi Artikel
            </label>
            <JoditEditor
              name="content"
              ref={editor}
              value={content}
              onChange={handleChange}
            />
        </div>
    )
}

export default Editor

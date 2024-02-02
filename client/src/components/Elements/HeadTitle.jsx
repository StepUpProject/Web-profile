const HeadTitle = ({ children }) => {
    return (
        <div className="pt-24 mb-8 flex justify-center items-center">
            <h1 className="font-bold text-2xl place-items-center">{children}</h1>
        </div>
    );
}

export default HeadTitle
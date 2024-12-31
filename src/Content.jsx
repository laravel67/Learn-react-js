export default function Content({children}){
    return (
        <>
            <h1 className="">Website</h1>
            <div className="">
                {children}
            </div>
            <footer className="">
                @copyright
            </footer>
        </>
    )
}
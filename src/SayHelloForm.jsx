export default function SayHelloForm() {
    function handleSayHello(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        document.getElementById("text_hello").innerText=`Hello ${name}`
    }
    return <div className="">
        <form className="">
            <input className="" name="name" id="name" />
            <button onClick={handleSayHello} className="">
                Say Hello
            </button>
        </form>
        <h1 className="" id="text_hello">Hello Word</h1>
    </div>
}
function Input({text}) {
    return (
        <input className="rounded-full p-5 drop-shadow-md text-forground/25 border-2  focus:border-texttitle outline-none focus:text-text" placeholder={text}></input>
    )
}

export {Input}
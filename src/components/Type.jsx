function Type({ text, Icon }) {
    return (
        <div className="rounded-lg bg-forground w-44 h-44 flex flex-col items-center justify-center drop-shadow-md gap-3 px-6">
            <div className="flex rounded-full items-center justify-center w-20 h-20 bg-background">
                <Icon/>
            </div>
            <h2 className="text-text text-center">{text}</h2>
        </div>
    )
}

function Type2({ text, Icon }) {
    return (
        <div className="pl-3 rounded-3xl bg-forground w-72 h-16 flex flex-row items-center drop-shadow-md gap-3">
            <div className="flex rounded-full items-center justify-center w-10 h-10 bg-background">
                <Icon/>
            </div>
            <h2 className="text-text">{text}</h2>
        </div>
    )
}

function TypeDents({ Icon = () => <div></div> }) {
    return (
        <div className="flex rounded-full items-center justify-center w-24 h-24 border-solid border-4 p-2 border-texttitle">
            <Icon/>
        </div>
    )
}

export {Type, Type2, TypeDents}
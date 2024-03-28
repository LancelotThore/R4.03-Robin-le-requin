export default function Input({type, placeholder, value, onChange, ...props}) {
    return (
        <input className="rounded-full px-7 py-4 drop-shadow-md text-forground/25 border-2 border-white focus:border-texttitle outline-none text-text w-9/12 max-w-lg"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}></input>
    )
}
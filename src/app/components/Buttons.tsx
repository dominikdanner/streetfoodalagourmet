
interface ButtonProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLButtonElement> {

}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button className={"bg-highlight rounded-lg border-2 border-black px-6 py-2 font-medium hover:scale-105 transition-all hover:bg-black hover:text-white " + props.className} {...props}>
            {props.children}
        </button>
    )
}

export const InvertedButton: React.FC<ButtonProps> = (props) => {
    return (
        <button className="bg-black text-white rounded-lg border-2 border-black px-8 py-2 font-medium hover:scale-105 transition-all hover:bg-highlight hover:text-black" {...props}>
            {props.children}
        </button>
    )
}